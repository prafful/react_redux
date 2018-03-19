import React from "react";
import ReactDOM from "react-dom"
import {connect} from 'react-redux';

class UserDetail extends React.Component{
    render(){
       
            if(!this.props.userAct){
               return(
                   <div> Click any one user...</div>
               ); 
            }
        return(
            <div>
               <h4>Id: {this.props.userAct.id}</h4>
               <h5>Name: {this.props.userAct.first} {this.props.userAct.last}</h5>
               <h5>Description: {this.props.userAct.description}</h5>
            </div>
        );
    }
}

function mapStateToProps(state){
    console.log(state.activeuser);
    return{
        userAct:state.activeuser
    };
}


export default connect(mapStateToProps)(UserDetail);