import React from "react";
import fetchData from "./../../utils/fetchData";
import ProjectsHandlerSC from "./ProjectsHandler";

function ProjectsHandler () {
    const [state, setState] = React.useState({
        dataFetched: false,
        data: null
    });

    React.useEffect(() => {
        (async function () {
            const projects = await fetchData("projects");
            console.log(projects)
        })()
    }, []);

    return (
        <ProjectsHandlerSC as="main">
            <p></p>
        </ProjectsHandlerSC>
    );
}

export default ProjectsHandler;