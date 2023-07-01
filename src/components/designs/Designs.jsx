import React, { useState } from "react";
import travelImg from "./../../assets/designs/TravelPoster.png";
import schoolImg from "./../../assets/designs/schoolAdmission.png";
import typographyImg from "./../../assets/designs/Typography.png";
import hamburgerImg from "./../../assets/designs/Hamburger.png";
import threeDImg from "./../../assets/designs/3DDesign.png";
import nikeImg from "./../../assets/designs/nikeFlyer.png";
import carImg from "./../../assets/designs/carRental.png";
import ytthumbnailImg from "./../../assets/designs/youtubeThumbnail.png";
import "./designs.css";

const Designs = () => {

  return (
    <section className="designs section" id="designs">
      <h2 className="section__title">Designs</h2>
      <span className="section__subtitle">Designs created by me</span>

      <div className="designs__container container grid">
        <a
          href="https://www.canva.com/design/DAFR_WeSkE4/HM5HF2vqMgqn-ZVsnesy4g/view?utm_content=DAFR_WeSkE4&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
          target="_blank"
          className="designs__button "
        >
          <div className="designs__content">
            <img src={travelImg} />
          </div>
        </a>

        <a
          href="https://www.canva.com/design/DAFSHcdwDYA/hbegsc8R4mT7cB1s8_8u6Q/view?utm_content=DAFSHcdwDYA&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu"
          target="_blank"
          className="designs__button"
        >
          <div className="designs__content">
            <img src={schoolImg} />
          </div>
        </a>

        <a
          href="https://www.canva.com/design/DAFSNujnerg/K5if7BTgbl3ga26kZND7UA/view?utm_content=DAFSNujnerg&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu"
          target="_blank"
          className="designs__button"
        >
          <div className="designs__content">
            <img src={typographyImg} />
          </div>
        </a>

        <a
          href="https://www.canva.com/design/DAFST-1AtBk/K6HuyadmzHORqn_JGDWKFw/view?utm_content=DAFST-1AtBk&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu"
          target="_blank"
          className="designs__button"
        >
          <div className="designs__content">
            <img src={hamburgerImg} />
          </div>
        </a>

        <a
          href="https://www.canva.com/design/DAFSYd0AxpQ/FvpadVv2wKyNbWcb_UAxjw/view?utm_content=DAFSYd0AxpQ&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu"
          target="_blank"
          className="designs__button"
        >
          <div className="designs__content">
            <img src={threeDImg} />
          </div>
        </a>

        <a
          href="https://www.canva.com/design/DAFSd3nZ4fQ/hhIPZlfWq4gTHtdYrV3kMg/view?utm_content=DAFSd3nZ4fQ&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu"
          target="_blank"
          className="designs__button"
        >
          <div className="designs__content">
            <img src={nikeImg} />
          </div>
        </a>

        <a
          href="https://www.canva.com/design/DAFSe2FprNI/zJ1V55U5usn8jI1oSw99bg/view?utm_content=DAFSe2FprNI&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu"
          target="_blank"
          className="designs__button"
        >
          <div className="designs__content">
            <img src={carImg} />
          </div>
        </a>
        
        <a
          href="https://www.canva.com/design/DAFSlFpw_PU/2c8g9VltACu0rMBFU4nnxQ/view?utm_content=DAFSlFpw_PU&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu"
          target="_blank"
          className="designs__button"
        >
          <div className="designs__content">
            <img src={ytthumbnailImg} />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Designs;
