import React from 'react'

import Year from './Year';

const Story = () => {
    return (
        <div className="evolution">
            <div className="title">My Story so far</div>
            <div className="evolution-body">
                <div className="exp-circle"></div>
                <Year />
                <Year />
                <Year />
                <div className="exp-circle"></div>
            </div>
        </div>
    )
}

export default Story
