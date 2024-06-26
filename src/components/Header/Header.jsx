import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header({LoggedIn}) {
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);

  const handlePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <header className="header">
      <Link className="link header__logo" to="/" />
      <Navigation
        LoggedIn={LoggedIn}
        closePopup={closePopup}
        openPopup={handlePopup}
        isOpen={isPopupOpen}
      />
    </header>
  );
}

export default Header;
