import "./Register.css";
import React from "react";
import { Link } from "react-router-dom";

function Register({ isError }) {
  return (
    <div className="register">
      <Link className="link register__logo" to="/" />
      <h1 className="register__title">Добро пожаловать!</h1>
      <form className="register__form">
        <label for="name" className="register__label">
          Имя
        </label>
        <input
          type="text"
          name="name"
          className="register__input"
          required
          minLength={2}
          maxLength={30}
        />
        <label for="email" className="register__label">
          E-mail
        </label>
        <input
          type="email"
          name="email"
          className="register__input"
          required
          minLength={2}
          maxLength={30}
        />
        <label for="password" className="register__label">
          Пароль
        </label>
        <input
          type="password"
          name="password"
          className={`register__input ${
            isError ? "register__input_type_error" : ""
          }`}
          required
          minLength={2}
          maxLength={20}
        />
        <span className="register__error">Что-то пошло не так</span>
      </form>
      <button
        type="button"
        className={`register__btn ${
          isError ? "register__btn_disabled" : "button"
        }`}
      >
        Зарегистрироваться
      </button>
      <div className="register__container">
        <p className="register__question">Уже зарегистрированы?</p>
        <Link to="/signin" className="link register__nav">
          Войти
        </Link>
      </div>
    </div>
  );
}

export default Register;
