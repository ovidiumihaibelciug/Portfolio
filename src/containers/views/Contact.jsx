import React, { Component, Fragment } from 'react';

import Navbar from '../../components/navbar/Navbar';
import Map from '../../components/Map';

import Loading from '../../components/Loading';

export default class Contact extends Component {

    state = {
        loading: true
    }

    componentDidMount() {
        this.setState({
            loading: false
        })
    }

    render() {

        const { loading } = this.state;

        return (
            <Fragment>
                <div className="App Contact">
                    <div className="row">
                        <div className="sidebar">
                            <Navbar />
                        </div>
                        {
                            loading ? <Loading /> : (
                                <div className="content">
                                    <div className="contact-row">
                                        <div className="left-side">
                                            <div className="contact-title">Contact me</div>
                                            <div className="contact-form">
                                                <form action="https://formspree.io/ovidiumihaibelciug@gmail.com" method="POST" className="test">
                                                    <div className="user-info">
                                                        <div className="user-name">
                                                            <input className="form-input" name="name" placeholder="Name" required />
                                                            <span className="bar"></span>
                                                        </div>
                                                        <div className="user-email">
                                                            <input type="email" name="email" className="form-input" placeholder="Email" required />
                                                            <span className="bar"></span>
                                                        </div>
                                                    </div>
                                                    <div className="message-info">
                                                        <div className="message-subject">
                                                            <input name="subject" className="form-input" placeholder="Subject" required />
                                                            <span className="bar"></span>
                                                        </div>
                                                        <div className="message-text">
                                                            <textarea name="message" className="form-input" placeholder="Message" rows="5" required ></textarea>
                                                            <span className="bar"></span>
                                                        </div>
                                                    </div>
                                                    <div className="contact-btn">
                                                        <input type="submit" className="btn-input" />
                                                    </div>

                                                </form>
                                            </div>
                                        </div>
                                        <div className="right-side">
                                            <Map />
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </Fragment>
        );
    }
}
