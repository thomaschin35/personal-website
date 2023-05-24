import { React } from "react";
import { TypeAnimation } from "react-type-animation";
import {Stack, Box} from '@mui/material';
import personalPhoto from "./personal-photo.png";

import "./Welcome.scss";

function Welcome() {
  return (
    <section className="welcome-section">
        <Stack direction="row" className="description">
          <Box className="b1">
            <h5>
              <TypeAnimation
                sequence={["Welcome!", 1000]}
                wrapper="div"
                cursor={false}
                repeat={0}
              />
            </h5>
            <h2>&nbsp;</h2>
            <h5>
              <TypeAnimation
                sequence={["\n ", 1500, "I'm Thomas Chin"]}
                wrapper="div"
                cursor={false}
                repeat={0}
              />
            </h5>

              <p>
                I'm a Computer Science Student at Georgia Institute of
                Technology
                {/* Software Engineer, Infastructure Engineer,
                and Data Analyst  */}
              </p>

          </Box>
          <Box className="personal-photo">
            <img id="personal-photo" src={personalPhoto} alt="personal" />
          </Box>
        </Stack>
    </section>
  );
}

export default Welcome;
