import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from "../../components/Sidebar/Sidebar";
import {connect} from 'react-redux';

function SidebarHandler (props) {
    const mainRoot = document.querySelector("body");

    if (props.showSidebar) {
        const createModal = document.createElement("section");

        if (window.innerWidth >= 560) mainRoot.style = "display: grid;grid-template-columns: 2.5fr 1fr;";

        createModal.id = "modal";
        createModal.style = "z-index: 12;"
        mainRoot.appendChild(createModal);

        return ReactDOM.createPortal(
            <Sidebar/>,
            createModal
        )
    }

    if (mainRoot.querySelector("#modal")) {
        if (mainRoot.style.length !== 0) mainRoot.removeAttribute("style");
        mainRoot.removeChild(document.querySelector("#modal"))
    };

    return null;
}

function mapState ({sidebarReducer}) {
    return sidebarReducer;
}

export default connect(mapState)(SidebarHandler);