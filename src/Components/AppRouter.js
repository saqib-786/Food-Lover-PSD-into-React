import React from 'react';
import {BrowserRouter as Router,Route, Routes,} from "react-router-dom";
import Home from '../Screens/Home'
import Contact from '../Screens/Contact';
import Chat from './Chat';

class AppRouter extends React.Component{
    render(){
        return(
            <>
            <Router>
                <Routes>
                <Route  path='/Chat' element={<Chat/>}  />
                <Route  excat path='/' element={<Home/>}  />
                <Route path='/Contact' element={<Contact/>}/>

                </Routes>
            </Router>
            </>
        )
    }
}

export default AppRouter