import "./Login.css";
import React from "react";
import { Link } from "react-router-dom";

function Login({ isError }) {
  return (
    <main className="login">
      <Link className="link login__logo" to="/" />
      <h1 className="login__title">Рады видеть!</h1>
      <form className="login__form">
        <label className="login__label">E-mail</label>
        <input
          type="email"
          name="email"
          className="login__input"
          required
          minLength={2}
          maxLength={30}
          placeholder="E-mail"
        />
        <label className="login__label">Пароль</label>
        <input
          type="password"
          name="password"
          className={`login__input ${isError ? "login__input_type_error" : ""}`}
          required
          minLength={2}
          maxLength={20}
          placeholder="Пароль"
        />
        <span className="login__error">Что-то пошло не так</span>
      </form>
      <button
        type="submit"
        className={`login__btn ${isError ? "login__btn_disabled" : "button"}`}
      >
        Войти
      </button>
      <div className="login__container">
        <p className="login__question">Ещё не зарегистрированы?</p>
        <Link to="/signup" className="link login__nav">
          Регистрация
        </Link>
      </div>
    </main>
  );
}

export default Login;
