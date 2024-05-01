import "./Register.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useInput from "../../hooks/UseForm";
import { register, authorize } from "../../utils/MainApi";
import { RES_ERRORS } from "../../utils/constants";

const Register = ({ onSubmit, loggedIn }) => {
  const navigate = useNavigate();

  const [requestError, setRequestError] = useState("");
  const [loading, setLoading] = useState(false);

  loggedIn && navigate("/", { replace: true });

  const name = useInput("", {
    isEmpty: true,
    minLength: 2,
    maxLength: 30,
    isName: false,
  });

  const email = useInput("", { isEmpty: true, isEmail: false });
  const password = useInput("", { isEmpty: true, minLength: 3 });

  const handleRegister = (e) => {
    setLoading(true);
    e.preventDefault();
    return register(name.value, email.value, password.value)
      .then(() => {
        authorize(email.value, password.value).then((res) => {
          navigate("/movies", { replace: true });
          onSubmit(res);
        });
      })
      .catch((err) => {
        if (err === 500) {
          setRequestError(RES_ERRORS.SERVER_500);
        }
        if (err === 429) {
          setRequestError(RES_ERRORS.SERVER_TIMEOUT);
        }
        if (err === 409) {
          setRequestError(RES_ERRORS.SIGNUP_409);
        } else {
          setRequestError(RES_ERRORS.SIGNUP_DEFAUTLT);
        }
      })
      .finally(() => setLoading(false));
  };

  return (
    <main className="register">
      <Link className="link register__logo" to="/" />
      <h1 className="register__title">Добро пожаловать!</h1>
      <form className="register__form" onSubmit={handleRegister}>
        <label className="register__label">
          Имя{" "}
          <input
            type="text"
            name="name"
            value={name.value}
            className={`register__input ${
              !name.inputValid ? "register__input_type_error" : ""
            }`}
            required
            minLength={2}
            maxLength={30}
            placeholder="Имя"
            onChange={(e) => name.onChange(e)}
            onFocus={(e) => name.onFocus(e)}
            noValidate
          />
          {!name.inputValid && name.isDirty && (
            <span className="register__error">{name.error}</span>
          )}
        </label>
        <label className="register__label">
          E-mail{" "}
          <input
            type="email"
            name="email"
            value={email.value}
            className={`register__input ${
              !email.inputValid ? "register__input_type_error" : ""
            }`}
            required
            minLength={2}
            maxLength={30}
            placeholder="E-mail"
            onChange={(e) => email.onChange(e)}
            onFocus={(e) => email.onFocus(e)}
            noValidate
          />
          {!email.inputValid && email.isDirty && (
            <span className="register__error">{email.error}</span>
          )}
        </label>
        <label className="register__label">
          Пароль{" "}
          <input
            type="password"
            name="password"
            value={password.value}
            className={`register__input ${
              !password.inputValid ? "register__input_type_error" : ""
            }`}
            required
            minLength={2}
            maxLength={20}
            placeholder="Пароль"
            onChange={(e) => password.onChange(e)}
            onFocus={(e) => password.onFocus(e)}
            noValidate
          />
          {!password.inputValid && password.isDirty && (
            <span className="register__error">{password.error}</span>
          )}
        </label>
        <span className="register__span">{requestError}</span>
        <button
          type="submit"
          className={`register__btn ${
            !email.inputValid ||
            !name.inputValid ||
            !password.inputValid ||
            loading
              ? "register__btn_disabled"
              : "button"
          }`}
          disabled={
            !email.inputValid ||
            !name.inputValid ||
            !password.inputValid ||
            loading
          }
        >
          {loading ? "Идет регистрация..." : "Зарегистрироваться"}
        </button>
      </form>
      <div className="register__container">
        <p className="register__question">Уже зарегистрированы?</p>
        <Link to="/signin" className="link register__nav">
          Войти
        </Link>
      </div>
    </main>
  );
};

export default Register;
