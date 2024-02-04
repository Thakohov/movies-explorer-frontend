import "./NavTab.css";
import React from "react";
import { Link } from "react-router-dom";

function NavTab() {
  return (
    <nav className="tab">
      <ul className="tab__container">
        <li className="tab__item">
          <Link className="link tab__link" to="#about-project" reloadDocument>
            О проекте
          </Link>
        </li>
        <li className="tab__item">
          <Link className="link tab__link" to="#techs" reloadDocument>
            Технологии
          </Link>
        </li>
        <li className="tab__item">
          <Link className="link tab__link" to="#about-me" reloadDocument>
            Студент
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavTab;
