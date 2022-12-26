import React from "react";
import Header_Component from "../Components/Header";
import About from "../Components/AboutUs";
import Food from "../Components/Food";
import Gallery from "../Components/Gallery";
import Enjoy from "../Components/EnjoyFood";
import Menu from "../Components/Menu";
import BestMeal from "../Components/BestMeal";
import Footer from "../Components/Footer";
import { ThemeProvider } from '@mui/material/styles';
import theme from "../Components/Theme";

class Home extends React.Component{
    constructor(){
        super();
        this.state ={

        }
    }
    render(){
        
        return(
            <>
         <ThemeProvider theme={theme}>
         <Header_Component/>
            <About/>
            <Food/>
            <Gallery/>
            <Enjoy/>
            <Menu/>
            <BestMeal/>
            <Footer/>

         </ThemeProvider>

            </>
        )

    }
}

export default Home;