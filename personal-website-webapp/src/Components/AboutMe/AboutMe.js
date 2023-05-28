import { React } from "react";
import { Box, Stack } from "@mui/material";
import "./AboutMe.scss";

function AboutMe() {
  const PersonalFact = (props) => {
    const { title, body } = props;
    return (
      <div className="personal-facts-item">
        <p className="title">{title}</p>
        <p className="body">{body}</p>
      </div>
    );
  };

  return (
    <section className="about-me">
      <div className="personal-facts">
        <h5 className="header">ABOUT ME!</h5>
        <Stack direction="row" className="hstack"> 
          <Box className="col">
            <PersonalFact
              title="Education"
              body={
                <>
                  B.S Computer Science | Intelligence & Information
                  Internetworks
                  <br />
                  Georgia Institute of Technology | GPA 4.0/4.0 | Faculty Honors
                </>
              }
            />
            <PersonalFact
              title="Education"
              body={
                <>
                  B.S Computer Science | Intelligence & Information
                  Internetworks
                  <br />
                  Georgia Institute of Technology | GPA 4.0/4.0 | Faculty Honors
                </>
              }
            />
          </Box>
          <Box className="col">
            <PersonalFact
              title="Education"
              body={
                <>
                  B.S Computer Science | Intelligence & Information
                  Internetworks
                  <br />
                  Georgia Institute of Technology | GPA 4.0/4.0 | Faculty Honors
                </>
              }
            />
          </Box>
        </Stack>
      </div>
    </section>
  );
}
export default AboutMe;
