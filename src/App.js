import React from 'react';
import Navbar from './Components/Navbar';
import image from './Images/Header Image.png';
import Menu_component from './Components/Menu';
import BestMeal from './Components/BestMeal';
import Footer from './Components/Footer';
import About from './Components/AboutUs';
import Food from './Components/Food';
import Gallery from './Components/Gallery';
import Enjoy from './Components/EnjoyFood';
import {Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import menu_icon from '../src/Images/menu.png';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AppRouter from './Components/AppRouter';


import './App.css'

function App(){

  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
     if(anchorEl == null){
     setAnchorEl(event.currentTarget);

     }else{
      setAnchorEl(null)
     }
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


//  const show_nav=(()=>{
//   if(visible == 'none'){
//     setVisible('block')
//   }else{
//     setVisible('none')
//   }
//  })


  return(
    <>
    <AppRouter/>
    </>
  )

}


export default App