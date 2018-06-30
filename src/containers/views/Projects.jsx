import React, { Component, Fragment } from 'react';

import Navbar from '../../components/navbar/Navbar';

export default class Projects extends Component {

    render() {
        return (
            <Fragment>
                <div className="App Projects">
                    <div className="row">
                        <div className="sidebar">
                            <Navbar />
                        </div>
                        <div className="content">
                            <div className="container">
                                <div className="projects-list">
                                    <div className="project">
                                        <div className="project-leftside">
                                            <div className="project-id">05</div>
                                            <div className="project-title">Lorem, ipsum dolor.</div>
                                            <div className="project-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste minus corrupti, voluptate culpa magni tempore. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, qui. </div>
                                            <div className="project-tags">
                                                <div className="project-tag">PHP</div>
                                                <div className="project-tag">REACT</div>
                                                <div className="project-tag">LARAVEL</div>
                                            </div>
                                            <div className="project-more">asdasda</div>
                                        </div>
                                        <div className="project-rightside">
                                            <div className="project-image"></div>
                                            <div className="project-arrows">
                                                <div className="arrow-left">
                                                    <i className="fa fa-arrow-left"></i>
                                                </div>
                                                <div className="arrow-right">
                                                    <i className="fa fa-arrow-right"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}
