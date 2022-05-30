import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom"; 
import './index.css';
import App from "./App";

import reportWebVitals from './reportWebVitals'
//import * as serviceWorker from "./serviceWorker";
ReactDOM.render(
    <BrowserRouter>
    <div></div>
    <App/>
    </BrowserRouter>,
    document.getElementById("root")
);
reportWebVitals();
//serviceWorker.unregister();