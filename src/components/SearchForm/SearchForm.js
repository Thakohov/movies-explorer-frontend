import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return (
    <div className="search">
      <form className="search__form">
        <div className="search__input-button">
          <input placeholder="Фильм" className="search__input" required />
          <button type="button" className="button search__button" />
        </div>
        <FilterCheckbox />
      </form>
    </div>
  );
}

export default SearchForm;
