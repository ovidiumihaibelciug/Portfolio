import React from 'react'

const RellaxDivs = () => {
    return (
        <React.Fragment>
            <div className="rellax square square1 lg-blue1" style={{ transform: "rotate(45deg)" }} data-rellax-speed="-4"></div>
            <div className="rellax square square2 lg-blue1" style={{ transform: "rotate(45deg)" }} data-rellax-speed="-9"></div>
            <div className="rellax circle circle1 lg" data-rellax-speed="-2"></div>
            <div className="rellax circle circle3 md" data-rellax-speed="-4"></div>
            <div className="rellax circle circle4 md" data-rellax-speed="3"></div>
            <div className="rellax circle circle2" data-rellax-speed="-8"></div>
        </React.Fragment>
    )
}

export default RellaxDivs
