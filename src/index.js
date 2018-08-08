import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import AppItem from "./AppItem";

ReactDOM.render(<App />, document.getElementById('subscribe_price'));

ReactDOM.render(<AppItem />, document.getElementById('subscribe_item'));
registerServiceWorker();
