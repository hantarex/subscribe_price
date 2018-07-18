export function ConfirmWindowReducer(state={}, action) {
    switch (action.type) {
        case "SHOW_CONFIRM_WINDOW":
            state[action.payload.name]={
                visible: action.payload.visible,
                head: action.payload.head,
                title: action.payload.title,
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