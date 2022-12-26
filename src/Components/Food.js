import React from "react";
import './style.css';
import img from '../Images/Layer 2.png';
import  Typography  from "@mui/material/Typography";
function Food(){
    return(
        <>
        <div id="Food_container">
            <Typography fontWeight={'bold'} variant="h2" component="h1" sx={{
                fontSize:{lg:'2.5em',md:'2.5em',sm:'1.5em',xs:'1.5em'},fontWidth:'800'
            }}>Our Food Quality</Typography>
            <Typography component="p">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione enim velit quisquam dolorum possimus soluta minus temporibus atque,
            alias molestias consectetur ullam porro, eligendi numquam optio, recusandae maiores repellendus esse!Lorem ipsum dolor sit amet consectetur.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione enim velit quisquam dolorum possimus soluta minus temporibus atque,
            alias molestias consectetur ullam porro, eligendi numquam optio, recusandae maiores repellendus esse!Lorem ipsum dolor sit amet consectetur.
         
            </Typography>

            

        </div>
        </>
    )
}

export default Food