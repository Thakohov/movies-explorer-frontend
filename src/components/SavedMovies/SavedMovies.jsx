import React, { useEffect } from "react";
import "./SavedMovies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";

function SavedMovies({
  movies,
  preloader,
  searchForm,
  setSearchForm,
  checkLike,
  onDelete,
  searchMovies,
  setSortedMovies,
  onCheckbox,
  shortMovieCheckbox,
  searchError,
  resetSearchSavedMovies,
}) {
  useEffect(() => {
    return () => {
      resetSearchSavedMovies();
      if (!shortMovieCheckbox) searchMovies();
    };
  }, []);

  return (
    <main className="saved">
      <SearchForm
        searchMovies={searchMovies}
        setSortedMovies={setSortedMovies}
        setSearchForm={setSearchForm}
        searchForm={searchForm}
        searchError={searchError}
        onCheckbox={onCheckbox}
        shortMovieCheckbox={shortMovieCheckbox}
      />
      {preloader ? (
        <Preloader />
      ) : (
        <MoviesCardList
          movies={movies}
          checkLike={checkLike}
          onDelete={onDelete}
        />
      )}
    </main>
  );
}

export default SavedMovies;
