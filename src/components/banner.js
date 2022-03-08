import React, { useEffect, useRef } from 'react'
import { Link } from 'gatsby'
import ImgBanner from '../../static/book/book.png'
import ImgBanner1 from '../../static/book/book1.png'
// import Slider from 'react-slick'
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";


const Banner = () => {

    const elemBanner = useRef(null);

    useEffect(() => {

    });

    // const settings = {
    //     dots: true,
    //     infinite: false,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1
    //   };

    return (
        <>
            <section className="banner-section">        
                <div className="grid-two-layout-col">
                    <div className="wrapper-bg-left">
                        <div className="left-col">
                            <div className="banner-content-wrapper">
                                <h1>
                                    <span className="first-block">
                                        <span id="color-o">
                                        Seven Islands of the
                                        </span>
                                    </span>

                                    <span className="second-block">
                                        <span>
                                            Fog
                                        </span>
                                    </span>
                                </h1>
                                <p>
                                The fog rolls in and whisks you away into a world of fantastic creatures in an amazing journey. Join a group of winged emissaries as they head off to stop a war and join an underwater submariner in search of magical artifacts. Along the way, you will meet dragon men, cat people, wizards, and sea creatures, as well as travel though the six islands of the fog. 
                                </p>

                                <div className="btn-container">
                                    <button className="btn-book">
                                        <Link to="/about-the-book">
                                            Read More
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                        <div className="wrapper-bg-right">
                             
                                <div className="right-col banner-img-col">
                                            <div >
                                                <img src={ImgBanner} alt="book" />
                                            </div>
                                    {/* <Slider {...settings}> 
                                            <div >
                                                <img src={ImgBanner} alt="book" />
                                            </div>
                                            <div className="img-banner-wrapper" ref={elemBanner}>
                                                <img src={ImgBanner1} alt="book1" />
                                            </div>
                                    </Slider> */}
                                </div>
                            
                        </div>
                </div>
            </section>
        </>
    )
}

export default Banner;