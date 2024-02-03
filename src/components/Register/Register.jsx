import "./Register.css";
import React from "react";
import { Link } from "react-router-dom";

function Register({ isError }) {
  return (
    <main className="register">
      <Link className="link register__logo" to="/" />
      <h1 className="register__title">Добро пожаловать!</h1>
      <form className="register__form">
        <label className="register__label">Имя</label>
        <input
          type="text"
          name="name"
          className="register__input"
          required
          minLength={2}
          maxLength={30}
          placeholder="Имя"
        />
        <label className="register__label">E-mail</label>
        <input
          type="email"
          name="email"
          className="register__input"
          required
          minLength={2}
          maxLength={30}
          placeholder="E-mail"
        />
        <label className="register__label">Пароль</label>
        <input
          type="password"
          name="password"
          className={`register__input ${
            isError ? "register__input_type_error" : ""
          }`}
          required
          minLength={2}
          maxLength={20}
          placeholder="Пароль"
        />
        <span className="register__error">Что-то пошло не так</span>
      </form>
      <button
        type="submit"
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
    </main>
  );
}

export default Register;
