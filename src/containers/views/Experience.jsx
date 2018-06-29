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
                                    <div className="evolution-title">My Story so far</div>
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
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}
