import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import index from "./js/index"
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
