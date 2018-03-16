import React from "react";
import ReactDOM from "react-dom"
import {connect} from 'react-redux';
import { bindActionCreators } from "redux";

class UserList extends React.Component{

    createListOfUsers(){
        return this.props.myUsers.map((user) =>{
            return (
                <li key={user.id}>{user.first} {user.last}</li>
            );
        });
    }


    render(){
        return(
            <ul>
               { this.createListOfUsers()}
            </ul>
        );
    }
}

function mapStateToProps(state){
    console.log(state.users);
    return{
        myUsers:state.users
    };
}

export default connect(mapStateToProps)(UserList);



