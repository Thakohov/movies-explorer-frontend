import Promo from "../Promo/Promo";
import Techs from "../Techs/Techs";
import AboutProject from "../AboutProject/AboutProject";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
import "./Main.css";

const Main = () => {
  return (
    <main className="landing">
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
    </main>
  );
};

export default Main;
