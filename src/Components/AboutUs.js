import React from "react";
import img from '../Images/About Image.png';
import './style.css';
import { ImageList, ImageListItem,Container } from "@mui/material";
import Image from '@mui/material';
import Typography from "@mui/material/Typography";

function About(){
    return(
        <>
        <div id="about_us">

        <div id="about_img_container">
           
              <img  src={img}/>

               
        </div>

        <div id="para_div">
            <Typography fontWeight={'800'} sx={{fontSize:{lg:'2.5em',md:'2.5em',sm:'1.5em',xs:'1.5em'}}} variant="h2" component="h1">About Us</Typography>

            <Typography component="p">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione enim velit quisquam dolorum possimus soluta minus temporibus atque,
           alias molestias consectetur ullam porro, eligendi numquam optio, recusandae maiores repellendus esse!Lorem ipsum dolor sit amet consectetur.
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione enim velit quisquam dolorum possimus soluta minus temporibus atque,
           alias molestias consectetur ullam porro, eligendi numquam optio, recusandae maiores repellendus esse!Lorem ipsum dolor sit amet consectetur.
         
         
            </Typography>
            </div>
        </div>

        </>
    )
}

export default About