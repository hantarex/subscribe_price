export function DialogReducer(state=false, action) {
    switch (action.type) {
        case "SHOW_DIALOG":
            return action.payload;
        default:
            return state;
    }
}