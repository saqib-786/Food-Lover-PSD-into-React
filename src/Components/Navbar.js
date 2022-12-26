import React from "react";
import './style.css';
import headerLogo from '../Images/Header logo.png';
import { ListItemButton } from "@mui/material";
import { Link } from "react-router-dom";
function Navbar(){
    return(
        <>
        <div id="container" >
            <nav>
                <ul>
                    <li><a className="active" href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Offers</a></li>
                </ul>
                <img src={headerLogo}/>
                <ul>
                    <li><a href="#">Gallery</a></li>
                    <li><Link to={'/Contact'}>Contact</Link></li>
                    <li><a href="#">Blog</a></li>
                </ul>
            </nav>
        </div>
        </>
    )
}

export default Navbar