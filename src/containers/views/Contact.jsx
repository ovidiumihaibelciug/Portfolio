import React, { Component, Fragment } from 'react';

import Navbar from '../../components/navbar/Navbar';
import Map from '../../components/Map';

import { projects } from '../../utils';

export default class Contact extends Component {

    render() {
        return (
            <Fragment>
                <div className="App Contact">
                    <div className="row">
                        <div className="sidebar">
                            <Navbar />
                        </div>
                        <div className="content">
                            <div className="contact-row">
                                <div className="left-side">
                                    <div className="contact-title">Contact me</div>
                                    <div className="contact-form">
                                        <form className="test">
                                            <div className="user-info">
                                                <div className="user-name">
                                                    <input className="form-input" placeholder="Name" />
                                                    <span className="bar"></span> 
                                                </div>
                                                <div className="user-email">
                                                    <input className="form-input" placeholder="Email" />                    
                                                    <span className="bar"></span>                                                                                     
                                                </div>
                                            </div>
                                            <div className="message-info">
                                                <div className="message-subject">
                                                    <input className="form-input" placeholder="Subject" />
                                                    <span className="bar"></span>                                                    
                                                </div>
                                                <div className="message-text">
                                                    <textarea className="form-input" placeholder="Message" rows="5" ></textarea>
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
                    </div>
                </div>
            </Fragment>
        );
    }
}
