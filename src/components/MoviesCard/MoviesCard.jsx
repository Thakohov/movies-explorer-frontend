import "./MoviesCard.css";
import React from "react";
import { useLocation } from "react-router-dom";
import movie1 from "../../images/movie1.png";
import movie2 from "../../images/movie2.png";
import movie3 from "../../images/movie3.png";
import movie4 from "../../images/movie4.png";

function MoviesCard({ isSaved }) {
  const path = useLocation().pathname;
  return (
    <>
      <li className="card">
        <img
          src={movie1}
          alt={`Кадр из фильма: 33 слова о дизайне`}
          className="card__image"
        />

        {path === "/movies" ? (
          isSaved ? (
            <button
              className="button card__button card__button_type_saved"
              type="button"
            ></button>
          ) : (
            <button
              className="button card__button card__button_type_save"
              type="button"
            >
              Сохранить
            </button>
          )
        ) : (
          <button
            className="button card__button card__button_type_delete"
            type="button"
          ></button>
        )}

        <div className="card__container">
          <p className="card__name">33 слова о дизайне</p>
          <span className="card__duration">1ч 17м</span>
        </div>
      </li>
      <li className="card">
        <img
          src={movie2}
          alt={`Кадр из фильма: Киноальманах «100 лет дизайна»`}
          className="card__image"
        />
        {path === "/movies" ? (
          !isSaved ? (
            <button
              className="button card__button card__button_type_saved"
              type="button"
            ></button>
          ) : (
            <button
              className="button card__button card__button_type_save"
              type="button"
            >
              Сохранить
            </button>
          )
        ) : (
          <button
            className="button card__button card__button_type_delete"
            type="button"
          ></button>
        )}
        <div className="card__container">
          <p className="card__name">Киноальманах «100 лет дизайна»</p>
          <span className="card__duration">1ч 17м</span>
        </div>
      </li>
      <li className="card">
        <img
          src={movie3}
          alt={`Кадр из фильма: В погоне за Бенкси`}
          className="card__image"
        />
        {path === "/movies" ? (
          isSaved ? (
            <button
              className="button card__button card__button_type_saved"
              type="button"
            ></button>
          ) : (
            <button
              className="button card__button card__button_type_save"
              type="button"
            >
              Сохранить
            </button>
          )
        ) : (
          <button
            className="button card__button card__button_type_delete"
            type="button"
          ></button>
        )}
        <div className="card__container">
          <p className="card__name">В погоне за Бенкси</p>
          <span className="card__duration">1ч 17м</span>
        </div>
      </li>
      <li className="card">
        <img
          src={movie4}
          alt={`Кадр из фильма: Баския: Взрыв реальности`}
          className="card__image"
        />
        {path === "/movies" ? (
          !isSaved ? (
            <button
              className="button card__button card__button_type_saved"
              type="button"
            ></button>
          ) : (
            <button
              className="button card__button card__button_type_save"
              type="button"
            >
              Сохранить
            </button>
          )
        ) : (
          <button
            className="button card__button card__button_type_delete"
            type="button"
          ></button>
        )}
        <div className="card__container">
          <p className="card__name">Баския: Взрыв реальности</p>
          <span className="card__duration">1ч 17м</span>
        </div>
      </li>
    </>
  );
}

export default MoviesCard;
