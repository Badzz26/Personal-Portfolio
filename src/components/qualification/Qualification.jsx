import React, { useState } from "react";
import "./qualification.css";
const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div className={
              toggleState === 1
                ? "qualification__button qualification__content qualification__content-active"
                : "qualification__content"
            }>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">B-Tech in CSE </h3>
                <span className="qualification__grades">
                  8.98 CPI
                </span>
                <span className="qualification__subtitle">
                  Parul University, Gujarat, India
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2020 - Present
                </div>
                
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">12th Grade</h3>
                <span className="qualification__grades">
                  76.31 %
                </span>
                <span className="qualification__subtitle">
                  Pirojsha Godrej Jr College, Maharashtra, India
                </span>

                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2018-2019
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">10th Grade</h3>
                <span className="qualification__grades">
                  85.00 %
                </span>
                <span className="qualification__subtitle">
                  Jadi Rana High School, Maharashtra, India
                </span>

                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2016 - 2017
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          <div className={
              toggleState === 2
                ? "qualification__button qualification__content qualification__content-active"
                : "qualification__content"
            }>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Cyber security trainee/intern</h3>
                <span className="qualification__subtitle">
                  1Stop
                </span>

                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Oct'22 Nov'22
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Campus Ambassador</h3>
                <span className="qualification__subtitle">Coding Ninjas</span>

                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Feb'22 - Sept'22
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default Qualification;
