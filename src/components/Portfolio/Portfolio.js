import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <a
            href="https://thakohov.github.io/how-to-learn/"
            target="_blank"
            className="link portfolio__link"
            rel="noreferrer"
          >
            <p className="portfolio__heading ">Статичный сайт</p>
            <div className="portfolio__logo"></div>
          </a>
        </li>
        <li className="portfolio__item">
          <a
            href="https://thakohov.github.io/russian-travel/"
            target="_blank"
            className="link portfolio__link"
            rel="noreferrer"
          >
            <p className="portfolio__heading ">Адаптивный сайт</p>
            <div className="portfolio__logo"></div>
          </a>
        </li>
        <li className="portfolio__item">
          <a
            href="https://thakohov.github.io/react-mesto-auth/#/signin/"
            target="_blank"
            className="link portfolio__link"
            rel="noreferrer"
          >
            <p className="portfolio__heading">Одностраничное предложение</p>
            <div className="portfolio__logo"></div>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
