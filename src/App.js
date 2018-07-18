import React, { Component } from 'react';
import {Provider} from 'react-redux';
import DialogComponent from "./Service/Components/DialogComponent";
import SubscribePriceStore from './Service/Stores/SubscribePriceStore'
import SubscribePriceContainer from "./Service/Containers/SubscribePriceContainer";

const store = SubscribePriceStore();

class App extends Component {
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
              <SubscribePriceContainer />
            </Provider>
        );
    }
}

export default App;
