import { React } from "react";
import { TypeAnimation } from "react-type-animation";
import Fade from 'react-reveal/Fade';
import { Stack, Box } from "@mui/material";

import "./Welcome.scss";

function Welcome() {
  return (
    <section className="welcome-section">
      <Stack direction="row" className="description">
        {/* <Box className="personal-photo">
          <img id="personal-photo" src={personalPhoto} alt="personal" />
        </Box> */}
        <div className="textBox">
          <Fade bottom opposite>
            <p> 
            <i>Hey, I'm</i>
            </p>
          </Fade>
          <Fade bottom delay={500} opposite>
            <h1>
            THOMAS CHIN
            </h1>
          </Fade>
        </div>
      </Stack>
    </section>
  );
}

export default Welcome;
