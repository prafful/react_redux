import React from "react";
import ReactDOM from "react-dom"
import {connect} from 'react-redux';
import { bindActionCreators } from "redux";


import { clickUser } from "../actions/userActions";


class UserList extends React.Component{

    createAllListItems(){
        return this.props.myUsers.map((user) =>{
            return (
                <li key={user.id} 
                    onClick={() => this.props.clickUserEvent(user)}
                > 
                    {user.first} {user.last}
                </li>
            );
        });
    }

    render(){
        return(
            <ul>
              {this.createAllListItems()}
            </ul>
        );
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators(
        {
            clickUserEvent : clickUser
        },
        dispatch
          
    );
}

function mapStateToProps(state){
    console.log(state.users);
    //users is as defined in combineAllReducers.js
    return{
        myUsers:state.users
    };
}

export default connect(mapStateToProps, matchDispatchToProps)(UserList);



