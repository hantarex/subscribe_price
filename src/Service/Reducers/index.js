import {combineReducers} from 'redux';
import {DialogReducer} from "./DialogReducer";
import {ConfirmWindowReducer} from "./ConfirmWindowReducer";
import {MainLoading} from "./MainLoading";
import {ErrorBlock} from "./ErrorBlock";
import {Data} from "./Data";

const allReducers = combineReducers({
    showDialog: DialogReducer,
    confirm: ConfirmWindowReducer,
    mainLoading: MainLoading,
    errorBlock: ErrorBlock,
    data: Data,
});

export default allReducers;