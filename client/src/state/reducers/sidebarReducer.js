import appstate from "./../state";

function sidebarReducer (state = appstate, action) {
    if (action.type === "SHOW_SIDEBAR") {
        const newState = {...state};

        newState.showSidebar = action.payload;
        return newState;
    }
    
    return state;
}

export default sidebarReducer;