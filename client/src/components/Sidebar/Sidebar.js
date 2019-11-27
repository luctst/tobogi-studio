import React from 'react';
import SidebarSC from "./Sidebar.style";
import {connect} from "react-redux";

function SidebarHandler (props) {
    const handleClick = e => {
        e.stopPropagation();

        props.dispatch({
            type: "SHOW_SIDEBAR",
            payload: !props.showSidebar
        });
    }

    return (
        <SidebarSC windowWidth={props.windowWidth}>
            <header>
                {props.windowWidth <= 450 && <h1>TOBOGI</h1>}
                <span onClick={handleClick}>X</span>
            </header>
        </SidebarSC>
    );
}

function mapState ({sidebarReducer, windowWidthReducer}) {
    return {
        ...sidebarReducer,
        ...windowWidthReducer
    }
}

export default connect(mapState)(SidebarHandler);