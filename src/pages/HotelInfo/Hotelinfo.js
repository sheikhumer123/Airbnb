import React, { useState } from "react";
import "../HotelInfo/Hotelinfo.css";

//
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

//

import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import StarIcon from "@mui/icons-material/Star";
import AppsIcon from "@mui/icons-material/Apps";
//
import airbnb_logo from "../HotelInfo/Airbnb-logo.jpg";
import searchicon from "../HotelInfo/search-icon.png";

const Hotelinfo = () => {
  //
  const itemData = [
    {
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      title: "Breakfast",
      rows: 2,
      cols: 2,
    },
    {
      img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
      title: "Burger",
    },
    {
      img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
      title: "Camera",
    },
    {
      img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
      title: "Camera",
    },
    {
      img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
      title: "Camera",
    },
  ];
  //

  //
  function srcset(image, size, rows = 6, cols = 6) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }

  //

  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className="container">
        <div className="NavHeader">
          <div className="left-nav">
            <img className="logo" src={airbnb_logo} />
          </div>
          <div className="center-nav">
            <div className="SearchFilter">
              <p>Start your Search</p>
              <img className="SearchIcon" src={searchicon} />
            </div>
          </div>
          <div className="right-nav">
            <button className="HomeButton">Airbnb your home</button>
            <i className="language">
              <LanguageIcon />
            </i>
            <div onClick={handleClick} className="navMenu">
              <MenuIcon
                sx={{
                  fontSize: 22,
                }}
              />
              <AccountCircleIcon
                sx={{
                  fontSize: 32,
                }}
              />
            </div>
          </div>
          <div className="expandedArea"></div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-12 mt-4">
              <h4>Le Moulin Vert, 13th century mill & private lake</h4>
              <div className="d-flex links">
                <i>
                  <StarIcon />
                </i>
                <p>New</p> <a href="">Varen,</a>
                <a href="">Occitaine,</a>
                <a href="">France</a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <ImageList
                className="mt-5 ImageGallery"
                variant="quilted"
                cols={4}
                rowHeight={250}
                gap={8}
              >
                {itemData.map((item) => (
                  <ImageListItem
                    key={item.img}
                    cols={item.cols || 1}
                    rows={item.rows || 1}
                  >
                    <img
                      {...srcset(item.img, 121, item.rows, item.cols)}
                      alt={item.title}
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
              <button className="btn btn_Show_ALL_Pics">
                <AppsIcon /> Show All Photos
              </button>
            </div>
          </div>
        </div>
      </div>

      <React.Fragment>
        <Box
          sx={{ display: "flex", alignItems: "center", textAlign: "center" }}
        >
          <Tooltip title="Account settings">
            <IconButton
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            ></IconButton>
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
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 20,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem>Sign Up</MenuItem>
          <MenuItem>LogIn</MenuItem>
          <Divider />
          <MenuItem>Airbnb your Home</MenuItem>
          <MenuItem>Host an experience</MenuItem>
          <MenuItem>Help</MenuItem>
        </Menu>
      </React.Fragment>
    </>
  );
};

export default Hotelinfo;
