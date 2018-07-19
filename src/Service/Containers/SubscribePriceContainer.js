import React from 'react'
import SubscribeCheckBoxPriceComponent from "../Components/SubscribeCheckBoxPriceComponent";
import {connect} from "react-redux";
import GetData from "../FetchData/GetData";
import {css} from 'aphrodite-jss';
import ConfirmModalStyle from "../Styles/ConfirmModalStyle";
import ConfirmModalWindow from "../Components/ConfirmModalWindow";
import {ConfirmWindowActions} from "../Actions/ConfirmWindowActions";

const SubscribePriceContainer = ({mainLoading, onGetData, errorBlock, showConfirm, data}) => {
    if(mainLoading) {
        onGetData();
    }
    const onClickConfirm = (e, name) => {
        showConfirm(name,false);
        e.preventDefault();
    };
    const showMain = () => {
        if (mainLoading) {
            return (
                <div />
            )
        } else if (errorBlock.active === 1) {
            console.log(errorBlock.text);
            return (
                <div>
                    {/*<div className="error">*/}
                        {/*{errorBlock.text}*/}
                    {/*</div>*/}
                </div>
            )
        }
        else {
            return (
                <div className={css(ConfirmModalStyle.fade, ConfirmModalStyle.subscribe_price)}>
                    <SubscribeCheckBoxPriceComponent/>
                    <ConfirmModalWindow
                        className="green"
                        name="confirm"
                        buttonOK="Да"
                        funcBackdrop={(e) => {onClickConfirm(e, "confirm")}}
                        funcButtonOK={(e) => {onClickConfirm(e, "confirm")}}
                    />
                    <ConfirmModalWindow
                        className="red"
                        name="exception"
                        header="Header2"
                        body="Body2"
                        buttonNO="Закрыть"
                        funcBackdrop={(e) => {onClickConfirm(e, "exception")}}
                        funcButtonOK={(e) => {onClickConfirm(e, "exception")}}
                        funcButtonNO={(e) => {onClickConfirm(e, "exception")}}
                    />
                </div>
            )
        }
    };
    return (
        showMain()
    );
};

export default connect(
    state => ({
        mainLoading: state.mainLoading,
        errorBlock: state.errorBlock,
        data: state.data,
    }),
    dispatch => ({
            onGetData: () => {
                dispatch(GetData())
            },
            showConfirm: (name) => {
                dispatch(ConfirmWindowActions({
                    name: name,
                    visible: false
                }, "SHOW_CONFIRM_WINDOW"))
            }
        }
    )
)(SubscribePriceContainer)

