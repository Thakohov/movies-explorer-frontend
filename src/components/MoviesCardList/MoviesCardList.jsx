import "./MoviesCardList.css";
import React, { useState, useEffect } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom";
import { ADD_CARD, WIDTH_SIZE, COUNT_CARD } from "../../utils/constants";

function MoviesCardList({ movies, onLike, onDelete, checkLike }) {
  const path = useLocation().pathname;
  const [countCards, setCountCards] = useState(12);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResizeWindow = () =>
      setTimeout(() => setWidth(window.innerWidth), 1500);
    window.addEventListener("resize", handleResizeWindow);
    if (width > WIDTH_SIZE.BIG) {
      setCountCards(COUNT_CARD.MAX);
    } else if (width > WIDTH_SIZE.MEDIUM) {
      setCountCards(COUNT_CARD.MEDIUM);
    } else setCountCards(COUNT_CARD.SMALL);

    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, [width, movies]);

  const showMore = () => {
    if (width > WIDTH_SIZE.BIG) {
      setCountCards(countCards + ADD_CARD.MAX);
    } else {
      setCountCards(countCards + ADD_CARD.MIN);
    }
  };

  return (
    <section className="movie">
      <ul className="cards">
        {movies.slice(0, countCards).map((movie) => (
          <MoviesCard
            key={movie.movieId}
            movie={movie}
            onLike={onLike}
            onDelete={onDelete}
            checkLike={checkLike}
          />
        ))}
      </ul>
      {movies.length === 0 && (
        <h1 className="movie__heading">Ничего не найдено</h1>
      )}
      {path === "/movies" && !(movies.length <= countCards) && (
        <button
          type="button"
          className="button cards__button"
          onClick={showMore}
        >
          Ещё
        </button>
      )}
    </section>
  );
}

export default MoviesCardList;
