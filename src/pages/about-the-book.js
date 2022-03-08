import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"
import Book1 from '../../static/book/book.png'
import { Helmet } from "react-helmet"

const ATB = (props) => {


    const slug = (props.location.href);

    const disqusConfig = {
        shortname: 'kirk-jordon',
        config: { identifier: 12, slug }
    }


    return (
        <>
            <Layout>
                <Helmet title="About the Book | Kirk Jordan" />
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
                                title: `The Best Thing`,
                                spanTitle: 'My Personal Journey to Know God',
                                imgSrc: Book1,
                                id: 'the_gifted_one',
                                content:
                                    `
                                    The Best Thing is partly my story but mostly about God's amazing grace. I've been reading and writing my whole life, and providence has compelled me far too long to write a book, so here we are. The book may be crude and raw, but outside Calvary's forgiveness, it's neither worth writing or reading. I honestly feel like the "least of all of these," not really gifted in any particular way, willing, though not particularly gifted. If I have a gift, it is in believing in the One that saved me, obedience to the One that called me. The Best Thing is meant to be driven, to stir you that you might exit the book transformed from your entrance. Don't leave the way you came. The book is designed to make you mad or get you excited, move you to sing your song, understand you are gifted, and share those gifts in a way that will make the world a better place. When I started the book, friends and family asked, "What is the book about?" God's amazing grace. It had to be His idea. Otherwise, it's just another book sitting on the shelf. It's in His hands. It is for His purpose and His glory. At the end of the day, when we do the math, consider the earth's spinning, rotating 23.5-degree axis, there is no other reasonable explanation for my testimony, my story, or yours save God's amazing grace. This book is for all people everywhere. It covers the globe, all races, religions, colors, and geographical locations. There are people everywhere living in the bondage of thousands of years of unforgiveness. God nailed His Son to a cross that we might be forgiven and forgive one another. This book is a call to put down our arms, receive God's payment on Calvary's shore, take up our crosses, and love one another. Jesus is not a thing. In fact, He is many things, so we'll just leave you with The Best Thing and pray that you drive it and hear the call within its pages to sing your song.
                                    `,
                                ebooks: {
                                    stratton: '',
                                    barnes: 'https://www.barnesandnoble.com/w/the-best-thing-kirk-jordan/1139976648?ean=9781648954870',
                                    amazon: 'https://www.amazon.ca/Best-Thing-Kirk-Jordan-ebook/dp/B09C22HG3D/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1628695054&sr=1-1',
                                },
                                paperback: {
                                    amazon: 'https://www.amazon.ca/Best-Thing-Kirk-Jordan/dp/1648954863/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1628695054&sr=1-1',
                                    barnes: 'https://www.barnesandnoble.com/w/the-best-thing-kirk-jordan/1139976648?ean=9781648954863',
                                    booksamillion: 'https://www.booksamillion.com/p/Best-Thing/Kirk-Jordan/9781648954863?id=8158356429268',
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