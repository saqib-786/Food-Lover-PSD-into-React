import React from "react";
import cardImage1 from '../Images/Card Image 1.png';
import cardImage2 from '../Images/Card Image 2.png';
import cardImage3 from '../Images/Card Image 3.png';
 import { Card } from "@mui/material";
 import CardMedia from "@mui/material/CardMedia";
 import CardContent from "@mui/material/CardContent";
 import Typography from "@mui/material/Typography";

function Menu(){
    let card_data = [
        {
            card_title: 'Italian Source Mushroom',
            card_dis: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione enim velit quisquam dolorum Ratione enim velit quisquam dolorum',
            card_img: cardImage1,
            price: ' Price: $12:00',

        },
        {
            card_title: 'Italian Source Mushroom',
            card_dis: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione enim velit quisquam dolorum Ratione enim velit quisquam dolorum',
            card_img: cardImage2,
            price: ' Price: $12:00',


        },
        {
            card_title: 'Italian Source Mushroom',
            card_dis: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione enim velit quisquam dolorum Ratione enim velit quisquam dolorum',
            card_img: cardImage3,
            price: ' Price: $12:00',
        }
    ]
    return(
        <>
        <div id="menu_box">
            <Typography fontWeight={'800'} sx={{fontSize:{lg:'2.5em',md:'2.5em',sm:'1.5em',xs:'1.5em'}}} textAlign={'center'} color={'white'} variant="h2" component="h1">Our Menue</Typography>

            <div id="card_container">
                {card_data.map((item,key)=>{
                    return <Card key={key} sx={{width:350,backgroundColor:'#17181E',marginBottom:3,margin:2,}} >
                        <CardMedia
                        component="img"
                        height='300'
                        image={item.card_img}
                        />
                        <Typography margin={1} fontSize={'1.3em'} fontWeight={'800'} color={'#FE8F00'}>{item.card_title}</Typography>
                        <Typography margin={1} variant='body2'   color={'white'}>{item.card_dis}</Typography>
                        <Typography margin={1} fontWeight={'600'} color={'#FE8F00'}>{item.price}</Typography>


                    </Card>
                })}
                {/* <Card  sx={{width:350,backgroundColor:'#17181E',marginBottom:3,margin:2}}>
                    <CardMedia
                    component='img'
                    height="300"
                    image={cardImage1}
                    />
                    <CardContent>
                        <Typography fontSize={'1.3em'} fontWeight={'bold'} color={'#FE8F00'}>Italian Source Mushroom</Typography>
                        <Typography variant='body2'   color={'white'}> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione enim velit quisquam dolorum Ratione enim velit quisquam dolorum</Typography>
                        <Typography color={'#FE8F00'}> Price: $ 12:00</Typography>
                    </CardContent>
                </Card>
                <Card sx={{maxWidth:350,backgroundColor:'#17181E',marginBottom:3,margin:2}}>
                    <CardMedia
                    component='img'
                    height="300"
                    image={cardImage2}
                    />
                    <CardContent>
                        <Typography fontSize={'1.3em'} fontWeight={'bold'} color={'#FE8F00'}>Italian Source Mushroom</Typography>
                        <Typography variant='body2'   color={'white'}> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione enim velit quisquam dolorum Ratione enim velit quisquam dolorum</Typography>
                        <Typography color={'#FE8F00'}> Price: $ 12:00</Typography>
                    </CardContent>
                </Card>
                <Card sx={{maxWidth:350,backgroundColor:'#17181E',marginBottom:3,margin:2}}>
                    <CardMedia
                    component='img'
                    height="300"
                    image={cardImage3}
                    />
                    <CardContent>
                        <Typography fontSize={'1.3em'} fontWeight={'bold'} color={'#FE8F00'}>Italian Source Mushroom</Typography>
                        <Typography variant='body2'   color={'white'}> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione enim velit quisquam dolorum Ratione enim velit quisquam dolorum</Typography>
                        <Typography color={'#FE8F00'}> Price: $ 12:00</Typography>
                    </CardContent>
                </Card> */}
                
            </div>

        </div>
        </>
    )
}

export default Menu