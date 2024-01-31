import "./FilterCheckbox.css";

function FilterCheckbox() {
  return (
    <div className="filter">
      <label className="filter__switch">
        <input type="checkbox" className="filter__input" />
        <span className="filter__slider filter__slider_type_round"></span>
      </label>
      <p className="filter__name">Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
