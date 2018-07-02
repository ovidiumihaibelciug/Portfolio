import React from 'react'

import LOGO from "./LOGO.svg"

const Logo = () => {
    return (
        <React.Fragment>
            <div className="svg-container">
                <object>
                    <embed src={LOGO} width="100%" height="120%" />
                </object>
            </div>
            <div className="img-container hide"></div>
        </React.Fragment>
    )
}

export default Logo
