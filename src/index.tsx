import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'proxy-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './assets/index.css';

ReactDOM.render(<App />, document.getElementById('root'));
