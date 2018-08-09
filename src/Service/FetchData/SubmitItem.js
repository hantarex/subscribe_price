import axios from 'axios';
import {setData} from "../Actions/setData";
import Const from "../Const/Const";
import {ConfirmWindowActions} from "../Actions/ConfirmWindowActions";
import GetDataItem from "./GetDataItem";

export default function (data) {
    return (dispatch) => {
        dispatch(setData(true,"ON_SUBMIT"));
        axios.defaults.withCredentials = true;
        axios.post(Const.backendUrl + "?op=subscribe_item&use=set_prop", data,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
            ).then(res => {
            dispatch(GetDataItem());
            if(data.check === true) {
                dispatch(setData({target: 0}, "SET_TARGET_ITEM"));
            }
            dispatch(setData(false,"ON_SUBMIT"));
            dispatch(ConfirmWindowActions(data.confirm, "SHOW_CONFIRM_WINDOW"));
        }).catch(error => {
            dispatch(ConfirmWindowActions({
                visible: true,
                name: "exception_item",
                head: 'Произошла ошибка!',
                title: error.response.data.error
            }, "SHOW_CONFIRM_WINDOW"));
            dispatch(setData({target: 0},"SET_TARGET_ITEM"));
        })
    };
}