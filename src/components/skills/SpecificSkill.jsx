import React from 'react'

const SpecificSkill = ({ skill }) => {
    const { name, procent } = skill;
    return (
        <div className="skill">
            <div className="skill-label">
                <div className="skill-name">{name}</div>
                <div className="skill-procent">{procent}%</div>
            </div>
            <div className="skill-bar">
                <div className="skill-progress" style={{ width: procent + "%" }}></div>
            </div>
        </div>
    )
}

export default SpecificSkill
