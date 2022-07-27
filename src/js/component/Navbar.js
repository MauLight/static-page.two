import React from "react";
import Logo from "../../img/airbnb-logo.png"

const Navbar = (props) => {
    return (
            <nav>
                <img src={Logo} className="nav-logo" />
            </nav>
        )
    }



export default Navbar