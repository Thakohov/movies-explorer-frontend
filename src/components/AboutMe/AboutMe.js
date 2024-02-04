import "./AboutMe.css";
import me from "../../images/me.jpg";

function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__block">
        <div className="about-me__container">
          <h3 className="about-me__name">Эльдар</h3>
          <p className="about-me__job">Студент, 22 года</p>
          <p className="about-me__descr">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
          <a
            className="link about-me__link"
            target="_blank"
            href="https://github.com/Thakohov"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
        <img src={me} alt="Фотография студента" className="about-me__image" />
      </div>
    </section>
  );
}

export default AboutMe;
