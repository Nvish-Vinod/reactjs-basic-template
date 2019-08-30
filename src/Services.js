import React, { Component } from 'react'

import ReactDOM from 'react-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import img1 from './images/img1.png'; 
import img2 from './images/img2.png';
import img3 from './images/img3.png';
import textwimage from './images/textwimage.jpg';

        
const options = {             
    items: 2,
    nav: true,
    rewind: true,
    autoplay: true
};
          
class Services extends Component {                                            
 render()        
  {  
    return (
    <OwlCarousel
    className="owl-theme"
    loop  
    margin={10}        
    nav 
    options = {options}                   
    >
     <div className="item"><img src={img1} alt="image1"/></div>
     <div className="item"><img src={img2} alt="image2"/></div>
     <div className="item"><img src={img3} alt="image3"/></div>
     <div className="item"><img src={textwimage} alt="textwimage"/></div>
     <div className="item"><img src={img1} alt="image5"/></div>
</OwlCarousel>             
    )  
  }
}
                           
export default Services       