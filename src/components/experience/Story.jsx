import React from 'react'

import Year from './Year';

const Story = ({ story }) => {
    return (
        <div className="evolution">
            <div className="title">My Story so far</div>
            <div className="evolution-body">
                <div className="exp-circle"></div>
                {
                    story.map(event => {
                        return <Year event={event} len={story.length} />
                    })
                }
                <div className="exp-circle"></div>
            </div>
        </div>
    )
}

export default Story
