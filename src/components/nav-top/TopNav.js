import React,{useState,useEffect} from 'react'

import Box from '@mui/material/Box';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';

import Tooltip from '@mui/material/Tooltip';


import airbnb_logo from '../nav-top/Airbnb-logo.jpg'
import searchicon from '../nav-top/search-icon.png'

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';

import LanguageIcon from '@mui/icons-material/Language';

import '../nav-top/top-nav.css'
function TopNav() {


  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

const expandSearch =(e)=>{


  
  }
 

  return (
    <>
    <div className='container-fluid'>
    <div className='NavHeader'>
      <div className='left-nav'> 
      <img className='logo' src={airbnb_logo}/>
      </div>
      <div className='center-nav'>
        <div onClick={expandSearch} className='SearchFilter'>
          <p>Anywhere</p>
          <p>Any week</p>
          <p className='p2'>Add guests
           
          </p>
          <img className='SearchIcon' src={searchicon}/>

        </div>

      </div>
      <div className='right-nav'>
      <button className='HomeButton'>Airbnb your home</button>
      <i className='language'>
      <LanguageIcon/>
      </i>
      <div  onClick={handleClick} className='navMenu'>
      <MenuIcon sx={{
      fontSize: 22,
      
      }}/>
      <AccountCircleIcon sx={{
      fontSize: 32,
      
      }}/>
    
      </div>
       

      </div>
    <div className='expandedArea'>

    </div>
    </div>
     <div>
    
   </div>

  




















   <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
       
        <Tooltip title="Account settings">
          <IconButton
      
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            width: 300,
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 20,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
           Sign Up
        </MenuItem>
        <MenuItem>
          LogIn
        </MenuItem>
        <Divider />
        <MenuItem>
       
         Airbnb your Home
        </MenuItem>
        <MenuItem>
     
    Host an experience
        </MenuItem>
        <MenuItem>
       
          Help
        </MenuItem>
      </Menu>
    </React.Fragment>
    </div>
   </>
  )
}

export default TopNav


