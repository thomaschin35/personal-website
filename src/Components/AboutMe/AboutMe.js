import { React } from "react";
import { Box, Stack } from "@mui/material";
import "./AboutMe.scss";
import personalPhoto from "./personal-photo.png"

function AboutMe() {
  const PersonalFact = (props) => {
    const { title, icon, body} = props;
    return (
      <div className="personal-facts-item">
        <div className="personal-facts-head">
          {/* <h5>
            <i className={`personal-facts-icon ${icon}`} />
          </h5> */}
          <h5 className="title">{title}</h5>
        </div>
        <p className="body">{body}</p>
      </div>
    );
  };

  return (
    <section className="about-me" id="aboutMe">
      <Stack className="personal-facts" spacing={1}>
        <div className="header">
          <h1 >ABOUT ME</h1>
          <hr/>
        </div>
        <div className="bio">
          <h3> 
            {/* Welcome! I am Thomas Chin, a computer science student at Georgia Institute of Technology 
            <br/>who is dedicated to constructing technologies capable of helping people.  */}
            Welcome to my personal website! I'm Thomas Chin, a dedicated computer science student at the Georgia Institute of Technology. 
            My mission is to create <i>innovative technologies</i> that make a positive impact on people's lives.
          </h3>
        </div>
        <Box className="personal-photo">
          <img id="personal-photo" src={personalPhoto} alt="personal" />
        </Box>
        <Stack direction="row" className="hstack"> 
          <Box className="col">
            <PersonalFact
              title="Education"
              icon="fas fa-book-open"
              body={
                <>
                  B.S Computer Science | Intelligence & Information
                  Internetworks
                  <br />
                  Georgia Institute of Technology | <b>GPA 4.0/4.0</b> | Faculty Honors
                  <br/>
                  <b>Graduation Date:</b> December 16, 2025 (12/16/25)
                </>
              }
            />
            <PersonalFact
              title="Programming Expertise"
              body={
                <>
                  <b>Languages: </b>Java, Python, Javascript, HTML, CSS, Swift, Terraform, SQL
                  <br />
                  <b>Tools:</b> Git, AWS, Tableau, Heroku, SUMO, 
                </>
              }
            />
          </Box>
          <Box className="col">
            <PersonalFact
              title="Hobbies"
              body={
                <>
                  Piano, Calisthenics, Weight lifting, Running, Volleyball, Singing
                </>
              }
            />
            <PersonalFact
              title="Currently Working on..."
              body={
                <>
                Research at University of Houston at the Real-Time Systems Lab under Dr. Albert Cheng. Developing a Deep Q-Network Reinforcement Learning using Tensorflow, Keras, and SUMO, to route vehicles under a traffic scenario.
                </>
              }
            />
          </Box>
        </Stack>
      </Stack>
    </section>
  );
}
export default AboutMe;
