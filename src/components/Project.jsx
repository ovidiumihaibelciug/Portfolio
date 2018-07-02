import React from 'react'

const Project = ({ project, children }) => {
    const { id, title, text, tags, url, code, image } = project;
    return (
        <div className="project">
            <div class="layer"></div>
            <div className="pattern top"></div>
            <div className="pattern right"></div>
            <div className="project-leftside">
                <div className="project-id"> {id < 9 ? "0" : ""}{id}</div>
                <div className="project-title">{title}</div>
                <div className="project-text">{text}</div>
                <div className="project-tags">
                    {
                        tags.map(tag => <div className="project-tag">{tag}</div>)
                    }
                </div>
                <div className="project-more">
                    <div className="see_code">
                        <i className="fa fa-code"></i>
                        &nbsp;&nbsp; <span>Code</span>
                    </div>
                    <div className="see_url">
                        <i className="fa fa-eye"></i>
                        &nbsp;&nbsp; <span>Site</span>
                    </div>
                </div>
            </div>
            <div className="project-rightside">
                <div className="project-image"></div>
                {children}
            </div>
        </div>
    )
}

export default Project
