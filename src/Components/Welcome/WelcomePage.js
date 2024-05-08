import { React } from "react";
import { TypeAnimation } from "react-type-animation";
import { Fade } from "react-awesome-reveal";
import { Stack, Box } from "@mui/material";

import "./Welcome.scss";

function Welcome() {
  return (
    <section className="welcome-section">
      <Stack direction="row" className="description">
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
