import React, { useState } from 'react'
import rndColor from 'randomcolor'
import fontColor from 'font-color-contrast'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faSyncAlt } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/style.css'

const Content = (props) => {
    const [rnd, setRnd] = useState(rndColor())
    const newQuoteHandler = () => {
        props.rerender(Math.floor(Math.random() * 10000)) 
        setRnd(rndColor())
    }
    return (
        <React.Fragment>
            <div className="main-container">
                <div className="bg-img" style={{backgroundColor: `${rnd}`, height: '100vh'}}></div>
                <div className="icon-c" style={{color: `${fontColor(rnd) === '#000000' ? 'rgba(0, 0, 0, 0.55)' : 'rgba(255, 255, 255, 0.55)'}`}}>
                    <FontAwesomeIcon icon={faQuoteLeft} />
                </div>
                <div className="main" style={{color: `${fontColor(rnd)}`}}>
                    <figure>
                        <blockquote>
                            <q>{props.data.data.content}</q>
                        </blockquote>
                        <figcaption>
                            &mdash;  {props.data.data.author}
                        </figcaption>
                    </figure>
                </div>
                <button className="new-btn" onClick={newQuoteHandler} style={{backgroundColor: `rgba(0, 0, 0, 0.5)`, color: `white`}}>
                    <FontAwesomeIcon icon={faSyncAlt} />
                </button>
            </div>
        </React.Fragment>
    )
}

export default Content