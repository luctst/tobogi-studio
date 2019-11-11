import React from "react";
import ProjectSC from "./Project.style";

function Project ({projectData}) {
    return (
        <ProjectSC as="section">
            <div>
                <img src={`http://localhost:1337${projectData.caption[0].url}`} />
            </div>
            <footer>
                <p>{projectData.name} - {projectData.description}</p>
                <button>Voir plus</button>
            </footer>
        </ProjectSC>
    );
}

export default Project;