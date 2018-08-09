import React from 'react';
import {connect} from "react-redux"
import {css} from 'aphrodite-jss';
import ConfirmModalStyle from '../Styles/ConfirmModalStyle'
import {setData} from "../Actions/setData";
import SubmitItem from "../FetchData/SubmitItem";

const SubscribeCheckBoxItemComponent = ({data, submitForm, setTarget, onSubmitBet}) => {
    const showNote = () => {
        if(!data.is_member){
            return (
                <div dangerouslySetInnerHTML={{__html:'* - ' + data.note}} />
            )
        } else if(!data.fill_email){
            return (
                <div dangerouslySetInnerHTML={{__html:'* - ' + data.note_email}} />
            )
        } else{
            return (
                <div dangerouslySetInnerHTML={{__html:'* - ' + data.confirm_motivation}} />
            )
        }
    };

    const handleInputChange = (e) =>{
        let confirm;
        const target = e.target;
        setTarget(e.target.value);
    };
    const itemsOptions = () => {
        return Object.keys(data.options).map(function(key, index) {
            return (
                <option key={index} value={data.options[key]['id']}>{data.options[key]['val']}</option>
            )
        })
    };
    const submit = () => {
        let confirm;
        confirm = {
            visible: true,
            name: "confirm_item",
            head: data.confirm_head,
            title: data.confirm_title,

        };
        submitForm({
            id:data.target,
            check: true,
            confirm: confirm
        });
    };

    const removeProp = (id) => {
        let confirm;
        confirm = {
            visible: true,
            name: "confirm_item",
            head: data.confirm_head_break,
        };
        submitForm({
            id:id,
            check: false,
            confirm: confirm
        });
    };

    const showReady = () => {
        let ar = Object.keys(data.subOptions);
        if(ar.length > 0) {
            let buttons = ar.map(function (key, index) {
                return (
                    <div key={index} className="f1">
                        <a href="#" onClick={() => {
                            removeProp(data.subOptions[key]['id'])
                        }}><span className="glyphicon glyphicon-remove" /></a>
                        <div>
                            <h2>{data.subOptions[key]['val']}</h2>
                        </div>
                    </div>
                );
            });
            return (
                <div>
                    <p>Вы подписаны на уведомления о поступлении размеров:</p>
                    <div className="filters_up">{buttons}</div>
                </div>
            )
        }
    };
    const buttonSubmit = () => {
        if(data.target !== undefined && data.target > 0){
            return (
                <div className="form-group">
                 <button className={"btn btn-primary" + (onSubmitBet?" loading": "")} onClick={submit} disabled={onSubmitBet}>{data.submit}</button>
                </div>
            )
        }
    };
    return (
        <div>
            <div className="form-inline">
                <div className="form-group">
                    <select disabled={!data.is_member || !data.fill_email} className="form-control tooltipstered" name="isGoingItem" onChange={(e) =>{ handleInputChange(e)}} value={data.target}>
                        {itemsOptions()}
                    </select>
                </div>
                {buttonSubmit()}
            </div>
            {showNote()}
            {showReady()}
        </div>
    )
};

export default connect(
    state => ({
        data: state.dataItem,
        onSubmitBet: state.dataItem.onSubmit
    }),
    dispatch => ({
        submitForm: (data) => {dispatch(SubmitItem(data))},
        setTarget: (data) => {dispatch(setData({target: data},"SET_TARGET_ITEM"))}
    })
)(SubscribeCheckBoxItemComponent)