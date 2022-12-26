import React from "react";
import { useState,useRef} from "react";
import img from '../Images/imamge.png';
import { Container } from "@mui/system";
import { Card } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material";
import Typography from "@mui/material/Typography";
import card_img1 from '../Images/Card_img2.png';
import card_img2 from '../Images/Card_img3.png';
import card_img3 from '../Images/Card_img4.png';
import card_img4 from '../Images/Card_img5.png';

function Gallery(){
    let card_data =[card_img1,card_img2, card_img3,card_img4];
    let myList = [1,2,3,4,5];
return(
        
<>
<Typography fontWeight={'800'} sx={{fontSize:{lg:'2em',md:'2em',sm:'1.5em',xs:'1.5em'}}} variant="h2" component='h1'textAlign={'center'} mt={10} color={'white'}>Our Food Gallery</Typography>
<Container maxWidth>
            
<div className="food_card_cotainer">



<Card sx={{maxWidth:350,marginBottom:3}}>
    <CardMedia
    component='img'
    image={img}
    />
</Card>

<Card sx={{maxWidth:350,marginBottom:3}}>
    <CardMedia
    component='img'
    image={card_img1}
    />
</Card>
<Card sx={{maxWidth:350,marginBottom:3}}>
    <CardMedia
    component='img'
    image={card_img2}
    />
</Card>



</div>

</Container>

<Container maxWidth>
<div className="food_card_cotainer">

<Card sx={{maxWidth:350,marginBottom:3}}>
    <CardMedia
    component='img'
    image={card_img3}
    />
</Card>

<Card sx={{maxWidth:350,marginBottom:3}}>
    <CardMedia
    component='img'
    image={card_img4}
    />
</Card>
<Card sx={{maxWidth:350,marginBottom:3}}>
    <CardMedia
    component='img'
    image={img}
    />
</Card>

</div>
</Container>

        
</>
    )
}

export default Gallery