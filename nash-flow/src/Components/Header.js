import React from "react";
import '../App.css';

class Header extends React.Component {
    constructor(){
        super();
    };

    state = {};

    render(){
        return(
            <div className="text-muted">
                <h1>Get... It... DONE!</h1>
            </div>
        );
    }
}

export default Header;