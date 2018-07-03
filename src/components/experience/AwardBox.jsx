import React from 'react'

import ScrollAnimation from 'react-animate-on-scroll'

const AwardsBox = ({ item }) => {

    const {id, title, image, text, url} = item;

    return (
        <ScrollAnimation className="awards-box" animateIn="fadeIn" animateOut="fadeOut">
            <div className="awards-left-side" style={{backgroundImage: `url(${image})`}}>
                <i class="fa fa-trophy"></i>
            </div>
            <a href={url}>
                <div className="awards-right-side">
                    <div className="a-title">
                        {title}
                    </div>
                    <div className="a-content">
                        {text}
                    </div>
                </div>
            </a>
        </ScrollAnimation>
    )
}

export default AwardsBox
