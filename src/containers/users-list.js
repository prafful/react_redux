import React from "react";
import ReactDOM from "react-dom"
import {connect} from 'react-redux';
import { bindActionCreators } from "redux";

export default class UserList extends React.Component{
    render(){
        return(
            <ul>
                <li> First Person </li>
                <li> Second Person </li>
                <li> Third Person </li>
                <li> Fourth Person </li>
            </ul>
        );
    }
}