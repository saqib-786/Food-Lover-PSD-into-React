import React from "react";
import Navbar from "../Components/Navbar";
import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Box from '@mui/material/Box';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Facebook from '.././Images/Facebook.png'
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from "@mui/material/Button";
import { Route } from "react-router-dom";
// or
// import { OutlinedInput } from '@mui/material';
function Contact(){
    const goHome = (()=>{
        console.log(this.prop)
    })
    return(
        <>
        {/* <Navbar/> */}
        <center>
        <Typography sx={{fontSize:{lg:'3em',md:'3em',sm:'2em',sx:'2em'},color:'white',fontWeight:'1000',marginTop:5}}>CONTACT US</Typography>
        <Typography sx={{color:'white',fontSize:{lg:'1.5em',md:'1.5em',sm:'1em',xs:'0.8em'}}}>Question not answerd yet? We are here to help!</Typography>

        </center>

        <Container sx={{display:'flex',justifyContent:'space-between',backgroundColor:'white',marginTop:2,flexDirection:'column',padding:2,width:{lg:'50%',md:'50%',sm:'80%',xs:'90%'},borderRadius:1}}>
        <Typography sx={{fontSize:{lg:'1.5em',md:'1.5em',sm:'1em',xs:'1em'}}}>First Name <span style={{color:'red'}}>*</span> </Typography>
        <OutlinedInput sx={{marginTop:2}} />
        <Typography sx={{fontSize:{lg:'1.5em',md:'1.5em',sm:'1em',xs:'1em',marginTop:5}}}>Last Name: <span style={{color:'red'}}>*</span> </Typography>
        <OutlinedInput sx={{marginTop:2}} />
        <Typography sx={{fontSize:{lg:'1.5em',md:'1.5em',sm:'1em',xs:'1em',marginTop:5}}}>Email: <span style={{color:'red'}}>*</span> </Typography>
        <OutlinedInput sx={{marginTop:2}} />
        <Typography sx={{fontSize:{lg:'1.5em',md:'1.5em',sm:'1em',xs:'1em',marginTop:5}}}>Message: <span style={{color:'red'}}>*</span> </Typography>
        <OutlinedInput sx={{marginTop:2}} />
        <Typography sx={{fontSize:{lg:'1.5em',md:'1.5em',sm:'1em',xs:'1em',marginTop:5}}}>Addtional Details: <span style={{color:'red'}}>*</span> </Typography>
        <OutlinedInput sx={{marginTop:2}} />
        <center>
            <Button variant="contained" sx={{backgroundColor:'#FE8F00',color:'white',marginTop:2,width:{lg:'40%',md:'40%',sm:'50%',xs:'55%',fontWeight:'800'}}}>Send Message</Button>

            <br/>

            <Button variant="contained" sx={{backgroundColor:'#FE8F00',color:'white',marginTop:2,width:{lg:'40%',md:'40%',sm:'50%',xs:'55%',fontWeight:'800'}}}>Back to Home</Button>
        </center>




        
        </Container>
        
        </>
    )
}

export default Contact