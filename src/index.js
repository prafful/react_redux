import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';

import allReducers from "./reducers/combineAllReducers";
import MainComponent from "./components/MainComponent";




 import { createStore } from "redux";

const store = createStore(allReducers);

 ReactDOM.render(
     <Provider store={store}>
        <MainComponent>
            Hello form React Redux
        </MainComponent>
    </Provider>    
        , 
            document.getElementById("reduxComponent"));