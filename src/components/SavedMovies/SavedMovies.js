import "./SavedMovies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies() {
  return (
    <main className="saved">
      <SearchForm />
      <MoviesCardList />
    </main>
  );
}

export default SavedMovies;
