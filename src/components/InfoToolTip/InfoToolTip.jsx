import React from "react";
import "./InfoToolTip.css";
import image from "../../images/union-min.svg";

function InfoTooltip({ onClose, isOpen }) {
  return (
    <div className={`info ${isOpen ? "info_opened" : ""}`}>
      <div className="info__container info__container_type_union">
        <button
          className="info__close"
          type="button"
          onClick={onClose}
        ></button>
        <img
          src={image}
          alt="Данные успешно сохранены"
          className="info__image info__union"
        />
        <p className="info__success-text">Данные успешно сохранены</p>
      </div>
    </div>
  );
}

export default InfoTooltip;
