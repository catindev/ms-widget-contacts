import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

const root = document.getElementById('ContactsListWidget')
ReactDOM.render(
    <App {...(root.dataset)} />,
    document.getElementById('ContactsListWidget'));
// registerServiceWorker();
