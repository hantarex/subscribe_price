import {setData} from "../Actions/setData";
import {MainLoadingActions} from "../Actions/MainLoadingAction";
import axios from 'axios';
import Const from "../Const/Const";

function retryFailedRequest (err) {
    if (err.status === 500 && err.config && !err.config.__isRetryRequest) {
        err.config.__isRetryRequest = true;
        return axios(err.config);
    }
    throw err;
}

export default function() {
    let id = document.getElementById("subscribe_price").getAttribute("data-id");
    if(isNaN(parseInt(id))){
        return (dispatch) => {
            console.log('Не передан id товара');
        }
    }
    return (dispatch) => {
        axios.defaults.withCredentials = true;
        axios.defaults.maxRedirects = 0;
        axios.interceptors.response.use(undefined, retryFailedRequest);
        axios.post(Const.backendUrl + "?op=subscribe_price&use=get_info&id=" + id).then(res => {
            dispatch(MainLoadingActions(false));
            dispatch(setData({...res.data, ...{id: id}},"SET_INFO"));
        }).catch(error => {
            dispatch(setData("Ошибка входа в личный кабинет!","ERROR_BLOCK_TEXT"));
            dispatch(setData(1,"ERROR_BLOCK_ACTIVE"));
            dispatch(MainLoadingActions(false));
        })
    };
}