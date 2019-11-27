import appState from "./../state";

function windowWidthReducer (state = {windowWidth: appState.windowWidth}, action) {
    if (action.type === "UPDATE_WINDOW_WIDTH") {
        return {
            ...state, 
            windowWidth: window.innerWidth
        };
    }

    return state;
}

export default windowWidthReducer;