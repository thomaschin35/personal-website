import { React } from "react";
import "./Projects.scss";
import { Stack, Box, tableBodyClasses } from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import project_data from "./ProjectData";

function Projects() {
  const handleClick = (link) => {
    window.open(link); // Opens the link in a new tab
  };

  const ProjectFolder = (props) => {
    const { projectName, projectLink, description, languages, color } = props;
    return (
      <Card
        className="card"
        style={{ backgroundColor: "whitesmoke" }}
        sx={{
          background: "cover",
          transition: "all 0.2s ease",
          "&:hover": {
            transform: "scale3d(0.96, 0.96, 0.5)",
          },
        }}
        onClick={() => handleClick(projectLink)}
      >
        <CardMedia
          className="media"
          component="img"
          height="200"
          image={require(`./projectPhotos/${projectName}.png`)}
          sx={{minHeight: "300"}}
        />
        <CardHeader
          className="card-header"
          titleTypographyProps={{
            fontSize: 22,
            fontWeight: "bold",
            fontFamily:'Trebuchet MS',
          }}
          subheaderTypographyProps={{
            fontSize: 15,
            fontFamily:'Trebuchet MS'
          }}
          title={projectName}
          subheader={languages}
        />
        <CardContent className="content">
          <p>{description}</p>
        </CardContent>

      </Card>
    );
  };

  return (
    <Stack className="projects">
      <div className="header">
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
    </Stack>
  );
}

export default Projects;
