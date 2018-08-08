import React, { Component } from 'react';
import {Provider} from 'react-redux';
import SubscribePriceStore from './Service/Stores/SubscribePriceStore'
import SubscribeItemContainer from "./Service/Containers/SubscribeItemContainer";

const store = SubscribePriceStore();

class AppItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }

    componentDidMount(){
        let el = document.getElementById("Loading")
        this.setState({loading: false})
    }
    render() {
        return (
            <Provider store={store}>
              <SubscribeItemContainer />
            </Provider>
        );
    }
}

export default AppItem;
