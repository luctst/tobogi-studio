import appstate from "./../state";

function sidebarReducer (state = {showSidebar: appstate.showSidebar}, action) {
    if (action.type === "SHOW_SIDEBAR") {
        return {
            ...state, 
            showSidebar: action.payload
        };
    }

    return state;
}

export default sidebarReducer;