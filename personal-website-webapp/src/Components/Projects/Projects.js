import { React } from "react";
import "./Projects.scss";
import { Stack, Box} from "@mui/material";
import personalPhoto from "./personal-photo.png";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import project_data from './ProjectData';
function Projects() {
  const ProjectFolder = (props) => {
    const { projectName, projectLink, description, languages } = props;
    return (
      <Card className="card">
        <CardHeader className="card-header"title={projectName} subheader={languages} />
        <CardMedia
          className="media"
          component="img"
          height="300"
          image={personalPhoto}
          sx={{
            background: "cover",
            transition: "all 0.2s ease",
            "&:hover": {
              transform: "scale3d(0.95, 0.95, 0.5)",
            },
          }}
        />
        <CardContent>
          <p>{description}</p>
        </CardContent>
      </Card>
      // <div className="folder">
      //     <img src={personalPhoto}/>
      //     <h3>PROJECT NAME</h3>
      //     <p> lorem ipselum olre ahut sarome</p>
      // </div>
    );
  };

  return (
    <Stack className="projects">
      <div className="header">
        <h1> PROJECTS </h1>
      </div>
      <Box className="grid" flexDirection="row" >
        {Object.keys(project_data).map((project) => (
            <ProjectFolder projectName={project_data[project].projectName} description={project_data[project].description}
            languages={project_data[project].languages}/>
        ))}
        
      </Box>
    </Stack>
  );
}

export default Projects;
