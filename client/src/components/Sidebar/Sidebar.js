import React from 'react';
import SidebarSC from "./Sidebar.style";
import {connect} from "react-redux";

function SidebarHandler (props) {
    const [windowWidth] = React.useState(window.innerWidth);

    const handleClick = e => {
        e.stopPropagation();

        props.dispatch({
            type: "SHOW_SIDEBAR",
            payload: !props.showSidebar
        });
    }

    return (
        <SidebarSC windowWidth={windowWidth}>
            <header>
                {windowWidth <= 450 && <h1>TOBOGI</h1>}
                <span onClick={handleClick}>X</span>
            </header>
        </SidebarSC>
    );
}

function mapState ({sidebarReducer}) {
    return sidebarReducer
}

export default connect(mapState)(SidebarHandler);