import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {ScoreboardProvider} from "context/ScoreboardContext";

const root = (
<BrowserRouter>
  <ScoreboardProvider>
    <App/>
  </ScoreboardProvider>
</BrowserRouter>
)
ReactDOM.render (root, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
