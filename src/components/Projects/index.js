import "./index.css";
import AnimatedLetters from "../AnimatedLetters";
import { useState } from "react";

import Coffee from "../../assets/images/projects/coffeeclicker.PNG";
import Pupper from "../../assets/images/projects/puppybowl.PNG";
import Strangers from "../../assets/images/projects/strangersthings.PNG";
import TicTac from "../../assets/images/projects/tictactoe.PNG";
import Fitness from "../../assets/images/projects/Fitness.png";
import grace from "../../assets/images/projects/graceShopper.png";

const Projects = () => {
  const [letterClass] = useState("text-animate");
  const titleArray = "My Projects".split("");

  return (
    <>
      <div className="container projects-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={titleArray}
              idx={15}
            />
          </h1>
          <div className="cardContainer">
            <ul className="cards">
              <li onclick="">
                <div className="card">
                  <h3>Coffee Clicker</h3>
                  <a
                    href="https://wilson-chen-project-coffee-clicker.netlify.app/"
                    title="Coffee Clicker"
                  >
                    <img className="img" src={Coffee} alt="" />
                  </a>
                  <p> Made with Javascript, HTML, CSS</p>
                </div>
              </li>
              <li onclick="">
                <div className="card">
                  <h3>Tic Tak Toe</h3>
                  <a
                    href="https://wilson-chen-project-06-tictaktoe.netlify.app/"
                    title="Tic Tac Toe"
                  >
                    <img className="img" src={TicTac} alt="" />
                  </a>
                  <p> Made with Javascript, HTML, CSS</p>
                </div>
              </li>
              <li onclick="">
                <div className="card">
                  <h3>Puppy Bowl</h3>
                  <a
                    href="https://wilson-chen-project-08-puppy-bowl.netlify.app/"
                    title="Puppy Bowl"
                  >
                    <img className="img" src={Pupper} alt="" />
                  </a>
                  <p>Made with React </p>
                </div>
              </li>
              <li onclick="">
                <div className="card">
                  <h3>Strangers Things</h3>
                  <a
                    href="https://milly-and-wilson-strangers-things.netlify.app/"
                    title="Strangers Things"
                  >
                    <img className="img" src={Strangers} alt="" />
                  </a>
                  <p>Made with React, PostgreSQL </p>
                </div>
              </li>
              <li onclick="">
                <div className="card">
                  <h3>Fitness Tracker</h3>
                  <a
                    href="https://github.com/Uduru10/Fitness-Trackr"
                    title="Fitness Tracker"
                  >
                    <img className="img" src={Fitness} alt="" />
                  </a>
                  <p>Made with React, PostgreSQL </p>
                </div>
              </li>
              <li onclick="">
                <div className="card">
                  <h3>Grace Shopper</h3>
                  <a
                    href="https://github.com/LunchBoxBandits/graceShopper"
                    title="Grace Shopper"
                  >
                    <img className="img" src={grace} alt="" />
                  </a>
                  <p>
                    Made with React, PostgreSQL, Prisma, Easy-Peasy, Material
                    UI, Tailwind{" "}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
