import React,{useEffect, useState} from 'react'
import {Link} from 'gatsby'
import AuthorImg from '../../static/author/author.jpg'

const UpperMain =()=>{

    const [stateUpper, statFunc] = useState(false);
    
    useEffect(() => {
        window.addEventListener('scroll', scrollEffect);
    });

    const scrollEffect = (e)=>{
        let axisY =window.scrollY;

        if(axisY > 500 ){
            statFunc(true);
        }
    }   
    
    
    return  (
        <>
            <section className={`upper-main upper-style`}>
                <div className="container-gt">

                    <div className="grid-two-columns" >
                        <div className={`img-wrapper-form ${stateUpper && 'image-author'}`}>
                            <img src={AuthorImg} alt="author-profile"/>
                        </div>

                        <div classNames="content-img-wrapper">
                            <section className="content-wrapper-body">
                                <h1>Kirk Jordan</h1>
                                <span>Author & Writer</span>

                                <p>
                                        Kirk Frank Jordan was born in Greenville Pennsylvania April 11, 1965.  He graduated from Greenville High School in 1983, Fort Lewis College in Colorado in 1988.  From there he traveled to Australia for 2 years to help a couple friends develop some business ideas.  His return to America landed him in Boston Massachusetts installing equipment in a manufacturing facility for a season.  
                                </p>

                                <button>
                                    <Link to="/about-the-author">
                                        Read More
                                    </Link>
                                </button>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default UpperMain