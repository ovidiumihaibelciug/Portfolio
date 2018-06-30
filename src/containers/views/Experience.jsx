import React, { Component, Fragment } from 'react';

import Navbar from '../../components/navbar/Navbar';

export default class Experience extends Component {

    render() {
        return (
            <Fragment>
                <div className="App Experience">
                    <div className="row">
                        <div className="sidebar">
                            <Navbar />
                        </div>
                        <div className="content">
                            <div className="container">
                                <div className="evolution">
                                    <div className="title">My Story so far</div>
                                    <div className="evolution-body">
                                        <div className="exp-circle"></div>
                                        <div className="exp-period">
                                            <div className="icon">
                                                <i className="fa fa-code"></i>
                                            </div>
                                            <div className="exp-period-details">
                                                <div className="year">1999</div>
                                                <div className="text">
                                                    Lorem ipsum dolor sit.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="exp-circle"></div>
                                        <div className="exp-circle"></div>
                                        <div className="exp-circle"></div>
                                        <div className="exp-period">
                                            <div className="icon">
                                                <i className="fa fa-code"></i>
                                            </div>
                                            <div className="exp-period-details">
                                                <div className="year">1999</div>
                                                <div className="text">
                                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, culpa?
                                                </div>
                                            </div>
                                        </div>
                                        <div className="exp-circle"></div>
                                        <div className="exp-circle"></div>
                                        <div className="exp-circle"></div>
                                        <div className="exp-period">
                                            <div className="icon">
                                                <i className="fa fa-code"></i>
                                            </div>
                                            <div className="exp-period-details">
                                                <div className="year">1999</div>
                                                <div className="text">
                                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, culpa?
                                                </div>
                                            </div>
                                        </div>
                                        <div className="exp-circle"></div>
                                        <div className="exp-circle"></div>
                                        <div className="exp-circle"></div>
                                        <div className="exp-period">
                                            <div className="icon">
                                                <i className="fa fa-code"></i>
                                            </div>
                                            <div className="exp-period-details">
                                                <div className="year">1999</div>
                                                <div className="text">
                                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, culpa?
                                                </div>
                                            </div>
                                        </div>
                                        <div className="exp-circle"></div>
                                    </div>
                                </div>
                                <div className="education">
                                    <div className="title">Education</div>
                                    <div className="education-body">
                                        <div className="education-box">
                                            <div className="education-left-side"></div>
                                            <div className="education-right-side">
                                                <div className="e-title">
                                                    FII Practic React Training
                                                </div>
                                                <div className="e-content">
                                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, adipisci voluptates? Ipsam totam corporis consequatur laudantium expedita nobis? Ipsam, repellat.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="education-box">
                                            <div className="education-left-side"></div>
                                            <div className="education-right-side"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="awards">
                                    <div className="title">Awards</div>
                                    <div className="awards-body">
                                        <div className="awards-box">
                                            <div className="awards-left-side">
                                                <i class="fa fa-trophy"></i>
                                            </div>
                                            <div className="awards-right-side"></div>
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
