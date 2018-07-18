import {setData} from "../Actions/setData";
import {MainLoadingActions} from "../Actions/MainLoadingAction";
import axios from 'axios';
import Const from "../Const/Const";

export default function() {
    let id = document.getElementById("subscribe_price").getAttribute("data-id");
    if(isNaN(parseInt(id))){
        return (dispatch) => {
            console.log('Не передан id товара');
        }
    }
    return (dispatch) => {
        axios.defaults.withCredentials = true;
        axios.post(Const.backendUrl + "?op=subscribe_price&use=get_info&id=" + id).then(res => {
            dispatch(setData({...res.data, ...{id: id}},"SET_INFO"));
            dispatch(MainLoadingActions(false));
        }).catch(error => {
            console.log(error);
            dispatch(setData("Ошибка входа в личный кабинет!","ERROR_BLOCK_TEXT"));
            dispatch(setData(1,"ERROR_BLOCK_ACTIVE"));
            dispatch(MainLoadingActions(false));
        })
    };
}