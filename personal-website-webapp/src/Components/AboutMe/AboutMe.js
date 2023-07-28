import { React } from "react";
import { Box, Stack } from "@mui/material";
import "./AboutMe.scss";
import personalPhoto from "./personal-photo.png"

function AboutMe() {
  const PersonalFact = (props) => {
    const { title, body } = props;
    return (
      <div className="personal-facts-item">
        <h1 className="title">{title}</h1>
        <p className="body">{body}</p>
      </div>
    );
  };

  return (
    <section className="about-me">
      <Stack className="personal-facts" spacing={1}>
        <div className="header">
          <h1 >ABOUT ME</h1>
          <hr/>
        </div>
        <div className="bio">
          <h3> 
            Welcome! I am Thomas Chin, a computer science student at Georgia Institute of Technology <br/>who is dedicated to constructing technologies capable of helping people. 
          </h3>
        </div>
        <Box className="personal-photo">
          <img id="personal-photo" src={personalPhoto} alt="personal" />
        </Box>
        <Stack direction="row" className="hstack"> 
          <Box className="col">
            <PersonalFact
              title="Education"
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
