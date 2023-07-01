import React from "react";
import "./footer.css";
import {SiGeeksforgeeks} from "react-icons/si";
import {SiCodingninjas} from "react-icons/si";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Badal Kamli</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="footer__link">
              Projects
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/badal-kamli-69439921a/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
          <a
            href="https://github.com/Badzz26"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-github"></i>
          </a>
          <a
            href="https://auth.geeksforgeeks.org/user/badal007/"
            className="footer__social-link"
            target="_blank"
          >
            <SiGeeksforgeeks />
          </a>

          <a
            href="https://www.codingninjas.com/codestudio/profile/badz007"
            className="footer__social-link"
            target="_blank"
          >
            <SiCodingninjas />
          </a>
        </div>

        <span className="footer__copy">
           &#169; BadalKamli. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
