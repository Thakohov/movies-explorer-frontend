import "./Profile.css";
import React, { useContext, useEffect, useState } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import useInput from "../../hooks/UseForm";
import { RES_ERRORS } from "../../utils/constants";
import { updateUser } from "../../utils/MainApi";
import InfoToolTip from "../InfoToolTip/InfoToolTip";

function Profile({ onSignOut, setCurrentUser }) {
  const currentUser = useContext(CurrentUserContext);

  const [isEditMode, setEditMode] = useState(true);
  const [requestError, setRequestError] = useState("");
  const [isInfoToolTipOpen, setIsInfoToolTipOpen] = useState(false);

  const handleInfoToolTipOpen = () => {
    setIsInfoToolTipOpen(!isInfoToolTipOpen);
  };

  const name = useInput(currentUser.name, {
    isEmpty: false,
    minLength: 2,
    maxLength: 30,
    isName: false,
  });
  const email = useInput(currentUser.email, { isEmpty: true, isEmail: false });

  const handleUpdateUser = (evt) => {
    evt.preventDefault();
    setRequestError("");
    updateUser(email.value, name.value)
      .then((res) => {
        setCurrentUser(res);
        setEditMode(true);  
        setRequestError(RES_ERRORS.UPDATE_SUCCESS);
        setTimeout(() => setRequestError(""), 2500);
        setIsInfoToolTipOpen(true);
      })
      .catch((err) => {
        console.log(err);
        if (err.code === 500) {
          setRequestError(RES_ERRORS.SERVER_500);
        }
        if (err === 409) {
          setRequestError(RES_ERRORS.UPDATE_PROFILE);
        } else {
          setRequestError(RES_ERRORS.UPDATE_DEFAULT_400);
        }
        if (err.code === 11000) {
          setRequestError(RES_ERRORS.UPDATE_PROFILE);
        }
      });
  };

  const handleEdit = () => {
    setRequestError("");
    setEditMode(false);
  };

  useEffect(() => {
    name.setValue(currentUser.name);
    email.setValue(currentUser.email);
  }, [currentUser]);

  return (
    <main className="profile">
      <h1 className="profile__heading">Привет, {currentUser.name}!</h1>
      <form className="profile__form" onSubmit={handleUpdateUser}>
        <fieldset
          className={`profile__fieldset ${
            name.inputValid && !name.isDirty
              ? "profile__fieldset_type_underline"
              : "profile__fieldset_type_underline-error"
          }`}
        >
          <label className="profile__label">Имя</label>
          <input
            type="text"
            name="name"
            value={name.value}
            className="profile__input"
            minLength={2}
            maxLength={30}
            placeholder="Имя"
            onChange={(e) => name.onChange(e)}
            onFocus={(e) => name.onFocus(e)}
            disabled={isEditMode}
            noValidate
          />
          {!name.inputValid && name.isDirty && (
            <span className="profile__error-input">{name.error}</span>
          )}
        </fieldset>
        <fieldset className="profile__fieldset">
          <label className="profile__label">E-mail</label>
          <input
            name="email"
            type="email"
            value={email.value}
            className="profile__input"
            placeholder="E-mail"
            onChange={(e) => email.onChange(e)}
            onFocus={(e) => email.onFocus(e)}
            disabled={isEditMode}
            noValidate
          />
          {!email.inputValid && email.isDirty && (
            <span className="profile__error-input">{email.error}</span>
          )}
        </fieldset>
        {!isEditMode && (
          <>
            {" "}
            <span className="profile__error">{requestError}</span>
            <button
              className={`profile__btn ${
                !email.inputValid ||
                !name.inputValid ||
                (name.value === currentUser.name &&
                  email.value === currentUser.email)
                  ? "profile__btn_type_error"
                  : "button"
              }`}
              disabled={
                !email.inputValid ||
                !name.inputValid ||
                (name.value === currentUser.name &&
                  email.value === currentUser.email)
              }
            >
              Сохранить
            </button>{" "}
          </>
        )}
      </form>
      {isEditMode && (
        <>
          <button
            className="button profile__button profile__button_type_edit"
            onClick={handleEdit}
          >
            Редактировать
          </button>
          <button
            type="button"
            className="button profile__button profile__button_type_signout"
            onClick={onSignOut}
          >
            Выйти из аккаунта
          </button>
        </>
      )}
      <InfoToolTip isOpen={isInfoToolTipOpen} onClose={handleInfoToolTipOpen} />
    </main>
  );
}

export default Profile;
