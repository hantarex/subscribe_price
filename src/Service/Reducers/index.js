import {combineReducers} from 'redux';
import {DialogReducer} from "./DialogReducer";
import {ConfirmWindowReducer} from "./ConfirmWindowReducer";
import {MainLoading} from "./MainLoading";
import {ErrorBlock} from "./ErrorBlock";
import {Data} from "./Data";
import {DataItem} from "./DataItem";
import {MainLoadingItem} from "./MainLoadingItem";

const allReducers = combineReducers({
    showDialog: DialogReducer,
    confirm: ConfirmWindowReducer,
    mainLoading: MainLoading,
    mainLoadingItem: MainLoadingItem,
    errorBlockItem: ErrorBlock,
    errorBlock: ErrorBlock,
    data: Data,
    dataItem: DataItem,
});

export default allReducers;