import {combineReducers} from 'redux';
import {DialogReducer} from "./DialogReducer";
import {ConfirmWindowReducer} from "./ConfirmWindowReducer";

const allReducers = combineReducers({
    showDialog: DialogReducer,
    confirm: ConfirmWindowReducer
});

export default allReducers;