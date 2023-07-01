import React, { useState } from "react";
import encryptImg from "./../../assets/encrypt.png";
import weatherImg from "./../../assets/weather.png";
import gymImg from "./../../assets/gym_main.png";
import eyeAssistImg from "./../../assets/eyeAssistImg.jpg"
import "./projects.css";

const Projects = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="projects section" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">My Skills implementations</span>

      <div className="projects__container container grid">

      <div className="projects__content">
          <img src={eyeAssistImg} alt="Gym landing page image" />
          <div>
            <h3 className="projects__title">EyeAssist app</h3>
          </div>
          <span className="projects__button" onClick={() => toggleTab(1)}>
            View <i className="uil uil-arrow-right projects__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 1
                ? "projects__model active-model"
                : "projects__model"
            }
          >
            <div className="projects__model-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times projects_model-close"
              ></i>

              <h3 className="projects__model-title">EyeAssist app</h3>
              <p className="projects__model-description">
              EyeAssist is a web app project aimed at assisting blind students by providing them with a reliable scribe for their examinations. Developed using ReactJS and Tailwind CSS for the frontend, EyeAssist leverages modern web technologies to create an accessible and user-friendly interface.
              <br />
                <br />
                While the backend is currently under development, the project plans to incorporate Firebase as the backend solution. EyeAssist exemplifies the team's commitment to leveraging technology to address real-world challenges faced by individuals with visual impairments.
                <br />
                <br />
                Co-developer: Deep Kalpeshbhai Panchal
              </p>

              <div className="project__link">
                <a
                  href="https://github.com/Badzz26/EyeAssist-app"
                  target="_blank"
                  className="projects__button github__link"
                  rel="external"
                >
                  Github
                  <i className="uil uil-arrow-right projects__button-icon"></i>
                </a>
                <a
                  href="https://eye-assist-app-badzz26.vercel.app/"
                  target="_blank"
                  className="projects__button github__link"
                  rel="external"
                >
                  Live
                  <i className="uil uil-arrow-right projects__button-icon"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

      <div className="projects__content">
          <img src={weatherImg} alt="Weather project image" />
          <div>
            <h3 className="projects__title">Weather App</h3>
          </div>
          <span className="projects__button" onClick={() => toggleTab(2)}>
            View <i className="uil uil-arrow-right projects__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 2
                ? "projects__model active-model"
                : "projects__model"
            }
          >
            <div className="projects__model-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times projects_model-close"
              ></i>

              <h3 className="projects__model-title">
                Weather App using ReactJs
              </h3>
              <p className="projects__model-description">
                Weather App is another project which I developed using React and integrated with two powerful APIs.
                This project marked my first foray into working with APIs.
                <br />
                The Weather App leverages the GeoDB Cities API to fetch cities
                from around the world. 
                <br />
                To provide weather information, I integrated the
                OpenWeather API, which offers a comprehensive range of weather
                data for locations worldwide, retrieving current weather conditions, temperature, humidity,
                wind speed, and other relevant details for the selected cities.
                <br />
                This project challenged me to understand API integration, data fetching, and handling asynchronous operations in React. It allowed me to expand my technical skill set and gain valuable experience in working with external APIs to retrieve and display dynamic information.
                <br />  My objective was more on understanding API's and its functionalities, so I did not focus more on UI of the project.
              </p>

              <div className="project__link">
                <a
                  href="https://github.com/Badzz26/Weather-App"
                  target="_blank"
                  className="projects__button github__link"
                  rel="external"
                >
                  Github
                  <i className="uil uil-arrow-right projects__button-icon"></i>
                </a>
                <a
                  href="https://weather-app-neon-kappa.vercel.app/"
                  target="_blank"
                  className="projects__button github__link"
                  rel="external"
                >
                  Live
                  <i className="uil uil-arrow-right projects__button-icon"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="projects__content">
          <img src={encryptImg} alt="" />
          <div>
            <h3 className="projects__title">Encryp/Decrypt App</h3>
          </div>
          <span className="projects__button" onClick={() => toggleTab(3)}>
            View <i className="uil uil-arrow-right projects__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 3
                ? "projects__model active-model"
                : "projects__model"
            }
          >
            <div className="projects__model-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times projects_model-close"
              ></i>

              <h3 className="projects__model-title">Encrypt/Decrypt App</h3>
              <p className="projects__model-description">
                I am thrilled to showcase my first React-based project called
                the Encrypt/Decrypt App, which combines my passion for coding
                with the knowledge I gained during my 5th semester in
                Cryptography. This project allowed me to apply cryptographic
                techniques and algorithms to create a secure and user-friendly
                application.
                <br />
                The Encrypt/Decrypt App features the implementation of various
                encryption and decryption techniques, including the famous
                Caeser cipher, Hill cipher, Playfair cipher, and Vigenere
                cipher.
                <br />
                This project not only allowed me to showcase my technical skills
                in React but also deepened my understanding of cryptography
                principles.
              </p>

              <div className="project__link">
                <a
                  href="https://github.com/Badzz26/Encrypt-Decrypt"
                  target="_blank"
                  className="projects__button github__link"
                  rel="external"
                >
                  Github
                  <i className="uil uil-arrow-right projects__button-icon"></i>
                </a>
                <a
                  href="https://encrypt-decrypt-app.vercel.app/"
                  target="_blank"
                  className="projects__button github__link"
                  rel="external"
                >
                  Live
                  <i className="uil uil-arrow-right projects__button-icon"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="projects__content">
          <img src={gymImg} alt="Gym landing page image" />
          <div>
            <h3 className="projects__title">Landing Page</h3>
          </div>
          <span className="projects__button" onClick={() => toggleTab(4)}>
            View <i className="uil uil-arrow-right projects__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 4
                ? "projects__model active-model"
                : "projects__model"
            }
          >
            <div className="projects__model-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times projects_model-close"
              ></i>

              <h3 className="projects__model-title">Landing Page for a Gym</h3>
              <p className="projects__model-description">
                This is a very first project which I created where I designed
                and developed a landing page for a gym using HTML and CSS.{" "}
                <br />
                This project allowed me to strengthen my HTML and CSS skills
                while providing me with hands-on experience in web design and
                development.
              </p>

              {/* <ul className="projects__model-projects grid">
                <li className="projects__model-project">
                  <i className="uil uil-check-circle projects__model-icon"></i>
                  <p className="projects__model-info">
                    I develop the user interface
                  </p>
                </li>

                <li className="projects__model-project">
                  <i className="uil uil-check-circle projects__model-icon"></i>
                  <p className="projects__model-info">Web page development</p>
                </li>
              </ul> */}
              <div className="project__link">
                <a
                  href="https://github.com/Badzz26/irongym.github.io"
                  target="_blank"
                  className="projects__button github__link"
                  rel="external"
                >
                  Github
                  <i className="uil uil-arrow-right projects__button-icon"></i>
                </a>
                <a
                  href="https://badzz26.github.io/irongym.github.io/"
                  target="_blank"
                  className="projects__button github__link"
                  rel="external"
                >
                  Live
                  <i className="uil uil-arrow-right projects__button-icon"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        
        
      </div>
    </section>
  );
};

export default Projects;
