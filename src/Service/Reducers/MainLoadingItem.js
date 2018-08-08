export function MainLoadingItem(state = true, action) {
    switch (action.type) {
        case 'MAIN_LOADING_ITEM':
            return action.payload;
        default:
            return state;
    }
}