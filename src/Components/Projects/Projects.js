import { React, useEffect } from "react";
import "./Projects.scss";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import project_data from "./ProjectData";

function Projects() {
  const handleClick = (link) => {
    window.open(link); // Opens the link in a new tab
  };

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

  const ProjectFolder = (props) => {
    const { projectName, projectLink, description, languages } = props;
    return (
      <Card
        className="card fade-in"
        style={{ backgroundColor: "whitesmoke" }}
        sx={{
          background: "cover",
          transition: "all 0.2s ease",
          "&:hover": {
            transform: "scale3d(0.96, 0.96, 0.5)",
            boxShadow: "0 0 20px #a5a5af, 0 0 40px #5e9395",
          },
        }}
        onClick={() => handleClick(projectLink)}
      >
        <CardMedia
          className="media"
          component="img"
          height="200"
          image={require(`./projectPhotos/${projectName}.png`)}
          sx={{ minHeight: "300" }}
        />
        <CardHeader
          className="card-header"
          titleTypographyProps={{
            fontSize: "1.2rem",
            fontWeight: "bold",
            fontFamily: 'Trebuchet MS',
          }}
          subheaderTypographyProps={{
            fontSize: "0.8rem",
            fontFamily: 'Trebuchet MS'
          }}
          title={projectName}
          subheader={languages}
        />
        <div className="content">
          <p>{description}</p>
        </div>

      </Card>
    );
  };

  return (
    <div className="projects" id="projects">
      <div className="header fade-in">
        <h1> PROJECTS </h1>
      </div>
      <Box className="grid" flexDirection="row">
        {Object.keys(project_data).map((project) => (
          <ProjectFolder
            projectName={project_data[project].projectName}
            description={project_data[project].description}
            projectLink={project_data[project].projectLink}
            languages={project_data[project].languages}
            color={project_data[project].color}
          />
        ))}
      </Box>
    </div>
  );
}

export default Projects;
