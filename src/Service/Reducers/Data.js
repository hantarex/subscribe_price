export function Data(state=[], action) {
    switch (action.type) {
        case 'SET_INFO':
            return {
                ...state,
                ...{
                    label: action.payload.label,
                    fill_email: action.payload.fill_email,
                    is_member: action.payload.is_member,
                    note: action.payload.note,
                    email: action.payload.email,
                    note_email: action.payload.note_email,
                    success_note: action.payload.success_note,
                    id: action.payload.id,
                    check: action.payload.check,
                    confirm_head: action.payload.confirm_head,
                    confirm_title: action.payload.confirm_title,
                    confirm_head_break: action.payload.confirm_head_break,
                    confirm_motivation: action.payload.confirm_motivation,
                }
            };
        case 'SET_CHECK':
            return {
                ...state,
                ...{
                    check: action.payload
                }
            };
        default:
            return state;
    }
}