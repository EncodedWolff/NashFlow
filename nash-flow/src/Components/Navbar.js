import React from 'react';

class Navbar extends React.Component{
    constructor(){
        super();
    };

    state = {};

    

    render(){
        return(
            //The div below will hold all of the JSX code for the general appearance of
            //the Navbar.

            //I need to remember to write the logic to make the navbar fold down into a
            //small hamburger when it is not in use in mobile, as well as to highlight
            //the current page that is in use with a tab/label component from Bootstrap
            <div className="navbar">
                <a href="../../../public/login.html">Login</a>
                <a href="#">Customers</a>
                <a href="#">About</a>
            </div>
        );
    }
}

export default Navbar;