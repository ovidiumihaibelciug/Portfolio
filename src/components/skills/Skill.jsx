import React from 'react';

import SpecificSkill from './SpecificSkill';

const Skill = () => {
  return (
    <React.Fragment>
        <div className="flex-row">
            <div className="left-side">

                <div className="set-size charts-container">
                    <div className="pie-wrapper progress-95 style-2">
                        <span className="label">95<span className="smaller">%</span></span>
                        <div className="pie">
                            <div className="left-side half-circle"></div>
                            <div className="right-side half-circle"></div>
                        </div>
                        <div className="shadow"></div>
                    </div>
                </div>
                <div className="progress-section-text">HTML&CSS</div>
            </div>
            <div className="right-side">
               <SpecificSkill />
               <SpecificSkill />
               <SpecificSkill />
               <SpecificSkill />
            </div>
        </div>
    </React.Fragment>
  )
}

export default Skill
