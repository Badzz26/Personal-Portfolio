import React from 'react';
import {SiGeeksforgeeks} from "react-icons/si";
import {SiCodingninjas} from "react-icons/si";

const Social = () => {
  return (
    <div className="home__social">
        <a href="https://www.linkedin.com/in/badal-kamli-69439921a/" className="home__social-icon" target="_blank">
            <i className="uil uil-linkedin"></i>
        </a>
        <a href="https://github.com/Badzz26" className="home__social-icon" target="_blank">
            <i className="uil uil-github-alt"></i>
        </a>
        <a href="https://auth.geeksforgeeks.org/user/badal007/" className="home__social-icon" target="_blank">
          <SiGeeksforgeeks size={20}/>
        </a>
        <a href="https://www.codingninjas.com/codestudio/profile/badz007" className="home__social-icon" target="_blank">
          <SiCodingninjas size={18}/>
        </a>
        
    </div>
  )
}

export default Social
