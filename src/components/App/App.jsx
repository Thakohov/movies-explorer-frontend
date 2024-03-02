import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Page404 from "../NotFound/NotFound";
import InfoTooltip from "../InfoToolTip/InfoToolTip";

import CurrentUserContext from "../../contexts/CurrentUserContext";
import ProtectedRoute from "../../hooks/ProtectedRoute";

import {
  setToken,
  getUser,
  addMovie,
  deleteMovie,
  getMovies,
} from "../../utils/MainApi";
import { getMovieList, BASE_URL } from "../../utils/MoviesApi";
import { ERRORS, RES_ERRORS, shortMovieDuration } from "../../utils/constants";

import infoToolError from "../../images/union-error-min.svg";

function App() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const path = useLocation().pathname;
  const headerPath = ["/", "/movies", "/saved-movies", "/profile"];
  const footerPath = ["/", "/movies", "/saved-movies"];

  const [loggedIn, setLoggedIn] = useState(token);
  const [preloader, setPreloader] = useState(false);

  const [searchForm, setSearchForm] = useState("");
  const [savedSearchForm, setSavedSearchForm] = useState("");

  const [currentUser, setCurrentUser] = useState({ name: "", email: "" });

  const [movies, setMovies] = useState([]);
  const [sortedMovies, setSortedMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [sortedSavedMovies, setSortedSavedMovies] = useState([]);
  const [firstSearch, setFirstSearch] = useState(true);

  const [textError, setTextError] = useState("");

  const [shortMovieCheckbox, setShortMovieCheckbox] = useState(false);
  const [savedShortMovieCheckbox, setSavedShortMovieCheckbox] = useState(false);

  const [isInfoToolTipOpen, setIsInfoToolTipOpen] = useState(false);
  const [infoToolTipImage, setInfoToolTipImage] = React.useState("");
  const [infoToolTipTitle, setInfoToolTipTitle] = React.useState("");

  const onSubmit = ({ token }) => {
    localStorage.setItem("token", token);
    setToken(token);
    setLoggedIn(true);
    // setPreloader(false);
  };

  const signOut = () => {
    setTextError("");
    setToken(null);
    setLoggedIn(false);
    setCurrentUser({});
    navigate("/", { replace: true });
    setShortMovieCheckbox(false);
    setSearchForm("");
    setMovies([]);
    setSortedMovies([]);
    setSavedMovies([]);
    setSortedSavedMovies([]);
    localStorage.clear();
  };

  const handleTokenCheck = () => {
    setToken(token);
    getUser(token)
      .then(() => setLoggedIn(true))
      .catch((err) => {
        console.log(err);
        setLoggedIn(false);
      });
  };

  useEffect(() => {
    handleTokenCheck();
  }, []);

  useEffect(() => {
    if (loggedIn) {
      Promise.all([getMovies(), getUser()])
        .then(([moviesSaved, user]) => {
          setSavedMovies(moviesSaved);
          setCurrentUser(user);
          setMovies(JSON.parse(localStorage.getItem("allMovies")) ?? movies);
          setSortedMovies(
            JSON.parse(localStorage.getItem("movies")) ?? sortedMovies
          );
          setSearchForm(localStorage.getItem("search-input"));
          setShortMovieCheckbox(localStorage.getItem("checkbox") === "true");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [loggedIn]);

  const getAllMovies = () => {
    getMovieList()
      .then((movies) => {
        const newMovies = movies.map((movie) => ({
          country: movie.country,
          director: movie.director,
          duration: movie.duration,
          year: movie.year,
          description: movie.description,
          image: BASE_URL + movie.image.url,
          trailerLink: movie.trailerLink,
          thumbnail: BASE_URL + movie.image.formats.thumbnail.url,
          movieId: movie.id,
          nameRU: movie.nameRU,
          nameEN: movie.nameEN,
        }));
        setMovies(newMovies);
        saveMovies(newMovies);
        localStorage.setItem("allMovies", JSON.stringify(newMovies));
      })
      .catch((err) => {
        console.log(err);
        setTextError(RES_ERRORS.SEARCH_ERROR);
      })
      .finally(() => {
        setPreloader(false);
      });
  };

  const searchMovies = () => {
    setFirstSearch(false);
    if (!searchForm) {
      setTextError(ERRORS.NEED_LETTERS);
      return;
    }
    setPreloader(true);
    if (movies.length > 0) {
      saveMovies(movies);
      setPreloader(false);
      setTextError("");
    } else {
      getAllMovies();
      setTextError("");
    }
  };

  const saveMovies = (movies) => {
    const newSortedMovies = sortMovies(movies, searchForm, shortMovieCheckbox);
    localStorage.setItem("movies", JSON.stringify(newSortedMovies));
    localStorage.setItem("search-input", searchForm);
    localStorage.setItem("checkbox", shortMovieCheckbox);
    setSortedMovies(newSortedMovies);
  };

  const searchSavedMovies = () => {
    const sortedMovies = sortMovies(
      savedMovies,
      savedSearchForm,
      savedShortMovieCheckbox
    );
    setSortedSavedMovies(sortedMovies);
  };
  useEffect(searchSavedMovies, [savedShortMovieCheckbox, savedMovies]);

  useEffect(() => {
    if (firstSearch) return;
    searchMovies();
    setTextError("");
  }, [shortMovieCheckbox, savedMovies]);

  const sortMovies = (movies, searchForm, checkbox) => {
    return movies.filter((movie) =>
      checkbox
        ? movie.duration <= shortMovieDuration &&
          (movie.nameRU.toLowerCase().includes(searchForm.toLowerCase()) ||
            movie.nameEN.toLowerCase().includes(searchForm.toLowerCase()))
        : movie.nameRU.toLowerCase().includes(searchForm.toLowerCase()) ||
          movie.nameEN.toLowerCase().includes(searchForm.toLowerCase())
    );
  };

  const goBack = () => {
    navigate(-1);
  };

  const handleAddMovie = (movie) => {
    addMovie(movie)
      .then((newMovie) => {
        setSavedMovies([...savedMovies, newMovie]);
      })
      .catch((err) => {
        console.log(err);
        setInfoToolTipImage(infoToolError);
        setInfoToolTipTitle(RES_ERRORS.SERVER_TIMEOUT);
      });
  };

  const handleDeleteMovie = (movie) => {
    const id = movie._id
      ? movie._id
      : savedMovies.find((item) => item.movieId === movie.movieId)._id;
    deleteMovie(id)
      .then(() => {
        setSavedMovies((movies) => movies.filter((item) => item._id !== id));
      })
      .catch((err) => {
        console.log(err);
        setInfoToolTipImage(infoToolError);
        setInfoToolTipTitle(RES_ERRORS.SERVER_TIMEOUT);
      });
  };

  const checkLike = (movie) =>
    savedMovies.some((item) => item.movieId === movie.movieId);

  const handleInfoToolTipOpen = () => {
    setIsInfoToolTipOpen(!isInfoToolTipOpen);
  };

  return (
    <CurrentUserContext.Provider
      value={currentUser}
      setCurrentUser={setCurrentUser}
    >
      <div className="page">
        {headerPath.includes(path) && <Header LoggedIn={loggedIn} />}
        <Routes>
          <Route path="*" element={<Page404 onClick={goBack} />} />
          <Route path="/" element={<Main />} />
          <Route
            path="/movies"
            element={
              <ProtectedRoute
                element={Movies}
                loggedIn={loggedIn}
                movies={sortedMovies}
                setSortedMovies={setSortedMovies}
                preloader={preloader}
                searchForm={searchForm}
                setSearchForm={setSearchForm}
                searchMovies={searchMovies}
                shortMovieCheckbox={shortMovieCheckbox}
                onCheckbox={() => setShortMovieCheckbox(!shortMovieCheckbox)}
                onLike={handleAddMovie}
                onDelete={handleDeleteMovie}
                searchError={textError}
                checkLike={checkLike}
              />
            }
          />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute
                element={SavedMovies}
                movies={sortedSavedMovies}
                loggedIn={loggedIn}
                onCheckbox={() =>
                  setSavedShortMovieCheckbox(!savedShortMovieCheckbox)
                }
                shortMovieCheckbox={savedShortMovieCheckbox}
                checkLike={checkLike}
                onDelete={handleDeleteMovie}
                searchMovies={searchSavedMovies}
                setSearchForm={setSavedSearchForm}
                searchForm={savedSearchForm}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute
                element={Profile}
                loggedIn={loggedIn}
                onSignOut={signOut}
                setCurrentUser={setCurrentUser}
              />
            }
          />
          <Route
            path="/signin"
            element={<Login onSubmit={onSubmit} loggedIn={loggedIn} />}
          />
          <Route
            path="/signup"
            element={<Register onSubmit={onSubmit} loggedIn={loggedIn} />}
          />
        </Routes>
        {footerPath.includes(path) && <Footer />}
        <InfoTooltip
          isOpen={isInfoToolTipOpen}
          onClose={handleInfoToolTipOpen}
          image={infoToolTipImage}
          title={infoToolTipTitle}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
