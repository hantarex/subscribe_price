import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../Reducers/';
import { composeWithDevTools } from 'redux-devtools-extension';

export default (initialState) => {
    return createStore(
        rootReducer,
        initialState,
        composeWithDevTools(
            applyMiddleware(thunk)
        )
    );
}