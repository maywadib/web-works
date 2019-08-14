import React, { Component , Fragment} from 'react';

class AppHeader extends Component {
   
    
    render() {
        
        console.log(this);
        console.log("---------------------------");
        console.log(this.props);
        //keep our data in<div. and return or in reactjs we have fragment
        return (
            <fragment>
                <h1>This is Header in {this.props.company}</h1>
                <h5>Created by {this.props.createdBy}</h5>
                <hr />
            </fragment>
        );
    };
}

export default AppHeader;