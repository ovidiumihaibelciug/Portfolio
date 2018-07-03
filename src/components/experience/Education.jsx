import React from 'react'
import EducationBox from './EducationBox';

const Education = ({ education }) => {
    return (
        <div className="education">
            <div className="title">Education</div>
            <div className="education-body">
                {
                    education.map(item => {
                        return <EducationBox item={item} />
                    })
                }
            </div>
        </div>
    )
}

export default Education
