import "./Login.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useInput from "../../hooks/UseForm";
import { authorize } from "../../utils/MainApi";
import { RES_ERRORS } from "../../utils/constants";

const Login = ({ onSubmit, loggedIn }) => {
  const navigate = useNavigate();

  const [requestError, setRequestError] = useState("");
  const [loading, setLoading] = useState(false);

  loggedIn && navigate("/", { replace: true });

  const email = useInput("", { isEmpty: true, isEmail: false });
  const password = useInput("", { isEmpty: true, minLength: 3 });

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    return authorize(email.value, password.value)
      .then((res) => {
        navigate("/movies", { replace: true });
        onSubmit(res);
      })
      .catch((err) => {
        if (err === 500) {
          setRequestError(RES_ERRORS.SERVER_500);
        }
        if (err === 429) {
          setRequestError(RES_ERRORS.SERVER_TIMEOUT);
        }
        if (err === 401) {
          setRequestError(RES_ERRORS.SIGNIN_401);
        } else {
          setRequestError(RES_ERRORS.SIGNIN_DEFAULT);
        }
      })
      .finally(() => setLoading(false));
  };

  return (
    <main className="login">
      <Link className="link login__logo" to="/" />
      <h1 className="login__title">Рады видеть!</h1>
      <form className="login__form" onSubmit={handleLogin}>
        <label className="login__label">
          E-mail
          <input
            type="email"
            name="email"
            value={email.value}
            className={`login__input ${
              !email.inputValid ? "login__input_type_error" : ""
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
            <span className="login__error">{email.error}</span>
          )}
        </label>
        <label className="login__label">
          Пароль
          <input
            type="password"
            name="password"
            value={password.value}
            className={`login__input ${
              !password.inputValid ? "login__input_type_error" : ""
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
            <span className="login__error">{password.error}</span>
          )}
        </label>
        <span className="login__span">{requestError}</span>
        <button
          type="submit"
          className={`login__btn ${
            !email.inputValid || !password.inputValid || loading
              ? "login__btn_disabled"
              : "button"
          }`}
          disabled={!email.inputValid || !password.inputValid || loading}
        >
          {loading ? "Идет вход..." : "Войти"}
        </button>
      </form>
      <div className="login__container">
        <p className="login__question">Ещё не зарегистрированы?</p>
        <Link to="/signup" className="link login__nav">
          Регистрация
        </Link>
      </div>
    </main>
  );
};

export default Login;
