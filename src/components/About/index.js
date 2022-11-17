import AnimatedLetters from "../AnimatedLetters";
import "./index.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faHtml5,
  faJsSquare,
  faNode,
  faReact,
  faWeebly,
} from "@fortawesome/free-brands-svg-icons";
const About = () => {
  const [letterClass] = useState("text-animate");
  const titleArray = "About Me".split("");
  return (
    <>
      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faWeebly} color="#F4A460" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faNode} color="#68A063" />
          </div>
        </div>
      </div>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={titleArray}
              idx={15}
            />
          </h1>

          <div className="info">
            <p>
              Enthusiastic and self motivated first generation Chinese American
              where my parents came to America in search of a better life.
              Growing up poor I know the value of hard work and what it takes to
              succeed.
            </p>
            <h2>Education</h2>
            <div>
              <p>University of California, Santa Barbara</p>{" "}
              <span className="timeInfo"> Santa Barbara, CA</span>
              <p> College of Letters and Science</p>
              <p>Bachelor of Arts in English</p>
              <span className="timeInfo"> June 2019</span>
              <p> Fullstack Academy </p>
              <p>Fullstack Web Development</p>
              <span className="timeInfo"> December 2022</span>
            </div>
            <h2>Experience</h2>
            <div>
              <h3>Tesla</h3>
              <span className="timeInfo">Fremont, CA</span>
              <p>Fitter Technician</p>
              <span className="timeInfo">June 2021-Febuary 2022</span>
              <ul>
                <li>
                  Responsible with building and inspecting Tesla's high end
                  Model S and X Plaids with over 130 units shipped a day.
                </li>
                <li>
                  Trained new hires throughout the entire Body-In-White assembly
                  line with over 7 individual stations.
                </li>
                <li>
                  Frequently communicated with engineers on repairs and issues
                  in regards to efficiency on the assembly line and broke down
                  complex technical instructions down to Layman's terms for the
                  team.
                </li>
                <li>
                  Aided team leads on assigning individual duties and one of the
                  individuals with the ability to shut down the entire assembly
                  line for repairs or otherwise.
                </li>
              </ul>
              <h3>China Center Restaurant</h3>
              <span className="timeInfo">Salinas,CA</span>
              <p>Chef & Waiter</p>
              <span className="timeInfo">May 2012-June 2021</span>
              <ul>
                <li>
                  Aided in both front and back of house when needed by
                  performing a variety of tasks including preparing ingredients,
                  pushing dishes out in a timely manner while also serving
                  customers and dealing with monetary transactions at the
                  register.
                </li>
              </ul>
              <h2>Skills</h2>
              <p>
                Certificates: Fullstack Academy Web Development, ServSafe Food
                Handler Program, Google Power Searching
              </p>
              <p>Computer: Microsoft Word, PowerPoint, Adobe Photoshop</p>
              <p>Language: Fluent in Cantonese, Proficiency in Spanish</p>
              <p>
                Computer Language: Javascript, HTML, CSS, Express, PostgresQL,
                React
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
