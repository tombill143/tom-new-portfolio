import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/rock-paper-scissors.png";
import projImg2 from "../assets/img/big-fat-string.png";
import projImg3 from "../assets/img/diary.png";
import projImg4 from "../assets/img/actors.png";
import projImg5 from "../assets/img/hogwarts-admin.png";
import projImg6 from "../assets/img/coffee-delight.png";
import projImg7 from "../assets/img/falling-head-pic.png"
import projImg8 from "../assets/img/better-todo-image.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "Paper, Rock, Scissors",
      description: "A game I made being when first introduced to js",
      imgUrl: projImg1,
      link: "http://techtom.dk/rock-paper-scissors-master/",
      alt: "Screenshot of Paper, Rock, Scissors game",
      category: "Basic School Projects"
    },
    {
      title: "The Big fat String",
      description: "A js programme I made to learn how to sort words and letters",
      imgUrl: projImg2,
      link: "http://techtom.dk/big-fat-string-master/",
      alt: "Screenshot of The Big Fat String program",
      category: "Basic School Projects"
    },
    {
      title: "Typewriter",
      description: "A programme I made to simulate a typewriter effect by gradually displaying text on the screen.",
      imgUrl: projImg3,
      link: "http://techtom.dk/typewriter_exercise-master/",
      alt: "Screenshot of Typewriter simulation",
      category: "Basic School Projects"
    },
    {
      title: "Actor List",
      description: "A small database for actors",
      imgUrl: projImg4,
      link: "http://techtom.dk/actors-master/",
      alt: "Screenshot of Actor List database",
      category: "Basic School Projects"
    },
    {
      title: "Hogwarts Admin Dashboard",
      description: "My first big frontend project",
      imgUrl: projImg5,
      link: "http://techtom.dk/sortingHogwarts-master/",
      alt: "Screenshot of Hogwarts Admin Dashboard",
      category: "Basic School Projects"
    },
    {
    title: "Coffee Delight",
    description: "A styling project for a fictional coffee shop",
    imgUrl: projImg6,
    link: "http://techtom.dk/coffee/",
    alt: "Screenshot of Coffee Delight website",
    category: "Basic School Projects"
  },
  {
      title: "Falling Heads Game",
      description: "A fun game where players control falling heads and try to catch them.",
      imgUrl: projImg7,
      link: "http://techtom.dk/game-project/", // Replace this with the actual link to the game
      alt: "Screenshot of Falling Heads Game",
      category: "Post Grad Projects"
    },
    {
      title: "Todo list Application",
      description: "A simple project utilising data from a postgres database",
      imgUrl: projImg8,
      link: "https://toms-todolist-app-master.vercel.app/",
      category: "Framework Projects" 
    }
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Here is a list of projects I have previously worked on alongside projects over the previous years</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Basic School Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Game Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Framework Projects</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      {/* Post Grad Projects Tab */}
                      <Tab.Pane eventKey="second">
                        <Row>
                          {
                            projects.filter(project => project.category === "Post Grad Projects").map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              );
                            })
                          }
                        </Row>
                      </Tab.Pane>

                      {/* Basic School Projects Tab */}
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.filter(project => project.category === "Basic School Projects").map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              );
                            })
                          }
                        </Row>
                      </Tab.Pane>

                      {/* Framework Projects Tab */}
                      <Tab.Pane eventKey="third">
                        <Row>
                          {
                            projects.filter(project => project.category === "Framework Projects").map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              );
                            })
                          }
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background decoration" />
    </section>
  );
};
