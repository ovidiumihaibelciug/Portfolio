import React from 'react'
import {Link} from 'react-router-dom'

const EducationBox = ({item}) => {
    const {id, title, image, text, url} = item;
    return (
        <div className="education-box">
            <div className="education-left-side" style={{backgroundImage: `url(${image})`}}></div>
            <a href={url}>
                <div className="education-right-side">
                    <div className="e-title">{title}</div>
                    <div className="e-content">{text}</div>
                </div>
            </a>
        </div>
    )
}

export default EducationBox
