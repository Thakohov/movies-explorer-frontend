import "./MoviesCardList.css";
import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom";

function MoviesCardList() {
  const path = useLocation().pathname;

  return (
    <section className="movie">
      <ul className="cards">
        <MoviesCard isSaved={true} />
      </ul>
      {path === "/movies" && (
        <button type="button" className="button cards__button">
          Ещё
        </button>
      )}
    </section>
  );
}

export default MoviesCardList;
