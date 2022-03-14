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
                                Thomas Terraforte academic memories were ones of awe and overwhelm. The first subject he gained was proficiency at was Math. Growing up in Yonkers, NY, math was a practical skill which differentiated his money from their money. He was a latch key kid and when I would come home from school; 
                            </p>

                            <p>
                                He did chores and searched for free time distraction. His parents bought a computer, so, He found fun and imagination in 1980 programming. When he tried of the computer, he searched the house library. His parents had bought an entire series of mini classics and he read them all. Some like Dickens, and Robert Louis Stevenson several times. His favorite was Treasure Island.
                            </p>

                            <p>
                                He attended Catholic Elementary and High School. His freshman English Teacher worked on my vocabulary. His Junior Year English Teacher (Ms. Chesser) noticed his penchant for imaginative storytelling in her assignments. She invited him to be co-editor and chief of the school’s literary magazine where he fought for explicit love poetry. A notion far too easily dismissed by priests.
                            </p>

                            <p>
                                His SAT scores split down the middle Math/Comprehension. He made the decision to attend college at Georgia Tech and pursue Electrical Engineering. He struggled but never waivered from his scholastic goals. Still, in his free time, he would participate in Shakespeare Readings and Role Playing Games. When he graduated, he had a hard time finding a job. 
                            </p>
                            
                            <p>
                                His early jobs were a Hodge podge of technical and menial tasks. What made him want to write? His social life seemed to be a constant prodding toward the literary. Several women (who he will not mention) saw the writer in him before he did. After writing my first two novels, I reflected on the beautiful guiding hands who realized authorship would fill me with pride. It does.
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