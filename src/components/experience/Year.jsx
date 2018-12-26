import React from 'react'
import {Link} from 'react-router-dom'

import ScrollAnimation from 'react-animate-on-scroll';

const Year = ({ event, len }) => {
    const { id, year, text, icon } = event;

    return (
        <React.Fragment>
            {
                id != 1 && [
                    <div className="exp-circle"></div>,
                    <div className="exp-circle"></div>,
                    <div className="exp-circle"></div>
                ]
            }
            {
                id === len ? (
                    
                    <div className="exp-period period-blue">
                    <ScrollAnimation animateIn="fadeIn" delay={id*150}>
                        <Link to={'/contact'}>
                            <div className="icon">
                                <i className={"fa fa-" + icon}></i>
                            </div>
                        </Link>
                    </ScrollAnimation>
                            <div className="exp-period-details">
                                <Link to={'/contact'}>
                                    <div className="year">{year}</div>
                                    <div className="text">

                                        {text}
                                    </div>
                                </Link>
                            </div>
                    </div>
                ) : (
                    <div className="exp-period">
                            <ScrollAnimation animateIn="fadeIn" delay={id*150}>
                            <div className="icon">
                                <i className={"fa fa-" + icon}></i>
                            </div>
                            </ScrollAnimation>
                            <div className="exp-period-details">
                                <div className="year">{year}</div>
                                <div className="text">

                                    {text}
                                </div>
                            </div>
                        </div>
                )
            }
                 
        </React.Fragment>
    )
}
            
export default Year
