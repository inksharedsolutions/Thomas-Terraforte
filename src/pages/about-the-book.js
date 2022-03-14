import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"
import Book1 from '../../static/book/book.png'
import Book2 from '../../static/book/book1.png'
import { Helmet } from "react-helmet"

const ATB = (props) => {


    const slug = (props.location.href);

    const disqusConfig = {
        shortname: 'thomas-terraforte',
        config: { identifier: 12, slug }
    }


    return (
        <>
            <Layout>
                <Helmet title="About the Book | Thomas Terraforte" />
                <Nav pathExt={props.path} />

                <Banner
                    spanFirst={`About The`}
                    contextHeading={`Book`}
                />

                <main className="wrapperMain">
                    <div
                        className="container"
                        id="book-containers" >

                        <BookInfo
                            data={{
                                title: `Seven Islands of the Fog`,
                                spanTitle: '',
                                imgSrc: Book1,
                                id: 'the_gifted_one',
                                content:
                                    `
                                    A war may be coming. Six islands search for the famed seventh island for advantage, for the future, for control. Winged people, on a giant bird, are out for peace. A submarine captain explores the depths for treasure. Magic, faith, and love drive the many colorful characters of the seven islands. Humanoid cats and dragon men accompany a host of fantastic creatures.
                                    Is war inevitable? Only time will tell what the seventh island holds and what the price of war is for the many people of this fantastic land.
                                    Come join the fun and mystery when the fight for the future breaks out in the seven islands of the fog.
                                    `,
                                ebooks: {
                                    stratton: '',
                                    barnes: '',
                                    amazon: 'https://www.amazon.com/Seven-Islands-Fog-Thomas-Terraforte-ebook/dp/B08Q6QJWTF/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1608675204&sr=8-1',
                                },
                                paperback: {
                                    amazon: '',
                                    barnes: 'https://www.barnesandnoble.com/w/seven-islands-of-the-fog-thomas-terraforte/1121892486?ean=9781648952920',
                                    booksamillion: 'https://www.booksamillion.com/p/Seven-Islands-Fog/Thomas-Terraforte/9781648952920?id=8158356429268',
                                },
                            }}
                        />

                            <BookInfo
                            data={{
                                title: `Human Angels`,
                                spanTitle: 'A Human Story',
                                imgSrc: Book2,
                                id: 'the_gifted_one',
                                content:
                                    `
                                    Four high school seniors search for a project to satisfy their school service requirement. What they find are powers beyond compare. An offer by a stranger leads them to rediscover the world as Human Angels. The journey may be supernatural, but the decisions are real. If they can endure, their friendship, coupled with their new powers, will lead them to uncover what adulthood and dedication truly mean.
                                    `,
                                ebooks: {
                                    stratton: '',
                                    barnes: 'https://www.barnesandnoble.com/w/human-angels-thomas-terraforte/1140316545?ean=9781648955655',
                                    amazon: 'https://www.amazon.com/Human-Angels-Story-Thomas-Terraforte-ebook/dp/B09HXYQ6F6/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1634323651&sr=8-1',
                                },
                                paperback: {
                                    amazon: 'https://www.amazon.com/Human-Angels-Story-Thomas-Terraforte/dp/1648955649/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1634323651&sr=8-1',
                                    barnes: 'https://www.barnesandnoble.com/w/human-angels-thomas-terraforte/1140316545?ean=9781648955648',
                                    booksamillion: 'https://www.booksamillion.com/p/Human-Angels/Thomas-Terraforte/9781648955648?id=8158356429268',
                                },
                            }}
                        />
                        <div className="commentSection" >
                            <DiscussionEmbed {...disqusConfig} />
                        </div>
                    </div>
                </main>
            </Layout>
        </>
    )
}


export default ATB;