import "./Profile.css";
import React from "react";

function Profile({ isEditMode, isError, onClick }) {
  const [email, setEmail] = React.useState("pochta@yandex.ru");
  const [name, setName] = React.useState("Эльдар");

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  return (
    <section className="profile">
      <h1 className="profile__heading">Привет, Эльдар!</h1>
      <form className="profile__form">
        <fieldset className="profile__fieldset profile__fieldset_type_underline">
          <label className="profile__label" for="name">
            Имя
          </label>
          <input
            type="text"
            name="name"
            className="profile__input"
            value={name}
            onChange={handleChangeName}
          />
        </fieldset>
        <fieldset className="profile__fieldset">
          <label className="profile__label" for="email">
            E-mail
          </label>
          <input
            name="email"
            type="email"
            className="profile__input"
            value={email}
            onChange={handleChangeEmail}
          />
        </fieldset>
      </form>
      {!isEditMode ? (
        <>
          <button
            className="button profile__button profile__button_type_edit"
            onClick={onClick}
          >
            Редактировать
          </button>
          <button className="button profile__button profile__button_type_signout">
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
    </section>
  );
}

export default Profile;
