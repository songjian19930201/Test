import React from 'react';
import ReactDOM from 'react-dom';
import Sass from 'sass-loader'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
