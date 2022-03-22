import React from 'react';
import ReactDOM  from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk" 
import { composeWithDevTools } from 'redux-devtools-extension';

import { App } from './components/App'
import reducers from './reducers';

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__ || compose;
const store = createStore(
        reducers,
        composeWithDevTools(applyMiddleware(thunk))
     );

ReactDOM.render(
<Provider store={store}>
<App/>
</Provider>,
document.querySelector('#root')
);