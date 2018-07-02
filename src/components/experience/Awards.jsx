import React from 'react'

import AwardBox from './AwardBox';

const Awards = () => {
    return (
        <div className="awards">
            <div className="title">Awards</div>
            <div className="awards-body">
                <AwardBox />
                <AwardBox />
                <AwardBox />
            </div>
        </div>
    )
}

export default Awards
