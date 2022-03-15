import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import AuthorImg from '../../static/author/author.jpg'
import { Helmet } from "react-helmet"
const ATB = (props) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <>
            <Layout>
                <Helmet title="About the Author | Thomas Terraforte" />
                <Nav pathExt={props.path} />
                <Banner
                    spanFirst={`About The`}
                    contextHeading={`Author`} />


                <div className="container">
                    <section className="body-author-contents">

                        <div className="heading-quote">
                            <div className="author-image-container">
                                <img src={AuthorImg} alt="author-profile" />
                            </div>

                            <div className="heading-quote">
                                {/* <h4>
                                    “Sounds a lot like God to me”.
                                </h4>

                                <span className="ata-span-fx">
                                    The God Particle, Chapter 11, Going Within.
                                </span> */}
                            </div>
                        </div>

                        <article  className="article-section-android">
                            <p>
                                My earliest academic memories were ones of awe and overwhelm. The first subject I gained proficiency at was Math. Growing up in Yonkers, NY, math was a practical skill which differentiated my money from their money. 
                            </p>

                            <p>
                                I was a latch key kid and when I would come home from school; I did my chores and searched for free time distraction. My parents bought a computer, so, I found fun and imagination in 1980 programming. When I tired of the computer, I searched the house library. My parents had bought an entire series of mini classics. I read them all. Some like Dickens, and Robert Louis Stevenson several times. 
                            </p>

                            <p>
                                My favorite was Treasure Island. I attended Catholic Elementary and High School. My freshman English Teacher worked on my vocabulary. My Junior Year English Teacher (Ms. Chesser) noticed my penchant for imaginative storytelling in her assignments. She invited me to be co-editor and chief of the school’s literary magazine where I fought for explicit love poetry. 
                            </p>

                            <p>
                                A notion far too easily dismissed by priests. My SAT scores split down the middle Math/Comprehension. I made the decision to attend college at Georgia Tech and pursue Electrical Engineering. I struggled but never waivered from my scholastic goals. Still, in my free time, I would participate in Shakespeare Readings and Role Playing Games. When I graduated, I had a hard time finding a job. My early jobs were a Hodge podge of technical and menial tasks.  
                            </p>
                            
                            <p>
                                What made me want to write? My social life seemed to be a constant prodding toward the literary. Several women (who I will not mention) saw the writer in me before I did. After writing my first two novels, I reflected on the beautiful guiding hands who realized authorship would fill me with pride. It does. 
                            </p>

                            <p>
                                <span className="author-name">
                                    <span className="author-span-ft">Author |  Writer </span>
                                        Thomas Terraforte
                                </span>
                            </p>
                        </article>


                    </section>
                </div>

            </Layout>
        </>
    )
}


export default ATB;