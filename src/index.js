import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux'; // WE NEED TO HAVE REDUX INSTALLED IN OUR package.-lock.json
import { Provider } from 'react-redux'; // WE NEED TO HAVE react-redux TO CONNECT THE REACT APP WITH REDUX 
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// import reducer from './store/reducer';
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';

const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultReducer
});

// CREATE STORE WITH createStore() METHOD FROM REDUX
// const store = createStore(reducer) 
const store = createStore(rootReducer) 

ReactDOM.render(
    <Provider store={store}> {/* WITH THAT, OUR STORE IS CONNECTED WITH OUR REACT APP*/}
        <App />
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
