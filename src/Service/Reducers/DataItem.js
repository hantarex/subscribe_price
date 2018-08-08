export function DataItem(state=[], action) {
    switch (action.type) {
        case 'SET_INFO_ITEM':
            return {
                ...state,
                ...{
                    options: action.payload.options ? action.payload.options : {},
                    submit: action.payload.submit,
                }
            };
        case 'SET_CHECK_ITEM':
            return {
                ...state,
                ...{
                    check: action.payload
                }
            };
        case 'SET_TARGET_ITEM':
            return {
                ...state,
                ...{
                    target: action.payload.target
                }
            };
        case 'ON_SUBMIT':
            return {
                ...state,
                ...{
                    onSubmit: action.payload
                }
            };
        default:
            return state;
    }
}