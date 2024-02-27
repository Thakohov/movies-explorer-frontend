import "./FilterCheckbox.css";

function FilterCheckbox({ shortMovieCheckbox, onCheckbox }) {
  return (
    <div className="filter">
      <label className="filter__switch">
        <input
          onChange={onCheckbox}
          checked={shortMovieCheckbox}
          type="checkbox"
          className="filter__input"
        />
        <span className="button filter__slider filter__slider_type_round"></span>
      </label>
      <p className="filter__name">Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
