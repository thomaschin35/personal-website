import { React } from "react";
import { Box, Stack } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import "./AboutMe.scss";
import personalPhoto_1 from "./personal-photo-hiking.jpeg";
import personalPhoto_2 from "./personal-photo-japan.jpg";
import personalPhoto_3 from "./personal-photo-cfg.JPG";
import personalPhoto_4 from "./personal-photo-volley.JPG";
import personalPhoto_5 from "./personal-photo.png";
import personalPhoto_6 from "./personal-photo-marathon.JPG";
import personalPhoto_7 from "./personal-photo-gtia.JPG";

function AboutMe() {
  const PersonalFact = (props) => {
    const { title, icon, body } = props;
    return (
      <div className="personal-facts-item">
        <div className="personal-facts-head">
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
          <h1>ABOUT ME</h1>
          <hr />
        </div>
        <div className="bio">
          <h3>
            Welcome to my personal website! I'm Thomas Chin, a dedicated
            computer science student at the Georgia Institute of Technology. My
            mission is to create <i>innovative technologies</i> that make a
            positive impact on people's lives.
          </h3>
        </div>
        <Box className="personal-photo">
          {/* <img id="personal-photo" src={personalPhoto} alt="personal" /> */}
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            pagination={{ el: ".swiper-pagination", clickable: true }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
              clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="swiper_container"
          >
            <SwiperSlide>
              <img src={personalPhoto_1} alt="personal" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={personalPhoto_2} alt="personal" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={personalPhoto_3} alt="personal" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={personalPhoto_4} alt="personal" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={personalPhoto_5} alt="personal" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={personalPhoto_6} alt="personal" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={personalPhoto_7} alt="personal" />
            </SwiperSlide>
            <div className="slider-controler">
              <div className="swiper-button-prev slider-arrow">
                <ion-icon name="arrow-back-outline"></ion-icon>
              </div>
              <div className="swiper-button-next slider-arrow">
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </Swiper>
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
                  Georgia Institute of Technology | <b>GPA 4.0/4.0</b> | Faculty
                  Honors
                  <br />
                  <b>Graduation Date:</b> December 16, 2025 (12/16/25)
                </>
              }
            />
            <PersonalFact
              title="Programming Expertise"
              body={
                <>
                  <b>Languages: </b>Java, Python, Javascript, HTML, CSS, Swift,
                  Terraform, SQL
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
                  Piano, Calisthenics, Weight lifting, Running, Volleyball,
                  Singing
                </>
              }
            />
            <PersonalFact
              title="Currently Working on..."
              body={
                <>
                  Research at University of Houston at the Real-Time Systems Lab
                  under Dr. Albert Cheng. Developing a Deep Q-Network
                  Reinforcement Learning using Tensorflow, Keras, and SUMO, to
                  route vehicles under a traffic scenario.
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
