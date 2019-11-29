import React from "react";
import fetchData from "./../../utils/fetchData";
import SCLoader from "../../components/Loader/Loader.style";
import Project from "./../../components/Project/Project";
import SliderCompo from "../../components/Slider/Slider";
import {connect} from "react-redux";

function ProjectsHandler (props) {
    const [state, setState] = React.useState({
        dataFetched: false,
        data: null,
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

    if (!state.dataFetched) return <SCLoader/>;

    if (props.windowWidth <= 570) return state.data.map((project, index) => <Project projectData={project} key={index} />)

    return <SliderCompo projectData={state.data}/>
}

function mapState ({windowWidthReducer}) {
    return {
        ...windowWidthReducer
    };
}

export default connect(mapState)(ProjectsHandler);