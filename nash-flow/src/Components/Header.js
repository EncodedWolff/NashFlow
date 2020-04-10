import React from "react";
import ReactDOM from 'react-dom';
import Navbar from './Navbar';


class Header extends React.Component {
    constructor(){
        super();
    };

    state = {};

    render(){
        return(
            <div>
                <h1>This is my header!</h1>
                <Navbar />
            </div>
        );
    }
}

export default Header;