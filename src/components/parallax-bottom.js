import React from 'react'
import {Link} from 'gatsby'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const ParallaxBottom = () => {


    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        adaptiveHeight: true,
        infinite: true,
    }

    return (
        <>
            <section className="parallax-bottom">
                
                    <div className="flex-container">
                    <div className="parallax-testimonial">
                        {/* <h2>Testimonials</h2>
                        <h3>"True knowledge comes from observing life in a way nobody ever has."</h3> */}
                                {/* <div className="parallax-item">
                                    <h1>
                                    "This stream-of-consciousness fantasy calls upon the reader to pay careful attention to the ultimate goals of each of the numerous characters."
                                    <div className="a-button"><a href="https://www.theusreview.com/reviews-1/Seven-Islands-of-the-Fog-by-Thomas-Terraforte.html#.YkNvtudByUk" target="_blank">Read more</a></div> 
                                        <span className="italic-tag span-verse">
                                        Heather Brooks
                                        </span>
                                    </h1>
                                </div> */}
                                
                                {/* <div className="parallax-item">
                                    <h1>
                                    "This stream-of-consciousness fantasy calls upon the reader to pay careful attention to the ultimate goals of each of the numerous characters."
                                    <div className="a-button"><a href="https://www.theusreview.com/reviews-1/Seven-Islands-of-the-Fog-by-Thomas-Terraforte.html#.YkNvtudByUk" target="_blank">Read more</a></div> 
                                        <span className="italic-tag span-verse">
                                        The US Review of Books
                                        </span>
                                    </h1>
                                
                                </div> */}
                    </div>
                </div>
            </section>
            

        </>
    )
}

export default ParallaxBottom