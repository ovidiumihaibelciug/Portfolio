import React, { Component, Fragment } from 'react';

import Navbar from '../../components/navbar/Navbar';
import TypeAnimation from '../../components/TypeAnimation';
import Info from '../../components/about/Info';
import Image from '../../components/about/Image';

import Loading from '../../components/Loading';

import { HOST } from '../../utils';
import axios from 'axios';

export default class About extends Component {

    state = {
        loading: true,
        about: ""
    }

    componentDidMount() {
        axios.get(HOST + 'about.json')
            .then(({ data }) => {
                this.setState({
                    loading: false,
                    about: data.about
                })
            }).catch(err => console.log(err))
    }

    render() {

        const { loading, about } = this.state;

        return (
            <Fragment>
                <div className="App About">

                    <div className="row">
                        <div className="sidebar">
                            <Navbar />
                        </div>
                        {
                            loading ? <Loading /> : (
                                <div className="content">
                                    <span className="box-design-about"></span>
                                    <div className="container">
                                        <div className="row">
                                            <TypeAnimation />
                                            <div className="col-md-6 main-about">
                                                <div className="animated flipInX content-home">
                                                    <Info data={about} />
                                                </div>
                                            </div>
                                            <div className="animated fadeInUpBig col-md-5 img-about">
                                                <Image />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </Fragment>
        )
    }
}
