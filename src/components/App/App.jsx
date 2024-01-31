import "./App.css";
import React from "react";
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

function App() {
  const navigate = useNavigate();

  const path = useLocation().pathname;
  const footerPath = ["/", "/movies", "/saved-movies"];
  const headerPath = ["/", "/movies", "/saved-movies", "/profile"];

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="page">
      {headerPath.includes(path) && <Header />}
      <Routes>
        <Route path="/*" element={<Page404 onClick={goBack} />} />
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
        <Route
          path="/profile"
          element={<Profile isEditMode={false} isError={false} />}
        />
        <Route path="/signin" element={<Login isError={false} />} />
        <Route path="/signup" element={<Register isError={false} />} />
      </Routes>
      {footerPath.includes(path) && <Footer />}
    </div>
  );
}

export default App;
