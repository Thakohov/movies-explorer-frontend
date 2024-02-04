import "./Profile.css";
import React from "react";

function Profile({ isEditMode, isError, onClick, onSignOut }) {
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  return (
    <main className="profile">
      <h1 className="profile__heading">Привет, Эльдар!</h1>
      <form className="profile__form">
        <fieldset className="profile__fieldset profile__fieldset_type_underline">
          <label className="profile__label">Имя</label>
          <input
            type="text"
            name="name"
            className="profile__input"
            onChange={handleChangeName}
            minLength={2}
            maxLength={30}
            placeholder="Имя"
          />
        </fieldset>
        <fieldset className="profile__fieldset">
          <label className="profile__label">E-mail</label>
          <input
            name="email"
            type="email"
            className="profile__input"
            onChange={handleChangeEmail}
            placeholder="E-mail"
          />
        </fieldset>
      </form>
      {!isEditMode ? (
        <>
          <button className="button profile__button profile__button_type_edit">
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
      ) : (
        <>
          <span className="profile__error">
            При обновлении профиля произошла ошибка.
          </span>
          <button
            type="button"
            className={`profile__btn ${
              isError ? "profile__btn_type_error" : "button"
            }`}
            onClick={onClick}
          >
            Сохранить
          </button>
        </>
      )}
    </main>
  );
}

export default Profile;
