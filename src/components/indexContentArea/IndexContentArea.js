

import React from 'react'
import '../indexContentArea/IndexContextArea.css'

import StarRateIcon from '@mui/icons-material/StarRate';

//images
import hotelimg1 from '../indexContentArea/2.jpg'
import hotelimg2 from '../indexContentArea/3.jpg'


//images

function IndexContentArea() {


  
  return (
    <>
    
 
   
     
  <div className='col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12'>
  <div className='HotelCard'>
        <div className='HotelCardCarosuol'>
        <div  id="carouselExampleIndicators" class="carousel slide carusoulSider" data-ride="false">
      <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block carosuolImage" src={hotelimg1} alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block carosuolImage" src={hotelimg2} alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block carosuolImage" src={hotelimg1}alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

                </div>

             <div className='d-flex justify-content-between mt-1'>
               <h6><b>Emporio Greece</b></h6>
             <p className='d-flex'><StarRateIcon />4.97</p>
             
             </div>
             <div className='d-flex flex-column HotelCardInfo '>
                <p style={{fontSize: 15}}>4,311 kilometers away</p>
                <p  style={{fontSize: 15}}>Mar 29 - Apr 5</p>
                <div className='d-flex'>
                    <p><b>$295</b></p>
                    <p style={{marginLeft: 3}}>night</p>

                </div>

             </div>
            </div>
  </div>


   
      




   </>
  )
}

export default IndexContentArea


