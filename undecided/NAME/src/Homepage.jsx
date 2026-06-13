import "react"
import "./Homepage.css";
import Navbar from "./components/Navbar.jsx"
import ProjectCard from "./components/ProjectCard.jsx"
import platypus from "./assets/Project-1.png";
import toe from "./assets/Project 2.png";
import flappy from "./assets/Flappy Bird.png";
import stock from "./assets/stock.png";
function Homepage(){
    return (
      <>
        {/* <ProjectCard
          props={{
            Title: "Project 1",
            Subtext: "Informational page on platypuses",
            ImagePath: "/src/Project-1.png"
          }}
        /> */}
        <section>
          <div id="title">
            <div className="img-container">
              <img src="src/assets/ocean.jpg"></img>
            </div>

            <h1>
              Ryka Pradhan's <br /> Personal Website
            </h1>
          </div>
        </section>
        <section>
          <div className="Projects">
            <div className="Project">
              <h3 id="project1"> Project 1</h3>
              <div className="grad"></div>
              <p> &emsp;Informational page on platypuses</p>

              <a href="https://4a000e2f-182b-4358-9084-9db1df7203f8-00-vfft37go6g07.janeway.replit.dev/">
                <img src={platypus} alt="Trulli" />
              </a>
            </div>

            <div className="Project">
              <h3 id="project2"> Project 2</h3>

              <p> &emsp;A pink and blue version of Flappy Bird.</p>
              <a href="https://6a6b0c7a-0415-4d52-9371-d33282e32999-00-3h9p2fxdukrcd.janeway.replit.dev/">
                <img src={flappy} alt="Trulli" />
              </a>
            </div>

            {/* <div className="Project">
              <h3 id="project3">Project 3: Flappy Bird</h3>
              <p>
                In this version of Flappy Bird you get the same fun experience
                with a blue bird and pink blocks!
              </p>
              <img src={flappy} alt="Trulli" />
            </div> */}

            <div className="Project">
              <h3 id="project4">Project 3</h3>
              <p>Stock simulator to help you invest smartly.</p>
              <a href=""></a>
              <img src={stock} alt="Trulli" />
            </div>
          </div>
        </section>

        <section>
          <div className="AboutMe">
            <h2 id="about me"> About Me</h2>
            <div>
              {" "}
              &emsp;I am 13 years old and I have been coding and working on
              these projects for around 122 days. I am passionate, and curious.
              I love the three projects that I have worked on. My favorite part of
              web development is the styling.
            </div>
          </div>
          <script src="script.js"></script>
        </section>
      </>
    );
}
export default Homepage