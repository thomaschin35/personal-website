import { React, useEffect, useState } from "react";
import "./AboutMe.scss";
import Background from "../Background/Background";
//PICTURES
import personalPhoto_1 from "../../Images/AboutMe/personal-photo-hiking.jpeg";
import personalPhoto_2 from "../../Images/AboutMe/personal-photo-piano.jpeg";
import personalPhoto_4 from "../../Images/AboutMe/personal-photo-volley.JPG";
import personalPhoto_5 from "../../Images/AboutMe/personal-photo.jpg";
import personalPhoto_6 from "../../Images/AboutMe/personal-photo-photography.jpg";
import personalPhoto_7 from "../../Images/AboutMe/personal-photo-flashmob.JPG";
import interestIcon_1 from "../../Images/AboutMe/volleyball_icon.png";
import interestIcon_2 from "../../Images/AboutMe/piano_icon.png";
import interestIcon_3 from "../../Images/AboutMe/photography_icon.png";
import interestIcon_4 from "../../Images/AboutMe/music_icon.jpeg";
import interestIcon_5 from "../../Images/AboutMe/hiking_icon.jpeg";

function AboutMe() {
  const [activeModal, setActiveModal] = useState(null);

  const interests = [
    {
      id: "volleyball",
      icon: interestIcon_1,
      title: "Volleyball",
      image: personalPhoto_4,
      description: "I absolutely love playing volleyball. I used to be on the national team for the Houston Stars Volleyball team and am now playing casually on Intramural teams at Georgia Tech.",

    },
    {
      id: "piano",
      icon: interestIcon_2,
      title: "Piano",
      image: personalPhoto_2,
      description: "Piano has been a huge part of my life (10+ years). I completed the ABRSM 8th Grade Exams with Merit when I was 16 but am now playing music just for fun :) I love playing soundtrack music like Test Drive from How to Train Your Dragon. I'm currently learing pieces from my favorite piano youtuber: Birru",
    },
    {
      id: "photography",
      icon: interestIcon_3,
      title: "Photography",
      image: personalPhoto_6,
      description: "I've recently gotten into photography and am starting out with street photography, which I love. I also love taking pictures of my friends and family. I am currently using a Sony a6400 camera with a 15-55mm lens.",
    },
    {
      id: "music",
      icon: interestIcon_4,
      title: "Music",
      image: personalPhoto_7,
      description: "Listening to music is my favorite pastime. I love listening to all genres of music, but my favorite is R&B, Indie, and Pop (especially throwbacks). Not only do I love listening to music, but I also like to dance to it, especailly with the FlashMob club at Georgia Tech!",
    },
    {
      id: "hiking",
      icon: interestIcon_5,
      title: "Hiking",
      image: personalPhoto_1,
      description: "I am a huge fan of the outdoors and love exploring nature through hiking, backpacking, and more! Fun Fact: I was a boyscout for 6 years and am an Eagle Scout. Currently exploring the trails near Georgia Tech and in the future, I hope to hike Base Camp at Mount Everest.",
    },
  ];
  const closeModal = () => setActiveModal(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (e.target.classList.contains("modal-overlay")) {
        closeModal();
      }
    };
    window.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", handleOutsideClick);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".interest-item")) {
        document
          .querySelectorAll(".interest-item")
          .forEach((item) => item.classList.remove("active"));
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);



  return (
    <section className="about-me" id="aboutme">
      {/* <div className="particles-container"> */}
      <Background />
      {/* </div> */}
      <div className="box pointer-events-none">
        <div className="personal-info-top pointer-events-none">
          <div className="header-interests pointer-events-none">
            &gt; ABOUT ME &lt;
          </div>
          <img
            className="fade-in personal-photo"
            src={personalPhoto_5}
            alt="Thomas Chin"
          />
          <div className="fade-in header">
            Software Engineer <br></br> BS.MS Computer Science @ Georgia Tech
          </div>
          <div className="fade-in bio">
            I've always been passionate about technology and its potential to
            impact others. Whether its through serving as mentors/leaders in
            my community or as a software developer, I'm motivated to make a
            difference in the world through my work.

            <br /> <br />
            Currently, I am on track to graduate with my B.S in Computer Science
            in December 2025 and will continue at Georgia Tech for a Masters Degree in CS
            concentrating in Interactive Intelligence. I am extremely excited to continue my
            education and learn more about the field of AI and Machine Learning.
          </div>
          <button class="button pointer-events-auto"
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/PDF/ThomasChinOfficialResume.pdf";
              link.download = "ThomasChinOfficialResume.pdf";
              link.click();
            }}>
            <span>RESUME</span>
          </button>
        </div>
        <div className="personal-info-bottom pointer-events-none">
          <div className="fade-in header-interests pointer-events-none"> &gt; MY INTERESTS &lt; </div>
          <div className="fade-in interests pointer-events-none">
            {interests.map((interest) => (
              <div
                key={interest.id}
                className="interest-item pointer-events-auto"
                onClick={() => setActiveModal(interest)}
              >
                <img className="interest-icon" src={interest.icon} alt={interest.title} />
              </div>
            ))}
          </div>
          <div className="fade-in header-interests"> &gt; MY TECHNICAL SKILLS &lt;</div>
          <div className="fade-in skills">
            <div className="skills-item">
              <img className="skills-icon" src="https://img.shields.io/badge/Javascript-F0DB4F?style=for-the-badge&labelColor=black&logo=javascript&logoColor=F0DB4F" alt="Javascript" />
            </div>
            <div className="skills-item">
              <img className="skills-icon" src="https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&label&logo=amazon-web-services&logoColor=white" alt="AWS" />
            </div>
            <div className="skills-item">
              <img className="skills-icon" src="https://img.shields.io/badge/-React-61DBFB?style=for-the-badge&labelColor=black&logo=react&logoColor=61DBFB" alt="React" />
            </div>
            <div className="skills-item">
              <img className="skills-icon" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML" />
            </div>
            <div className="skills-item">
              <img className="skills-icon" src="https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=fff" alt="CSS" />
            </div>
            <div className="skills-item">
              <img className="skills-icon" src="https://img.shields.io/badge/Java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white" alt="Java" />
            </div>
            <div className="skills-item">
              <img className="skills-icon" src="https://img.shields.io/badge/Go-%2300ADD8.svg?style=for-the-badge&logo=go&logoColor=white" alt="Go" />
            </div>
            <div className="skills-item">
              <img className="skills-icon" src="https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=c&logoColor=white" alt="C" />
            </div>
            <div className="skills-item">
              <img className="skills-icon" src="https://custom-icon-badges.demolab.com/badge/Microsoft%20Azure-0089D6?style=for-the-badge&logo=msazure&logoColor=white" alt="Azure" />
            </div>
            <div className="skills-item">
              <img className="skills-icon" src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
            </div>
            <div className="skills-item">
              <img className="skills-icon" src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=fff" alt="MySQL" />
            </div>
            <div className="skills-item">
              <img className="skills-icon" src="https://custom-icon-badges.demolab.com/badge/Matplotlib-71D291?style=for-the-badge&logo=matplotlib&logoColor=fff" alt="Matplotlib" />
            </div>
            <div className="skills-item">
              <img className="skills-icon" src="https://img.shields.io/badge/NumPy-4DABCF?style=for-the-badge&logo=numpy&logoColor=fff" alt="Numpy" />
            </div>
            <div className="skills-item">
              <img className="skills-icon" src="https://img.shields.io/badge/Pandas-150458?style=for-the-badge&logo=pandas&logoColor=fff" alt="Pandas" />
            </div>
            <div className="skills-item">
              <img className="skills-icon" src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" alt="Figma" />
            </div>
            <div className="skills-item">
              <img className="skills-icon" src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=fff" alt="Docker" />
            </div>
          </div>
        </div>
      </div>
      {activeModal && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="modal-close" onClick={closeModal}>×</button>
            <h2>{activeModal.title}</h2>
            <img className="modal-img" src={activeModal.image} alt={activeModal.title} />
            <p>{activeModal.description}</p>
          </div>
        </div>
      )}
    </section>

  );
}
export default AboutMe;
