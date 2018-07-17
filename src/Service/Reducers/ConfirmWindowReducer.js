export function ConfirmWindowReducer(state={}, action) {
    switch (action.type) {
        case "SHOW_CONFIRM_WINDOW":
            state[action.payload.name]={
                visible: action.payload.visible
            };
            return {
                ...state
            };
        case "SET_CONFIRM_WINDOW":
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}