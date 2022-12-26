import React from "react";
import  Typography  from "@mui/material/Typography";
import { Container } from "@mui/system";
import Layer1 from '../Images/Layer 1.png'

function BestMeal(){
    return(
        <>
        <div id="best_meal">
            <div id="layer_1_bg">
                {/* <img id="layerImage" src={Layer1}/> */}
            </div>
            <Container maxWidth>
                <Typography fontWeight={'800'} sx={{fontSize:{lg:'2em',md:'2.5em',sm:'1.5em',xs:'1.5em'}}} color={'white'} variant='h2' componet="h1">Enjoy Best Meal</Typography>
                <Typography  color={'white'} component='p'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione enim velit quisquam dolorum possimus soluta minus temporibus atque,
               alias molestias consectetur ullam porro, eligendi numquam optio, recusandae maiores repellendus esse!Lorem ipsum dolor sit amet consectetur.
                </Typography>
            </Container>

        </div>
        </>
    )
}

export default BestMeal