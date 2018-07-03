import React from 'react'
import {Link} from 'react-router-dom'

import ScrollAnimation from 'react-animate-on-scroll';

const EducationBox = ({item}) => {
    const {id, title, image, text, url} = item;
    return (
        <ScrollAnimation className="education-box" animateIn="fadeIn" animateOut="fadeOut">
            <div className="education-left-side" style={{backgroundImage: `url(${image})`}}></div>
            <a href={url}>
                <div className="education-right-side">
                    <div className="e-title">{title}</div>
                    <div className="e-content">{text}</div>
                </div>
            </a>
        </ScrollAnimation>

    )
}

export default EducationBox
