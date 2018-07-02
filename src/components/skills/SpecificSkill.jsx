import React from 'react'

const SpecificSkill = () => {
  return (
    <div className="skill">
        <div className="skill-label">
            <div className="skill-name">ABCD</div>
            <div className="skill-procent">75%</div>
        </div>
        <div className="skill-bar">
            <div className="skill-progress" style={{ width: "75%" }}></div>
        </div>
    </div>
  )
}

export default SpecificSkill
