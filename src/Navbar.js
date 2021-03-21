import React from 'react'
import {NavLink} from 'react-router-dom'
import Container from '@material-ui/core/Container';
import MenuIcon from '@material-ui/icons/Menu';


const Navbar = () => {
    return(
        <>
         <div className="container-fluid">
         <div className="navwrapper">
                <div className="row">
                    <div className="col-12 mx-auto menuWrapper px-0">
                         <nav className="navbar navbar-expand-lg navbar-blue bg-blue">
                            <img className="logoImage" src="https://radiustheme.com/demo/wordpress/themes/digeco/wp-content/themes/digeco/assets/img/logo.png"/>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <MenuIcon className="navbar-toggler-icon"/>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <NavLink className="navlink" to="/">Home</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="navlink" to="/About">About</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="navlink" to="/Service">Service</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="navlink" to="/Portfolio">Portfolio</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="navlink" to="/Shop">Shop</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="navlink" to="Contact">Contact</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
         </div>
        </>
    );
}

export default Navbar