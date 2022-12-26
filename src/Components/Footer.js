import React from "react";
import './style.css';
import logo from '../Images/logo.png';
import facebook from '../Images/Facebook.png';
import twitter from '../Images/Twitter.png';
import insta from '../Images/Instagram.png';
import pintrest from '../Images/Pintrest.png';
import { Link,ListItemButton } from "@mui/material";

function Footer(){
    return(
        <>
        
            <div id="footer">
                <img width={'200px'} src={logo}/>
                <div id='NavLink'>
                   <ul>
                        <li className="footerNav"><Link  underline="none" color={'#ffff'} href="#">Home</Link></li>
                        <li className="footerNav"><Link  underline="none" color={'#ffff'} href="#">About US</Link></li>
                        <li className="footerNav"><Link  underline="none" color={'#ffff'} href="#" >Services</Link></li>
                        <li className="footerNav"><Link  underline="none" color={'#ffff'} href="#">Foods</Link></li>
                        <li className="footerNav"><Link  underline="none" color={'#ffff'} href="#">Contact</Link></li>
                        <li className="footerNav"><Link  underline="none" color={'#ffff'} href="#">Location</Link></li>
                    </ul>
                </div>
                <div>
                <Link underline="none" className="social_icon" href="#"> <img className="sciol_icon" src={facebook} /></Link>
                <Link underline='none' className="social_icon" href="#"> <img className="sciol_icon" src={twitter} /></Link>
                <Link underline="none" className="social_icon" href="#"> <img className="sciol_icon" src={insta} /></Link>
                <Link underline="none" className="social_icon" href="#"> <img className="sciol_icon" src={pintrest} /></Link>
                </div>
            </div>

       
        </>
    )
}

export default Footer