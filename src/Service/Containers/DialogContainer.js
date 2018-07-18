import React from 'react';
import {connect} from "react-redux"
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'react-bootstrap';
import {DialogActions} from "../Actions/DialogActions";
import ConfirmModalWindow from "../Components/ConfirmModalWindow";
import {ConfirmWindowActions} from "../Actions/ConfirmWindowActions";

const DialogContainer = ({showDialog, setShowDialog}) => {
    const onClick = (e, name) => {
        setShowDialog(name,!showDialog(name));
        e.preventDefault();
    };

    return (
        <div>
            <Button onClick={(e) => onClick(e, "confirm1")}>Show alert1</Button>
            <Button onClick={(e) => onClick(e, "confirm2")}>Show alert2</Button>
            <ConfirmModalWindow
                className="red"
                name="confirm1"
                header="Header"
                body="Body"
                buttonOK="OK"
                buttonNO="NO"
                funcBackdrop={(e) => {onClick(e, "confirm1")}}
                funcButtonOK={(e) => {onClick(e, "confirm1")}}
                funcButtonNO={(e) => {onClick(e, "confirm1")}}
            />
            <ConfirmModalWindow
                className="red"
                name="confirm2"
                header="Header2"
                body="Body2"
                buttonOK="OK"
                buttonNO="NO"
                funcBackdrop={(e) => {onClick(e, "confirm2")}}
                funcButtonOK={(e) => {onClick(e, "confirm2")}}
                funcButtonNO={(e) => {onClick(e, "confirm2")}}
            />
        </div>
    )
};

export default connect(
    state => ({
        showDialog: (name) => {
            if (name in state.confirm) {
                return state.confirm[name].visible
            } else {
                return false;
            }
        }
    }),
    dispatch => ({
        setShowDialog: (name, visible) => {dispatch(ConfirmWindowActions({name:name, visible:visible}, "SHOW_CONFIRM_WINDOW"))}
    })
)(DialogContainer)