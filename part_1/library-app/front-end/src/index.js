import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter,Route} from 'react-router-dom';

ReactDOM.render(
        <Route path="/" component={App} />
, document.getElementById('root'));
