export function DataItem(state=[], action) {
    switch (action.type) {
        case 'SET_INFO_ITEM':
            return {
                ...state,
                ...{
                    options: action.payload.options ? action.payload.options : {},
                    subOptions: action.payload.subOptions ? action.payload.subOptions : {},
                    submit: action.payload.submit,
                    is_member: action.payload.is_member,
                    note: action.payload.note,
                    note_email: action.payload.note_email,
                    fill_email: action.payload.fill_email,
                    email: action.payload.email,
                    confirm_motivation: action.payload.confirm_motivation,
                    confirm_head: action.payload.confirm_head,
                    confirm_title: action.payload.confirm_title,
                    confirm_head_break: action.payload.confirm_head_break,
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