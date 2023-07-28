import {React} from "react";
import "./Projects.scss";
import personalPhoto from "./personal-photo.png"


function Projects() {
    const ProjectFolder = (props) => {
        const {projectName, projectLink} = props;
        return (
            <div className="folder"> 
                <img src={personalPhoto}/>
                <h3>PROJECT NAME</h3>
                <p> lorem ipselum olre ahut sarome</p>
            </div>
        );
    };

    return (
        <div className="projects">

            <ProjectFolder/>
        </div>
    );
}

export default Projects;