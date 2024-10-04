import "../pages/css/Footer.css";
import logo from "../assets/img/logo.png";
import location from "../assets/icons/location.png";
import email from "../assets/icons/email.png";
import phone from "../assets/icons/phone-nos.png";
import clock from "../assets/icons/clock.png";
import facebook from "../assets/icons/facebook.png";
import instagram from "../assets/icons/instagram.png";
import linkedin from "../assets/icons/linkedin.png";
import twitter from "../assets/icons/x-twitter.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="">
      <div className="footer">
        <div className="footer-logo">
          <Link to="/">
            {" "}
            <img src={logo} alt="" />{" "}
          </Link>
        </div>

        <div>
          <h4 className="footer-name">Direktlinks</h4>
          <ul className="footer-list">
            <li>
              <Link to="/"> Heim</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/about"> Über uns </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/services"> Service </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/contact"> Kontakt </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/cart"> Arbeit </Link>{" "}
            </li>
          </ul>
        </div>

        <div>
          <h4 className="footer-name">Unsere Adresse</h4>
          <ul className="footer-list">
            <li className="contact">
              <img src={location} alt="" />
              <p>Berlin, Deutschland</p>
            </li>
            <li className="contact">
              <img src={phone} alt="" />
              <p>123-456-7890</p>
            </li>
            <li className="contact">
              <img src={email} alt="" />
              <p>prohelpers@email.com</p>
            </li>
            <li className="contact">
              <img src={clock} alt="" />
              <p>7:00am - 6:00pm</p>
            </li>
          </ul>
        </div>

        <div>
          <ul className="social-link">
            <li>
              <a href="https://www.facebook.com/">
                <img src={facebook} alt="facebook" />
              </a>
            </li>
            <li>
              <a href="https://instagram.com/">
                <img src={instagram} alt="instagram" />
              </a>
            </li>
            <li>
              <a href="http://linkedin.com/">
                <img src={linkedin} alt="linkedin" />
              </a>
            </li>
            <li>
              <a href="http://x.com/">
                <img src={twitter} alt="x-twitter" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="copyRight-txt">
        Copyright © 2023 ProHelpers. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
