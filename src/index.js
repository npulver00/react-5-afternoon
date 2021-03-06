import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import store from './ducks/store';


ReactDOM.render(
<Provider store = {store}>
<App />
</Provider>
, document.getElementById('root'));
registerServiceWorker();

