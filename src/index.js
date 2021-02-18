import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // WE NEED TO HAVE react-redux TO CONNECT THE REACT APP WITH REDUX 
import { createStore, combineReducers, applyMiddleware } from 'redux'; // WE NEED TO HAVE REDUX INSTALLED IN OUR package.-lock.json
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import reducer from './store/reducer';


const logger = store => {
    return next => {
        return action => {
            console.log('[Middleware] Dispatching', action);
            const result = next(action);
            console.log('[Middleware next state', store.getState())
            return result;
        }
    }
}

// CREATE STORE WITH createStore() METHOD FROM REDUX
const store = createStore(reducer) 

ReactDOM.render(
    <Provider store={store}> {/* WITH THAT, OUR STORE IS CONNECTED WITH OUR REACT APP*/}
        <App />
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
