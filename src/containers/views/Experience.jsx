import React, { Component, Fragment } from 'react';

import Navbar from '../../components/navbar/Navbar';
import Story from '../../components/experience/Story';
import Education from '../../components/experience/Education';
import Awards from '../../components/experience/Awards';

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
                                <Story />
                                <Education />
                                <Awards />
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}
