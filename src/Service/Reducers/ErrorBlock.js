export function ErrorBlock(state={}, action) {
    switch (action.type) {
        case 'ERROR_BLOCK_ACTIVE':
            return {
                ...state,
                ...{
                    active: action.payload
                }
            };
        case "ERROR_BLOCK_TEXT":
            return {
                ...state,
                ...{
                    text: action.payload
                }
            };
        default:
            return state;
    }
}