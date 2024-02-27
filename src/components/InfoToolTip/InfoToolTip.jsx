import React from "react";
import "./InfoToolTip.css";
import image from "../../images/union-min.svg";

function InfoTooltip({ onClose, isOpen }) {
  return (
    <div className={`popup ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container popup__container_type_union">
        <button
          className="popup__close"
          type="button"
          onClick={onClose}
        ></button>
        <img
          src={image}
          alt="Данные успешно сохранены"
          className="popup__image popup__union"
        />
        <p className="popup__success-text">Данные успешно сохранены</p>
      </div>
    </div>
  );
}

export default InfoTooltip;
