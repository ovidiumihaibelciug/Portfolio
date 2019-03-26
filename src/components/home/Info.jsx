import React from 'react'
import { Link } from "react-router-dom";

const Info = () => {
    return (
        <React.Fragment>
            <div className="text-name">
                Hello,<br /> I'm <span className="text-username">Ovi</span>diu-Mihai Belciug,<br /> Web Developer.
            </div>
            <div className="text-title">
                React / Next.js / GraphQL
            </div>
            <div className="contact-btn">
                <Link to="/contact">Contact me</Link>
            </div>
        </React.Fragment>
    )
}

export default Info
