import axios from 'axios';
import {setData} from "../Actions/setData";
import Const from "../Const/Const";
import {ConfirmWindowActions} from "../Actions/ConfirmWindowActions";

export default function (data) {
    return (dispatch) => {
        dispatch(setData(data.check,"SET_CHECK"));
        axios.defaults.withCredentials = true;
        axios.post(Const.backendUrl + "?op=subscribe_price&use=set_check", data,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
            ).then(res => {
            dispatch(ConfirmWindowActions(data.confirm, "SHOW_CONFIRM_WINDOW"));
        }).catch(error => {
            dispatch(ConfirmWindowActions({
                visible: true,
                name: "exception",
                head: 'Произошла ошибка!',
                title: error.response.data.error
            }, "SHOW_CONFIRM_WINDOW"));
            dispatch(setData(!data.check,"SET_CHECK"));
        })
    };
}