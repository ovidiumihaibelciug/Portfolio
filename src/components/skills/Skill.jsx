import React from 'react';

import SpecificSkill from './SpecificSkill';
import ScrollAnimation from 'react-animate-on-scroll';

const Skill = ({ skill }) => {
    const {id, main, procent, specific} = skill;
    return (
        <React.Fragment>
                <div className="flex-row">
                        <div className="left-side">
                    <ScrollAnimation animateIn="rotateIn" animateOut="rotateOut">
                            <div className="set-size charts-container">
                                <div className="pie-wrapper progress-95 style-2">
                                    <span className="label">{procent}<span className="smaller">%</span></span>
                                    <div className="pie">
                                        <div className="left-side half-circle" style={{transform: `rotate(${(procent/100) * 360 + "deg"})`}}></div>
                                        <div className="right-side half-circle"></div>
                                    </div>
                                    <div className="shadow"></div>
                                </div>
                            </div>
                            <div className="progress-section-text">{main}</div>
                    </ScrollAnimation>
                        </div>

                    <div className="right-side">
                        {
                            specific.map(s => {
                                return <SpecificSkill key={s.id} skill={s} />;
                            })
                        }
                    </div>
                </div>
        </React.Fragment>
    )
}

export default Skill
