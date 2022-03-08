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
                <Helmet title="About the Author | Kirk Jordan" />
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
                                <h4>
                                    “Sounds a lot like God to me”.
                                </h4>

                                <span className="ata-span-fx">
                                    The God Particle, Chapter 11, Going Within.
                                </span>
                            </div>
                        </div>

                        <article className="article-section" id="author">
                            <div className="article-flex">
                                <div className="article-flex-item-left">
                                    <p>
                                        Kirk Frank Jordan was born in Greenville Pennsylvania April 11, 1965.  He graduated from Greenville High School in 1983, Fort Lewis College in Colorado in 1988.  From there he traveled to Australia for 2 years to help a couple friends develop some business ideas.  His return to America landed him in Boston Massachusetts installing equipment in a manufacturing facility for a season.  He then joined forces with B.F. Goodrich traveling the country from Florida, Wisconsin, to the Baja California for the Baja 1000.
                                    </p>

                                    <p>
                                        At the end of that contract he rested at his fathers’ home in Hadley Pennsylvania for the holidays and then set sail in the spring for Pat Wolfe Log Building School in Ontario Canada.  Back to Hadley to regroup and head south to Mississippi to spend the winter as a “reforestation technician”, a fancy term for a “pine setter”.  Back to Hadley for some r and r and then west to Missoula Montana where he would be employed by Custom Log Homes for a spell.
                                    </p>
                                    <p>
                                        Pat Wolfe’s log school carried some weight and Kirk soon found himself in Maupin Oregon working for Oregon Log Homes.  Oregon Log Homes landed a big contract with Disneyland in Florida to do the log work for “Fort Wilderness Lodge”.  Once that contract was complete, he returned to Pennsylvania to re-tool and head to Alaska where he was petitioned to build a cabin north of the Arctic Circle in the wilderness on the edge of Lake Chandlar.  Working on the Kenai Peninsula and Juneau, he would return to Hadley to catch his breath before heading to Utah where his chainsaw was requested once again.
                                    </p>

                                </div>
                                <div className="article-flex-item-right">
                                    <p>
                                        In 1996 he married a kindergarten teacher while simultaneously buying a home and property and then heading to Delaware to build another log home.  One more log home in Illinois was enough experience to settle him down in Hadley.
                                        From there he would start “Jordan Log Homes” and build log homes and cabins until God would assign him to be fishers of men.   As a good gesture, not recognizing his need for a Savior, Kirk would attend the church he was raised in as a youngster, First Presbyterian Church Greenville Pa.
                                    </p>
                                    <p>
                                        After 4 Sundays there the pastor was called to Michigan and Kirk was invited to Hillside Presbyterian Church by friends.  There he would become a member and elder until his call to Hadley Presbyterian Church where he would be
                                        mentored by the Rev. Dr. VanDyne.  “Chuck” recognizing the divinity in the appointment would put Kirk in the game, asking him to preach on occasion and then regularly during the Sunrise Service for Easter.  Compelled by Chucks
                                        passing on December 25, 2009 Kirk would enroll in classes at the Dubuque Theological Seminary.  Also attending classes at Thiel College and Pittsburgh Theological Seminary Kirk would continue to build while simultaneously “fill
                                        in” in pulpits around the area.
                                    </p>
                                    <p>
                                        On such an occasion he would find himself at North Sandy Presbyterian Church as a “guest” speaker.  Therein would the next invitation come to fill their pulpit and by God’s grace he would remain there
                                        until 2020.  Of that year, on “Good Friday” God’s spirit would compel Kirk too fast for the first time in his life and on his birthday would begin writing his first book. In August of 2019 Kirk would travel to Alaska’s Chichagof Island
                                        to preach the gospel in the little village of Hoonah. Transformed by the Alaska trip and upon his return to North Sandy at the church’s monthly meeting in October providence would bid Kirk to ask the elders to begin the search for his replacement.
                                        Today, from his country home in northwestern Pennsylvania Kirk continues to prepare weekly sermons, all the while working on his next book.  Rejoice always, pray without ceasing, and in everything, give thanks.
                                    </p>
                                </div>
                            </div>
                            {/* </Slider> */}
                            <p>
                                <span className="author-name">
                                    <span className="author-span-ft">Author |  Writer </span>
                                    Kirk Jordan
                                </span>
                            </p>
                        </article>

                        <article  className="article-section-android">
                            <p>
                                Kirk Frank Jordan was born in Greenville Pennsylvania April 11, 1965.  He graduated from Greenville High School in 1983, Fort Lewis College in Colorado in 1988.  From there he traveled to Australia for 2 years to help a couple friends develop some business ideas.  His return to America landed him in Boston Massachusetts installing equipment in a manufacturing facility for a season.  He then joined forces with B.F. Goodrich traveling the country from Florida, Wisconsin, to the Baja California for the Baja 1000.
                            </p>

                            <p>
                                At the end of that contract he rested at his fathers’ home in Hadley Pennsylvania for the holidays and then set sail in the spring for Pat Wolfe Log Building School in Ontario Canada.  Back to Hadley to regroup and head south to Mississippi to spend the winter as a “reforestation technician”, a fancy term for a “pine setter”.  Back to Hadley for some r and r and then west to Missoula Montana where he would be employed by Custom Log Homes for a spell.
                            </p>
                            <p>
                                Pat Wolfe’s log school carried some weight and Kirk soon found himself in Maupin Oregon working for Oregon Log Homes.  Oregon Log Homes landed a big contract with Disneyland in Florida to do the log work for “Fort Wilderness Lodge”.  Once that contract was complete, he returned to Pennsylvania to re-tool and head to Alaska where he was petitioned to build a cabin north of the Arctic Circle in the wilderness on the edge of Lake Chandlar.  Working on the Kenai Peninsula and Juneau, he would return to Hadley to catch his breath before heading to Utah where his chainsaw was requested once again.
                            </p>
                            <p>
                                In 1996 he married a kindergarten teacher while simultaneously buying a home and property and then heading to Delaware to build another log home.  One more log home in Illinois was enough experience to settle him down in Hadley.
                                From there he would start “Jordan Log Homes” and build log homes and cabins until God would assign him to be fishers of men.   As a good gesture, not recognizing his need for a Savior, Kirk would attend the church he was raised in as a youngster, First Presbyterian Church Greenville Pa.
                            </p>
                            <p>
                                After 4 Sundays there the pastor was called to Michigan and Kirk was invited to Hillside Presbyterian Church by friends.  There he would become a member and elder until his call to Hadley Presbyterian Church where he would be
                                mentored by the Rev. Dr. VanDyne.  “Chuck” recognizing the divinity in the appointment would put Kirk in the game, asking him to preach on occasion and then regularly during the Sunrise Service for Easter.  Compelled by Chucks
                                passing on December 25, 2009 Kirk would enroll in classes at the Dubuque Theological Seminary.  Also attending classes at Thiel College and Pittsburgh Theological Seminary Kirk would continue to build while simultaneously “fill
                                in” in pulpits around the area.
                            </p>
                            <p>
                                On such an occasion he would find himself at North Sandy Presbyterian Church as a “guest” speaker.  Therein would the next invitation come to fill their pulpit and by God’s grace he would remain there
                                until 2020.  Of that year, on “Good Friday” God’s spirit would compel Kirk too fast for the first time in his life and on his birthday would begin writing his first book. In August of 2019 Kirk would travel to Alaska’s Chichagof Island
                                to preach the gospel in the little village of Hoonah. Transformed by the Alaska trip and upon his return to North Sandy at the church’s monthly meeting in October providence would bid Kirk to ask the elders to begin the search for his replacement.
                                Today, from his country home in northwestern Pennsylvania Kirk continues to prepare weekly sermons, all the while working on his next book.  Rejoice always, pray without ceasing, and in everything, give thanks.
                            </p>

                            <p>
                                <span className="author-name">
                                    <span className="author-span-ft">Author |  Writer </span>
                                    Kirk Jordan
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