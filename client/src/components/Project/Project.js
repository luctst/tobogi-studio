import React from "react";
import ProjectSC from "./Project.style";

function Project (props) {
    return (
        <ProjectSC as="section">
            <div>
                <img src={`http://localhost:1337${props.projectData.captionMobile[0].url}`} alt={props.projectData.description}/>
            </div>
            <footer>
                <p>{props.projectData.name} - {props.projectData.description}</p>
                <button>Voir plus</button>
                { props.countProjects && <p>{props.projectData.id}/{props.countProjects}</p> }
            </footer>
        </ProjectSC>
    );
}

export default Project;