import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RouteMaker from './routes';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer';  
import { BrowserRouter as Router } from 'react-router-dom'



// const rootReducer = combineReducers({users: usersReducer, something else must go here})

const store = createStore(rootReducer, applyMiddleware(thunk))


ReactDOM.render(<Provider store={store}><Router><RouteMaker /></Router></Provider>, document.getElementById('root'));
registerServiceWorker();
