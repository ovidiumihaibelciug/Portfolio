import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';

const SpecificSkill = ({ skill }) => {
    const { name, procent } = skill;
    return (
        <ScrollAnimation animateIn="fadeIn">
            <div className="skill">
                <div className="skill-label">
                    <div className="skill-name">{name}</div>
                    <div className="skill-procent">{procent}%</div>
                </div>
                <div className="skill-bar">
                    <div className="skill-progress" style={{ width: procent + "%" }}></div>
                </div>
            </div>
        </ScrollAnimation>
    )
}

export default SpecificSkill
