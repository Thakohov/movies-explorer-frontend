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
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a
            className="link about-me_link"
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
