import {React} from "react";
import Navbar from "./Navbar";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import menu_icon from '../../src/Images/menu.png';
import { useState } from "react";
import '../App.css';
import '../Components/style.css';
// import {useHistory} from 'react-router-dom';



function Header_Component(navigation){
const goHome =((props)=>{
  // const history = useHistory();
  // console.log(history);
  
})

const [anchorEl, setAnchorEl] = useState(null);

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



    return(
    <>
    <div>
      <header>
      <Navbar/>
      <div  className='HiddenNavbar'>
        <Button onClick={handleClick} id='menu_btn' style={{background:'none',outline:'none',border:'none'}}> <img  width={'32px'} src={menu_icon}/>
        <div className='ui_menu'>
        <Menu
        sx={{marginTop:{xs:3,sm:2,display:'flex',justifyContent:'center',alignItems:'center'}}}
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        
      
        
      >
        <MenuItem sx={{width:{sm:280,xs:390}}} onClick={handleClose}>Home</MenuItem>
        <MenuItem sx={{width:{sm:280,xs:390},}} onClick={handleClose}>About</MenuItem>
        <MenuItem sx={{width:{sm:280,xs:390},}} onClick={handleClose}>Menu</MenuItem>
        <MenuItem sx={{width:{sm:280,xs:390},}} onClick={handleClose}>Offers</MenuItem>
        <MenuItem sx={{width:{sm:280,xs:390},}} onClick={handleClose}>Gallery</MenuItem>
       
      </Menu>
         </div>
         </Button>
        <div className='hidden_nav_list'>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Offers</li>
          <li>Gallery</li>
          <li>Contact</li>
          <li>Blog</li>

        </ul>
        
        </div>
      </div>
      <div id='header'>
        <div id='header_box_1'></div>
        <div id='header_box_2'>
        <Typography sx={{fontSize:{lg:'2.5em',md:'2.5em',sm:'1.5em',xs:'1.5px'}}} className='heading' variant='h2' component='h1'>Contact Us for <br/> Best Breakfasr </Typography>
        <Typography component="p"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione enim velit quisquam dolorum possimus soluta minus temporibus atque,
         alias molestias consectetur ullam porro, eligendi numquam optin consectetur.</Typography>
         <Button onClick={goHome}>
          <Typography fontWeight={'800'}>Contact Us</Typography>
         </Button>
        </div>

    </div>
    </header>
    </div> 
   </>
    )
}

export default Header_Component