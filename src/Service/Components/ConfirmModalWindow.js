import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import PropTypes from 'prop-types'
import ConfirmModal from 'react-bootstrap4-modal';
import {connect} from "react-redux";
import {ConfirmWindowActions} from "../Actions/ConfirmWindowActions";

class ConfirmModalWindow extends Component {
    static propTypes = {
        visible: PropTypes.bool,
        header: PropTypes.string.isRequired,
        body: PropTypes.string,
        name: PropTypes.string.isRequired,
        buttonOK: PropTypes.string,
        buttonNO: PropTypes.string,
        funcButtonOK: PropTypes.func,
        funcButtonNO: PropTypes.func,
        funcBackdrop: PropTypes.func,
    };

    constructor(props, context) {
        super(props, context);
        this.onClick=this.onClick.bind(this);
        this.showBody=this.showBody.bind(this);
        this.showButtonOK=this.showButtonOK.bind(this);
    }
    onClick(){
        console.log("ok", this.props);
    }
    showBody(){
        if(this.props.body) {
            return (
                <div className="modal-body">
                    <p>{this.props.body}</p>
                </div>
            )
        }
        return '';
    }
    showButtonOK(){
        if(this.props.buttonOK) {
            return (
                <button type="button" className="btn btn-secondary" onClick={this.props.funcButtonOK}>
                    {this.props.buttonOK}
                </button>
            )
        }
        return '';
    }
    showButtonNO(){
        if(this.props.buttonNO) {
            return (
                <button type="button" className="btn btn-primary" onClick={this.props.funcButtonNO}>
                    {this.props.buttonNO}
                </button>
            )
        }
        return '';
    }
    render() {
        let visible=false;
        if(this.props.name in this.props.confirm){
            visible = this.props.confirm[this.props.name].visible;
        }
        return (
            <ConfirmModal visible={visible} onClickBackdrop={this.props.funcBackdrop}>
                <div className="modal-header">
                    <h5 className="modal-title">{this.props.header}</h5>
                </div>
                {this.showBody()}
                <div className="modal-footer">
                    {this.showButtonOK()}
                    {this.showButtonNO()}
                </div>
            </ConfirmModal>
        )
    }
}

export default connect(
    state => ({
        confirm: state.confirm,
        iterate: state.confirm.iterate,
    }),
    dispatch => ({
        setConfirmWindow: (data) => {dispatch(ConfirmWindowActions(data, "SET_CONFIRM_WINDOW"))}
    })
)(ConfirmModalWindow)