import React from 'react';
import {connect} from "react-redux"
import SendCheck from "../FetchData/SendCheck";

const SubscribeCheckBoxPriceComponent = ({data, sendCheck}) => {
    const showNote = () => {
        if(!data.is_member){
            return (
                <div>
                    {data.note}
                </div>
            )
        } else if(!data.fill_email){
            return (
                <div>
                    {data.note_email}
                </div>
            )
        }
    };

    const handleInputChange = (e) =>{
        let confirm;
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        if(value === true){
            confirm = {
                visible: true,
                name: "confirm",
                head: data.confirm_head,
                title: data.confirm_title,

            };
        } else {
            confirm = {
                visible: true,
                name: "confirm",
                head: data.confirm_head_break,
            };
        }
        sendCheck({
            check: value,
            id: data.id,
            confirm: confirm
        });
    };

    return (
        <div>
            <label>
                <input
                    name="isGoing"
                    type="checkbox"
                    checked={data.check ? data.check : false}
                    disabled={!data.is_member && !data.fill_email}
                    onChange={(e) =>{ handleInputChange(e)} }
                />
                {data.label}
            </label>
            {showNote()}
        </div>
    )
};

export default connect(
    state => ({
        data: state.data
    }),
    dispatch => ({
        sendCheck: (data) => {dispatch(SendCheck(data))},
    })
)(SubscribeCheckBoxPriceComponent)