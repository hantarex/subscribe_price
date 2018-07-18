export function MainLoading(state = true, action) {
    switch (action.type) {
        case 'MAIN_LOADING':
            return action.payload;

        default:
            return state;
    }
}