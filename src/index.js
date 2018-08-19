import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


import { applyMiddleware, compose, combineReducers, createStore } from 'redux';

import { Provider } from 'react-redux';

import thunk from "redux-thunk";
import productsReducer from './reducers/product-reducer';
import userReducer from './reducers/user-reducer';

/**
 * 
 * @param {*} state This stores the previous state of the 
 *  store
 * @param {*} action This listens to all the actions dispatched
 *  by the store.dispatch(action)
 * @returns the new state to be updates in the store
 */
// function productsReducer(state = [], action) {
//     if (action.type === 'changeState') {
//         return action.payload;
//     }
//     return state;
// }

// function userReducer(state = '', {type, payload}) {
//     switch (type) {
//         case "updateUser":
//             return payload;
//     }
//     return state;
// }

const allReducer = combineReducers({
    user: userReducer,
    products: productsReducer
});

const allStoreEnhancers = compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

/* There should be only one store in our application */
const store = createStore(
    allReducer,
    {
        products: [{ name: "redmi" }],
        user: "ayush"
    },
    allStoreEnhancers
);

/* This gets the current state of our store */
// console.log(store.getState());

const updateActionUser = {
    type: "updateUser",
    payload: {
        user: "Poddar"
    }
};

store.dispatch(updateActionUser);

// console.log(store.getState());


// /* action is nothing but an object which has a type and a payload 
//     actions must contain the type property to indicate the type of action
// */
// const action = {
//     type: "changeState",
//     payload: {
//         newState: "New State"
//     }
// };

// /**
//  * 
//  * @param action the action that is dispatched to the store
//  * 
//  * The only way to update the store is to call dispatch on the store
//  * the reducers listen to all the actions and can update the store accordingly
//  */
// store.dispatch(action);

// console.log(store.getState());

ReactDOM.render(<Provider store={store}><App randomProp="hello"/></Provider>, document.getElementById('root'));
registerServiceWorker();
