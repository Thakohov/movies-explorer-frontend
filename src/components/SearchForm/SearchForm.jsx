import React from "react";
import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm({
  searchMovies,
  searchForm,
  setSearchForm,
  searchError,
  shortMovieCheckbox,
  onCheckbox,
}) {
  const handleSearch = (evt) => {
    evt.preventDefault();
    searchMovies();
  };

  const handleChange = (evt) => {
    setSearchForm(evt.target.value);
  };

  return (
    <div className="search">
      <form className="search__form">
        <div className="search__input-button">
          <input
            placeholder="Фильм"
            value={searchForm || ""}
            className="search__input"
            onChange={handleChange}
            required
          />
          <span className="search__error">{searchError}</span>
          <button className="button search__button" onClick={handleSearch} />
        </div>
        <FilterCheckbox
          shortMovieCheckbox={shortMovieCheckbox}
          onCheckbox={onCheckbox}
        />
      </form>
    </div>
  );
}

export default SearchForm;
