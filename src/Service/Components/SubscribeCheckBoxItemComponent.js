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
        } else if(data.check){
            return (
                <div className={css(ConfirmModalStyle.greenText)} dangerouslySetInnerHTML={{__html:'* - ' + data.confirm_title}} />
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
        // console.log(data.options);
        return Object.keys(data.options).map(function(key, index) {
            return (
                <option key={index} value={key}>{data.options[key]}</option>
            )
        })
    };
    const submit = () => {
        submitForm(data.target);
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
                    <select className="form-control tooltipstered" name="isGoingItem" onChange={(e) =>{ handleInputChange(e)} }>
                        {itemsOptions()}
                    </select>
                </div>
                {buttonSubmit()}
            </div>
            {showNote()}
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