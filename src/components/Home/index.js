import LogoTitle from "../../assets/images/logo-w.png";
import Selfie from "../../assets/images/fullstack pfp.jpeg";
import { Link } from "react-router-dom";
import "./index.css";
import { useState } from "react";
import AnimatedLetters from "../AnimatedLetters";

const Home = () => {
  const [letterClass] = useState("text-animate");
  const nameArray = "ilson".split("");
  const jobArray = "a student web developer".split("");

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i, </span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m </span>
          <img src={LogoTitle} alt="developer" />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />

          <br />

          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={22}
          />
        </h1>
        <h2> Looking to pursue a career in coding</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
        <img className="solid-selfie" src={Selfie} alt="Me" />
      </div>
      <div className="logo-container">
        <img className="solid-logo" src={LogoTitle} alt="W" />
      </div>
    </div>
  );
};

export default Home;
