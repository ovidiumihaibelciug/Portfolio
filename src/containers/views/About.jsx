import React, { Component, Fragment } from 'react';

import Navbar from '../../components/navbar/Navbar';
import TypeAnimation from '../../components/TypeAnimation';
import Info from '../../components/about/Info';
import Image from '../../components/about/Image';

export default class About extends Component {
    render() {
        return (
            <Fragment>
                <div className="App About">

                    <div className="row">
                        <div className="sidebar">
                            <Navbar />
                        </div>
                        <div className="content">
                            <span className="box-design-about"></span>
                            <div className="container">
                                <div className="row">
                                    <TypeAnimation />
                                    <div className="col-md-6 main-about">
                                        <div className="animated flipInX content-home">
                                            <Info />
                                        </div>
                                    </div>
                                    <div className="animated fadeInUpBig col-md-5 img-about">
                                        <Image />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
