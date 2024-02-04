import "./Navigation.css";
import React from "react";
import { useLocation } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";

function Navigation({ isLoggedIn, isOpen, closePopup, openPopup }) {
  const path = useLocation().pathname;

  return (
    <>
      {isLoggedIn ? (
        <>
          <nav className="nav__movies">
            <NavLink
              className={`link nav__movie ${
                path === "/movies" ? "nav__movie_active" : ""
              }`}
              to="/movies"
            >
              Фильмы
            </NavLink>
            <NavLink
              className={`link nav__movie ${
                path === "/saved-movies" ? "nav__movie_active" : ""
              }`}
              to="/saved-movies"
            >
              Сохранённые фильмы
            </NavLink>
          </nav>
          <Link className="link nav__account" to="/profile">
            Аккаунт
          </Link>
          <button
            type="button"
            className="button nav__btn"
            onClick={openPopup}
          ></button>
        </>
      ) : (
        <>
          <nav className="nav-out">
            <Link className="link nav-out__link" to="/signup">
              Регистрация
            </Link>
            <Link
              className="link nav-out__link nav-out__link_type_btn"
              to="/signin"
            >
              Войти
            </Link>
          </nav>
        </>
      )}

      <nav className={`popup ${isOpen ? "popup_opened" : ""} `}>
        <div className="popup__container">
          <button
            type="button"
            className="button popup__close"
            onClick={closePopup}
          ></button>
          <NavLink
            className={`link popup__link ${
              path === "/" ? "popup__link_active" : ""
            }`}
            to="/"
          >
            Главная
          </NavLink>
          <NavLink
            className={`link popup__link ${
              path === "/movies" ? "popup__link_active" : ""
            }`}
            to="/movies"
          >
            Фильмы
          </NavLink>
          <NavLink
            className={`link popup__link ${
              path === "/saved-movies" ? "popup__link_active" : ""
            }`}
            to="/saved-movies"
          >
            Сохранённые фильмы
          </NavLink>
          <Link className="link popup__account" to="/profile">
            Аккаунт
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
