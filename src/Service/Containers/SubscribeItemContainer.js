import React from 'react'
import {connect} from "react-redux";
import {css} from 'aphrodite-jss';
import ConfirmModalStyle from "../Styles/ConfirmModalStyle";
import ConfirmModalWindow from "../Components/ConfirmModalWindow";
import {ConfirmWindowActions} from "../Actions/ConfirmWindowActions";
import GetDataItem from "../FetchData/GetDataItem";
import SubscribeCheckBoxItemComponent from "../Components/SubscribeCheckBoxItemComponent";

const SubscribeItemContainer = ({mainLoading, onGetData, errorBlock, showConfirm, data}) => {
    if(mainLoading) {
        onGetData();
    }
    const onClickConfirm = (e, name) => {
        showConfirm(name,false);
        e.preventDefault();
    };
    const showMain = () => {
        if (mainLoading || data.options === undefined) {
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
                <div className={css(ConfirmModalStyle.subscribe_item)}>
                    <SubscribeCheckBoxItemComponent/>
                    <ConfirmModalWindow
                        className="green"
                        name="confirm_item"
                        buttonOK="Да"
                        funcBackdrop={(e) => {onClickConfirm(e, "confirm_item")}}
                        funcButtonOK={(e) => {onClickConfirm(e, "confirm_item")}}
                    />
                    <ConfirmModalWindow
                        className="red"
                        name="exception_item"
                        buttonNO="Закрыть"
                        funcBackdrop={(e) => {onClickConfirm(e, "exception_item")}}
                        funcButtonOK={(e) => {onClickConfirm(e, "exception_item")}}
                        funcButtonNO={(e) => {onClickConfirm(e, "exception_item")}}
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
        mainLoading: state.mainLoadingItem,
        errorBlock: state.errorBlockItem,
        data: state.dataItem,
    }),
    dispatch => ({
            onGetData: () => {
                dispatch(GetDataItem())
            },
            showConfirm: (name) => {
                dispatch(ConfirmWindowActions({
                    name: name,
                    visible: false
                }, "SHOW_CONFIRM_WINDOW"))
            }
        }
    )
)(SubscribeItemContainer)

