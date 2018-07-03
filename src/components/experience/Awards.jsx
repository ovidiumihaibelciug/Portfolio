import React from 'react'

import AwardBox from './AwardBox';

const Awards = ({ awards }) => {
    return (
        <div className="awards">
            <div className="title">Awards</div>
            <div className="awards-body">
                {
                    awards.map(item => {
                        return <AwardBox item={item} />
                    })
                }
            </div>
        </div>
    )
}

export default Awards
