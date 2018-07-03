import React from 'react'
import {Link} from 'react-router-dom'


const Year = ({ event, len }) => {
    const { id, year, text, icon } = event;
    console.log(event.length);
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
                        <Link to={'/contact'}>
                            <div className="icon">
                                <i className={"fa fa-" + icon}></i>
                            </div>
                        </Link>
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
                            <div className="icon">
                                <i className={"fa fa-" + icon}></i>
                            </div>
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
