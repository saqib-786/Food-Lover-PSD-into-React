import React from "react";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import './style.css'

function Enjoy(){
    return(
        <>
    
        <div id="enjoy_container">

        <div id="food_box">
        <Container maxWidth='sm'>
        <Typography fontWeight={'800'} sx={{fontSize:{lg:'2em',md:'2em',sm:'1.5em',xs:'1.5em'}}} >Enjoy Our Food</Typography>
        <Typography mt={2} component='p'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione enim velit quisquam dolorum possimus soluta minus temporibus atque,
        numquam optio, recusandae maiores repellendus esse!Lorem ipsum dolor sit amet consectetur.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione enim velit quisquam dolorum possimus soluta minus temporibus atque,
        numquam optio, recusandae maiores repellendus esse!Lorem ipsum dolor sit amet consectetur.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione enim velit quisquam dolorum possimus soluta minus temporibus atque,
        numquam optio, recusandae maiores repellendus esse!Lorem ipsum dolor sit amet consectetur.
        </Typography>
        </Container>
    </div>

    </div>
        
        </>
    )
}

export default Enjoy