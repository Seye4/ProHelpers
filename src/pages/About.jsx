import "./css/About.css";
import aboutImg from "../assets/img/aboutUs.png";
import stopWatch from "../assets/icons/Stopwatch.png";
import FlexibleIcon from "../assets/icons/FlexibleIcon.png";
import shield from "../assets/icons/shield.png";
import badge from "../assets/icons/badge.png";

const About = () => {
  return (
    <div className="section">
      <div className="section-title">
        <h3>
          Über <span>Uns</span>
        </h3>
        <div className="section-line"></div>
      </div>
      <div className="about-content">
        <img className="about-img" src={aboutImg} alt="" />
        <div className="about-info">
          <h4>
            Wir sind die Künstler der Sauberkeit, die Magier des Gartens, die
            Helden deiner Wäsche und die Champions des Transports.{" "}
          </h4>
          <p>
            Champions des Transports. Bei uns geht es nicht nur um
            Dienstleistungen, sondern um die Verwandlung deines Alltags in puren
            Lifestyle.
          </p>
        </div>
      </div>

      {/* how we work */}

      <div className="sub-info">
        <div className="section-title">
          <h3>
            {" "}
            Wie <span>Wir Arbeiten</span>
          </h3>
          <div className="section-line"></div>
          <p>
            Mit einer Erfahrung, die so lange ist wie unsere Liste von
            Dienstleistungen, wissen wir, wie man den Alltagsstress vertreibt
            und Platz für das wahre Leben schafft.
          </p>
        </div>
        <h3 className="sub-title">Unser Grundprinzip</h3>

        <div className="core-principles">
          {/* core principles */}
          <div className="core-principle">
            <img src={stopWatch} alt="" />
            <h4>Schnell</h4>
          </div>
          <div className="core-principle">
            <img src={FlexibleIcon} alt="" />
            <h4>Flexibel</h4>
          </div>
          <div className="core-principle">
            <img src={badge} alt="" />
            <h4>zuverlässig</h4>
          </div>
          <div className="core-principle">
            <img src={shield} alt="" />
            <h4>Professional</h4>
          </div>
        </div>

        <p className="sub-phrase">
          Flexibel, schnell, zuverlässig, präzise und natürlich mega
          professionell - <br />{" "}
          <span>
            {" "}
            das sind nicht nur Worte für uns, sondern unsere tägliche Mission.{" "}
          </span>{" "}
        </p>
      </div>

      {/* How we work */}
    </div>
  );
};

export default About;
