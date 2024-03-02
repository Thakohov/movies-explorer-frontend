import "./MoviesCard.css";
import React from "react";
import { useLocation } from "react-router-dom";

function MoviesCard({ movie, onLike, onDelete, checkLike }) {
  const path = useLocation().pathname;

  const isSaved = checkLike(movie);

  const handleLikeClick = () => {
    onLike(movie);
  };

  const handleDeleteClick = () => {
    onDelete(movie);
  };

  function timeConvert(n) {
    var num = n;
    var hours = num / 60;
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return rhours + "ч " + rminutes + "м";
  }

  const duration = timeConvert(movie.duration);

  return (
    <>
      <li className="card">
        <a
          href={movie.trailerLink}
          className="link card__link"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="card__image"
            src={movie.image}
            alt={`Кадр из фильма ${movie.nameRU}`}
          />
        </a>
        {path === "/movies" ? (
          isSaved ? (
            <button
              className="button card__button card__button_type_saved"
              type="button"
              onClick={handleDeleteClick}
            ></button>
          ) : (
            <button
              className="button card__button card__button_type_save"
              type="button"
              onClick={handleLikeClick}
            >
              Сохранить
            </button>
          )
        ) : (
          <button
            className="button card__button card__button_type_delete"
            type="button"
            onClick={handleDeleteClick}
          ></button>
        )}
        <div className="card__container">
          <p className="card__name">{movie.nameRU}</p>
          <span className="card__duration">{duration}</span>
        </div>
      </li>
    </>
  );
}

export default MoviesCard;
