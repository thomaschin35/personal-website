import { React } from "react";
import { TypeAnimation } from "react-type-animation";
import { Stack, Box } from "@mui/material";
import personalPhoto from "./personal-photo.png";

import "./Welcome.scss";

function Welcome() {
  return (
    <section className="welcome-section">
      <Stack direction="row" className="description">
        <Box className="personal-photo">
          <img id="personal-photo" src={personalPhoto} alt="personal" />
        </Box>
        <Box className="textBox">
          <h5>
            <TypeAnimation
              sequence={["Thomas Chin", 1000]}
              wrapper="span"
              cursor={false}
              repeat={0}
            />
          </h5>
          <p>
            I'm a Computer Science Student at Georgia Institute of Technology
          </p>
        </Box>
      </Stack>
    </section>
  );
}

export default Welcome;
