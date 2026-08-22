import "react";
import "./Homepage.css";
import Navbar from "./components/Navbar.jsx";
import ProjectCard from "./components/ProjectCard.jsx";
import platypus from "./assets/Project-1.png";
import toe from "./assets/Project 2.png";
import flappy from "./assets/Flappy Bird.png";
import stock from "./assets/stock.png";
function Homepage() {
  return (
    <div className="Homepage">
      {/* <ProjectCard
          props={{
            Title: "Project 1",
            Subtext: "Informational page on platypuses",
            ImagePath: "/src/Project-1.png"
          }}
        /> */}
      <section>
        <div id="title">
          {/* <div className="img-container">
              <img src="src/assets/ocean.jpg"></img>
            </div> */}

          <h1 className="pagetitle">
            Ryka Pradhan's <br /> Personal Website
          </h1>
        </div>
      </section>
      <section>
        <div className="Projects" id="projects">
          <div className="Project">
            <h3 id="project1"> Project 1</h3>
            <div className="grad"></div>
            <p> &emsp;Informational page on platypuses.</p>

            <a href="https://github.com/tsctor-rykap/Platypus-Page">
              <img src={platypus} alt="Trulli" />
            </a>
          </div>

          <div className="Project">
            <h3 id="project2"> Project 2</h3>

            <p> &emsp;A pink and blue version of Flappy Bird.</p>
            <a href="https://github.com/tsctor-rykap/Flappy-Bird">
              <img src={flappy} alt="Trulli" />
            </a>
          </div>

          <div className="Project">
            <h3 id="project4">Project 3</h3>
            <p>Stock simulator to help you invest smartly.</p>
            <a href="https://github.com/tsctor-rykap/Stock-Simulator">
              <img src={stock} alt="Trulli" />
            </a>
          </div>
        </div>
      </section>

      <section>
        <div className="AboutMe" id="aboutme">
          <h2 id="about me"> About Me</h2>
          <div>
            {" "}
            &emsp;I am a high school student and I have been coding and working
            on these projects for about a year. I am passionate, inquisitive,
            and I love the projects that I have worked on. My favorite part of
            web development is the styling.
          </div>
        </div>
        <script src="script.js"></script>
      </section>
    </div>
  );
}
export default Homepage;
