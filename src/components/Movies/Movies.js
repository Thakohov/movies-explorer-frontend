import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";

function Movies({
  movies,
  setSortedMovies,
  preloader,
  searchForm,
  setSearchForm,
  searchMovies,
  searchError,
  shortMovieCheckbox,
  onCheckbox,
  onLike,
  onDelete,
  checkLike,
}) {
  return (
    <main className="movies">
      <SearchForm
        setSearchForm={setSearchForm}
        searchForm={searchForm}
        searchMovies={searchMovies}
        setSortedMovies={setSortedMovies}
        searchError={searchError}
        shortMovieCheckbox={shortMovieCheckbox}
        onCheckbox={onCheckbox}
      />
      {preloader ? (
        <Preloader />
      ) : (
        <MoviesCardList
          movies={movies}
          onLike={onLike}
          checkLike={checkLike}
          onDelete={onDelete}
        />
      )}
    </main>
  );
}

export default Movies;
