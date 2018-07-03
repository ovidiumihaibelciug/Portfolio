import React from 'react'

const AwardsBox = ({ item }) => {

    const {id, title, image, text, url} = item;

    return (
        <div className="awards-box">
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
        </div>
    )
}

export default AwardsBox
