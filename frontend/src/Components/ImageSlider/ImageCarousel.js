
import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


import image1 from '../../images/katherine-conrad-QL3SaEwio_k-unsplash.jpg'
import image2 from '../../images/thebrewery.jpg';
import image3 from '../../images/OBC+grand+opening--+Leigh+Lofgren--+45.jpg'
import image4 from '../../images/right-proper-LEAD.jpg'
import image5 from '../../images/img1.jpg'
import image6 from '../../images/image2.jpg'
import image7 from '../../images/IMG_5085.webp'
import './ImageCarousel.css'
function ImgCarousel(){
    return(
        <div>
             <Carousel className='main-slide' autoPlay emulateTouch infiniteLoop >
                <div>
                    <img src={image1} height="500px" width="3px"/>
                </div>
                <div>
                    <img src={image2} height="500px" width="200px" />
                </div>
                <div>
                    <img src={image3} height="500px" width="200px"  />
                </div>
            </Carousel>
        </div>
    )
}
export default ImgCarousel;