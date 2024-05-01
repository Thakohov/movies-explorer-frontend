import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <h3 className="footer__heading">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h3>
      <div className="footer__container">
        <p className="footer__copyright">&copy; {new Date().getFullYear()}</p>
        <ul className="footer__links">
          <li className="footer__list">
            <a
              href="https://practicum.yandex.ru/"
              target="_blank"
              className="link footer__link"
              rel="noreferrer"
            >
              Яндекс.Практикум
            </a>
          </li>
          <li className="footer__list">
            <a
              href="https://github.com/"
              target="_blank"
              className="link footer__link"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
