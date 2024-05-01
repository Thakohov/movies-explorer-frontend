import React from "react";
import "./InfoToolTip.css";

function InfoTooltip({ onClose, isOpen, image, title }) {
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
          alt={title}
          className="info__image info__union"
        />
        <p className="info__success-text">{title}</p>
      </div>
    </div>
  );
}

export default InfoTooltip;
