import React from "react";
import fetchData from "./../../utils/fetchData";
import SCLoader from "../../components/Loader/Loader.style";
import Project from "./../../components/Project/Project";

function ProjectsHandler () {
    const [state, setState] = React.useState({
        dataFetched: false,
        data: null,
        windowWidth: window.innerWidth
    });

    React.useEffect(() => {
        (async function () {
            const newState = {...state};
            const projects = await fetchData("projects");

            newState.dataFetched = !state.dataFetched
            newState.data = projects;
            setState(newState);
        })()
    }, []);

    return (
        <main>
            {
                (function () {
                    if (!state.dataFetched) return <SCLoader/>

                    if (state.windowWidth <= 570) return state.data.map((project, index) => <Project projectData={project} key={index}/>);
                })()
            }
        </main>
    );
}

export default ProjectsHandler;