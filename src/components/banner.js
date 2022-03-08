import React, { useEffect, useRef } from 'react'
import { Link } from 'gatsby'
import ImgBanner from '../../static/book/book.png'

const Banner = () => {

    const elemBanner = useRef(null);

    useEffect(() => {

    });


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
                                            The Best
                                        </span>
                                    </span>

                                    <span className="second-block">
                                        <span>
                                            Thing
                                        </span>
                                    </span>
                                </h1>
                                <p>
                                    The Best Thing is partly my story but mostly about God's amazing grace. I've been reading and writing my whole life, and providence has compelled me far too long to write a book, so here we are. The book may be crude and raw, but outside Calvary's forgiveness, it's neither worth writing or reading.
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

                            <div className="img-banner-wrapper" ref={elemBanner}>
                                <img src={ImgBanner} alt="book" />
                            </div>

                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Banner;