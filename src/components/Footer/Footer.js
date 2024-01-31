import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <h3 className="footer__heading">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h3>
      <div className="footer__container">
        <p className="footer__copyright">&copy; 2020</p>
        <div className="footer__links">
          <a
            href="https://practicum.yandex.ru/"
            target="_blank"
            className="link footer__link"
            rel="noreferrer"
          >
            Яндекс.Практикум
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            className="link footer__link"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
