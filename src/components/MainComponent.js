import React from "react";
import ReactDOM from "react-dom";

import UserList from "../containers/users-list";
import UserDetail from "../containers/user-detail";

export default class MainComponent extends React.Component{
    render(){ 
        return(
            <div>
                <h3>User's Name</h3>
                        <UserList></UserList>
                <hr></hr>
                <h3>User Details</h3>
                    <UserDetail></UserDetail>
            </div>
        );
    }
}