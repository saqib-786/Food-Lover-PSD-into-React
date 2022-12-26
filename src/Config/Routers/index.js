import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Home from '../../Screens/Home';
function Routers(){
    return(
        <React.Fragment>
            <Routes>
                <Route excat path='/' element={<Home/>}  />
            </Routes>
        </React.Fragment>
    )
}

export default Routers