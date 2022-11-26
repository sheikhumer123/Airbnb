import React,{useState} from 'react'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';




import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Box from '@mui/material/Box';



import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';


import Tooltip from '@mui/material/Tooltip';


import airbnb_logo from '../nav-top/Airbnb-logo.jpg'
import searchicon from '../nav-top/search-icon.png'

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import TuneIcon from '@mui/icons-material/Tune';

import LanguageIcon from '@mui/icons-material/Language';

import '../nav-top/top-nav.css'


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function TopNav() {


  
    const [modal, setmodal] = React.useState(false);
  
    const handleClickOpen = () => {
      setmodal(true);
    };
  
    const handleCloseModal = () => {
      setmodal(false);
    };


  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 20
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 14
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 8
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3
    }
  };
 

  return (
    <>
    <div className='container-fluid'>
    <div className='NavHeader'>
      <div className='left-nav'> 
      <img className='logo' src={airbnb_logo}/>
      </div>
      <div className='center-nav'>
        <div  className='SearchFilter'>
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
  <div className='container-fluid' >
  <div className='row'>
    <div className='col-sm-12 col-md-10 col-lg-11 col-xl-11'
    >   <Carousel responsive={responsive}>

  <div className='carusol_filter_item'>
    <i>
    <LanguageIcon/>
    </i>
    <p>Park</p>
  </div>
  <div className='carusol_filter_item'>
    <i>
    <LanguageIcon/>
    </i>
    <p>Park</p>
  </div>
  <div className='carusol_filter_item'>
    <i>
    <LanguageIcon/>
    </i>
    <p>Park</p>
  </div>
  <div className='carusol_filter_item'>
    <i>
    <LanguageIcon/>
    </i>
    <p>Park</p>
  </div>
  <div className='carusol_filter_item'>
    <i>
    <LanguageIcon/>
    </i>
    <p>Park</p>
  </div>
  <div className='carusol_filter_item'>
    <i>
    <LanguageIcon/>
    </i>
    <p>Park</p>
  </div>
  <div className='carusol_filter_item'>
    <i>
    <LanguageIcon/>
    </i>
    <p>Park</p>
  </div>
  <div className='carusol_filter_item'>
    <i>
    <LanguageIcon/>
    </i>
    <p>Park</p>
  </div>
  <div className='carusol_filter_item'>
    <i>
    <LanguageIcon/>
    </i>
    <p>Park</p>
  </div>
  <div className='carusol_filter_item'>
    <i>
    <LanguageIcon/>
    </i>
    <p>Park</p>
  </div>
  <div className='carusol_filter_item'>
    <i>
    <LanguageIcon/>
    </i>
    <p>Park</p>
  </div>
  <div className='carusol_filter_item'>
    <i>
    <LanguageIcon/>
    </i>
    <p>Park</p>
  </div>
  <div className='carusol_filter_item'>
    <i>
    <LanguageIcon/>
    </i>
    <p>Park</p>
  </div>
  <div className='carusol_filter_item'>
    <i>
    <LanguageIcon/>
    </i>
    <p>Park</p>
  </div>
  <div className='carusol_filter_item'>
    <i>
    <LanguageIcon/>
    </i>
    <p>Park</p>
  </div>
  <div className='carusol_filter_item'>
    <i>
    <LanguageIcon/>
    </i>
    <p>Park</p>
  </div>
  <div className='carusol_filter_item'>
    <i>
    <LanguageIcon/>
    </i>
    <p>Park</p>
  </div>
  <div className='carusol_filter_item'>
    <i>
    <LanguageIcon/>
    </i>
    <p>Park</p>
  </div>
  <div className='carusol_filter_item'>
    <i>
    <LanguageIcon/>
    </i>
    <p>Park</p>
  </div>
  <div className='carusol_filter_item'>
    <i>
    <LanguageIcon/>
    </i>
    <p>Park</p>
  </div>
  <div className='carusol_filter_item'>
    <i>
    <LanguageIcon/>
    </i>
    <p>Park</p>
  </div>
  <div className='carusol_filter_item'>
    <i>
    <LanguageIcon/>
    </i>
    <p>Park</p>
  </div>
  <div className='carusol_filter_item'>
    <i>
    <LanguageIcon/>
    </i>
    <p>Park</p>
  </div>



  </Carousel>
  </div>

  
<div className='col-sm-12 col-md-2 col-lg-1 col-xl-1'>
<div onClick={handleClickOpen} className='FilterMenu'>
  <i><TuneIcon/></i>
  <p>Filters</p>


</div>
</div>
</div>

   </div>
   <div>
   <Dialog
        open={modal}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseModal}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle   sx={{

          padding: '20px 10px',

        }} >   <div className='filterTop'>
            <i><CloseIcon sx={{
              fontSize: 20,
            }}/></i><h5>Filters</h5>
            
          </div>
          </DialogTitle>
        <DialogContent
        sx={{
          height: 800,
          padding: 0,
          width : 600,
          borderTop: '1px solid #EBEBEB;'
          
   
        }}>
          <DialogContentText id="alert-dialog-slide-description">
       
          <div className='container'>
            <div className='row'>
              <div className='col-12 mt-4 PriceRange'>
                <h5>Price Range</h5>
                <p>The average nightly price is $408</p>
                <div className='row'>
                  <div className='col-6 priceFormControl'>
                  <p>mix price</p>
                    <h6>$</h6>
                  <input type="number" className='form-control priceForm '/>
                  </div>
                  <div className='col-6 priceFormControl'>
                  <p>max price</p>
                    <h6>$</h6>
                  <input type="number" className='form-control priceForm'/>
                </div>
                </div>

              </div>
              <div className='col-12 mt-4 TypesOfPeople mt-5 '>
                <h5>Types of Place</h5>
               
                <div className='row'>
                  <div className='col-6 '>
                  <div class="form-check-inline">
                 <label class="form-check-label">
                  <input type="checkbox" class="form-check-input" value=""/>Entire place
                  </label>
                   </div>
                  </div>
                  <div className='col-6 '>
                  <div class="form-check-inline">
                 <label class="form-check-label">
                  <input type="checkbox" class="form-check-input" value=""/>Private room
                 </label>
                  </div>
                </div>
                </div>
                <div className='row'>
                  <div className='col-12 '>
                  <div class="form-check-inline">
                 <label class="form-check-label">
                  <input type="checkbox" class="form-check-input" value=""/>Entire place
                  </label>
                   </div>
                  </div>
           
                </div>

              </div>
            </div>        
          </div>
          

          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose}>Agree</Button>
        </DialogActions>
      </Dialog>
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


