import React, { Component } from 'react';

class AppContent extends Component {

    //just a function
    btnHandler = () => {
        console.log("Button Clicked " + this);

    }

    constructor() {
        super();
        console.log("Constructor Called");
        this.btnHandler = this.btnHandler.bind(this);
    }

    //method
    render() {
        return (
            <div>
                <h3>This is a content Area</h3>
                <button on onClick={this.btnHandler}>Button 1</button>
            </div>
        );
    }
}

export default AppContent;