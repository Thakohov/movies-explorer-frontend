import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header() {
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
        isLoggedIn={true}
        closePopup={closePopup}
        openPopup={handlePopup}
        isOpen={isPopupOpen}
      />
    </header>
  );
}

export default Header;
