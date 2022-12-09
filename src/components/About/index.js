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
                  Built and assembled high end Model S and X Plaids with over
                  130 units shipped a day.
                </li>
                <li>
                  Mentored new hires throughout the assembly line process with
                  more than seven individual stations.
                </li>

                <li>
                  Frequently communicated with engineers on repairs and issues
                  in regards to efficiency on the assembly line and broke down
                  complex technical instructions to be easily understood.
                </li>
                <li>
                  Furthered responsibilities with aiding team leads on assigning
                  individual duties, as well as leadership responsibility to
                  stop the entire assembly line for repairs or otherwise.
                </li>
                <li>
                  Contributed in 2021 record breaking Quarter 3 term with a 79%
                  increase in cars delivered.
                </li>
              </ul>
              <h3>China Center Restaurant</h3>
              <span className="timeInfo">Salinas,CA</span>
              <p>Chef & Waiter</p>
              <span className="timeInfo">May 2012-June 2021</span>
              <ul>
                <li>
                  Oversaw both front and back of house with a fast-paced kitchen
                  environment.
                </li>
                <li>
                  Created a customer-focused dining experience by anticipating
                  customer needs, finding solutions for customer concerns, and
                  collaborating with restaurant staff during busy times.
                </li>
                <li>
                  Catered up to 70 guests per night and ensured all meals are
                  served on time
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
                React, Prisma, Easy-Peasy, Tailwind, Material UI
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
