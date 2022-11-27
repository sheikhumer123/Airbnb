import React, { useState } from "react";
import "../indexContentArea/IndexContextArea.css";

import StarRateIcon from "@mui/icons-material/StarRate";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
//images
import hotelimg1 from "../indexContentArea/2.jpg";
import hotelimg2 from "../indexContentArea/3.jpg";

//
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

//images

function IndexContentArea() {
  //

  //
  const [clicks, setClicks] = useState([]);
  //add the id to the array of clicked items if it doesn't exist but if it does exist remove it. this makes sure that double clicking on an item brings it back to normal
  const handleIconClick = (id) => {
    let result = clicks.includes(id)
      ? clicks.filter((click) => click != id)
      : [...clicks, id];
    setClicks(result);
    // change <AddCircleIcon /> to <BlockIcon /> at "id"
  };

  return (
    <>
      <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12">
        <div className="HotelCard">
          <i className="LikeButton" onClick={() => handleIconClick(101)}>
            {clicks.includes(101) ? (
              <FavoriteIcon
                sx={{
                  fontSize: "25px",
                  color: "red",
                }}
              />
            ) : (
              <FavoriteBorderIcon
                sx={{
                  fontSize: "25px",
                  color: "white",
                }}
              />
            )}
          </i>

          <div className="HotelCardCarosuol">
            <Carousel showThumbs="false">
              <div>
                <img src={hotelimg1} />
              </div>
              <div>
                <img src={hotelimg2} />
              </div>
            </Carousel>
          </div>

          <div className="d-flex justify-content-between mt-1">
            <h6>
              <b>Emporio Greece</b>
            </h6>
            <p
              style={{
                fontSize: "13px",
              }}
              className="d-flex"
            >
              <StarRateIcon sx={{ fontSize: 15, margin: "2px 2px 0px 0px" }} />
              4.97
            </p>
          </div>
          <div className="d-flex flex-column HotelCardInfo ">
            <p style={{ fontSize: 14 }}>4,311 kilometers away</p>
            <p style={{ fontSize: 14 }}>Mar 29 - Apr 5</p>
            <div className="d-flex">
              <p style={{ color: "black" }}>
                <b>$295</b>
              </p>
              <p style={{ marginLeft: 3, color: "black" }}>night</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default IndexContentArea;
