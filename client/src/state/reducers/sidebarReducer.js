import appstate from "./../state";

function sidebarReducer (state = appstate, action) {
    switch (action.type) {
        case "SHOW_SIDEBAR": {
            const newState = { ...state };

            newState.showSidebar = action.payload;
            return newState;
        }
        default:
            return state;
    }
}

export default sidebarReducer;