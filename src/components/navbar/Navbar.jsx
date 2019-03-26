import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navbar extends Component {

    handleOverEvent = e => {
        const item = e.target.dataset.item;
        const icon = document.querySelector(`.navbar-icon[data-item="${item}"]`);
        const text = document.querySelector(`.item-text[data-item="${item}"]`);

        icon.classList.add('hide');
        text.classList.remove('hide');
    }

    handleLeaveEvent = e => {
        const item = e.target.dataset.item;
        const icon = document.querySelector(`.navbar-icon[data-item="${item}"]`);
        const text = document.querySelector(`.item-text[data-item="${item}"]`);

        icon.classList.remove('hide');
        text.classList.add('hide');
    }

    handleClickEvent = () => {
        const nav = document.querySelector('.navbar-mobile');
        nav.classList.toggle('hide');
    }

    render() {
        return (
            <React.Fragment>
                <section id="navbar" className="navbar">
                    <div className="navbar-item navbar-top">

                    </div>
                    <div className="navbar-item navbar-mid">
                        <NavLink to={'/home?skip=true'} exact={true} activeClassName='actve-item' className="item" data-item="1" onMouseOver={this.handleOverEvent} onMouseLeave={this.handleLeaveEvent}>
                            <i className="navbar-icon centered fa fa-home" data-item="1"></i>
                            <div className="item-text hide" data-item="1">Home</div>
                        </NavLink>
                        <NavLink to={'/about'} exact={true} activeClassName='actve-item' className="item" data-item="2" onMouseOver={this.handleOverEvent} onMouseLeave={this.handleLeaveEvent}>
                            <i className="navbar-icon centered fa fa-user" data-item="2"></i>
                            <div className="item-text hide" data-item="2">About</div>
                        </NavLink>
                        <NavLink to={'/skills'} exact={true} activeClassName='actve-item' className="item" data-item="3" onMouseOver={this.handleOverEvent} onMouseLeave={this.handleLeaveEvent}>
                            <i className="navbar-icon centered fa fa-cog" data-item="3"></i>
                            <div className="item-text hide" data-item="3">Skills</div>
                        </NavLink>
                        <NavLink to={'/experience'} exact={true} activeClassName='actve-item' className="item" data-item="4" onMouseOver={this.handleOverEvent} onMouseLeave={this.handleLeaveEvent}>
                            <i className="navbar-icon centered fa fa-line-chart" data-item="4"></i>
                            <div className="item-text hide" data-item="4">Experience</div>
                        </NavLink>
                        <NavLink to={'/projects'} exact={true} activeClassName='actve-item' className="item" data-item="5" onMouseOver={this.handleOverEvent} onMouseLeave={this.handleLeaveEvent}>
                            <i className="navbar-icon centered fa fa-star" data-item="5"></i>
                            <div className="item-text hide" data-item="5">Projects</div>
                        </NavLink>
                        <NavLink to={'/contact'} exact={true} activeClassName='actve-item' className="item" data-item="6" onMouseOver={this.handleOverEvent} onMouseLeave={this.handleLeaveEvent}>
                            <i className="navbar-icon centered fa fa-comment" data-item="6"></i>
                            <div className="item-text hide" data-item="6">Contact</div>
                        </NavLink>
                    </div>
                    <div className="navbar-item navbar-bot">
                        <a href="https://www.linkedin.com/in/ovidiu-mihai-belciug/">
                            <div className="social-item">
                                <i className="fa fa-linkedin">
                                </i>
                            </div>
                        </a>
                        <a href="https://github.com/ovidiumihaibelciug">
                            <div className="social-item">
                                <i className="fa fa-github">
                                </i>
                            </div>
                        </a>
                        <a href="https://www.upwork.com/freelancers/~01680e01c4395543e4">
                            <div className="social-item">
                                <i className="fa fa-arrow-up">
                                </i>
                            </div>
                        </a>
                        <a href="https://www.facebook.com/ovidiumihai.belciug">
                            <div className="social-item">
                                <i className="fa fa-facebook">
                                </i>
                            </div>
                        </a>
                    </div>
                    <div className="navbar-item navbar-hamburger" onClick={this.handleClickEvent}>
                        <i className="fa fa-bars"></i>
                    </div>
                </section>
                <section className="navbar-mobile animated jackInTheBox hide">
                    <div className="navbar-mobile-main">
                        <NavLink to={'/home'} exact={true} activeClassName='actve-item' className="item" data-item="1" onMouseOver={this.handleOverEvent} onMouseLeave={this.handleLeaveEvent}>
                            <i className="navbar-icon centered fa fa-home" data-item="1"></i>&nbsp;&nbsp;&nbsp;
                            <div className="item-text" data-item="1">Home</div>
                        </NavLink>
                        <NavLink to={'/about'} exact={true} activeClassName='actve-item' className="item" data-item="2" onMouseOver={this.handleOverEvent} onMouseLeave={this.handleLeaveEvent}>
                            <i className="navbar-icon centered fa fa-user" data-item="2"></i>&nbsp;&nbsp;&nbsp;
                            <div className="item-text" data-item="2">About</div>
                        </NavLink>
                        <NavLink to={'/skills'} exact={true} activeClassName='actve-item' className="item" data-item="3" onMouseOver={this.handleOverEvent} onMouseLeave={this.handleLeaveEvent}>
                            <i className="navbar-icon centered fa fa-cog" data-item="3"></i>&nbsp;&nbsp;&nbsp;
                            <div className="item-text" data-item="3">Skills</div>
                        </NavLink>
                        <NavLink to={'/experience'} exact={true} activeClassName='actve-item' className="item" data-item="4" onMouseOver={this.handleOverEvent} onMouseLeave={this.handleLeaveEvent}>
                            <i className="navbar-icon centered fa fa-line-chart" data-item="4"></i>&nbsp;&nbsp;&nbsp;
                            <div className="item-text" data-item="4">Experience</div>
                        </NavLink>
                        <NavLink to={'/projects'} exact={true} activeClassName='actve-item' className="item" data-item="5" onMouseOver={this.handleOverEvent} onMouseLeave={this.handleLeaveEvent}>
                            <i className="navbar-icon centered fa fa-star" data-item="5"></i>&nbsp;&nbsp;&nbsp;
                            <div className="item-text" data-item="5">Projects</div>
                        </NavLink>
                        <NavLink to={'/contact'} exact={true} activeClassName='actve-item' className="item" data-item="6" onMouseOver={this.handleOverEvent} onMouseLeave={this.handleLeaveEvent}>
                            <i className="navbar-icon centered fa fa-comment" data-item="6"></i>&nbsp;&nbsp;&nbsp;
                            <div className="item-text" data-item="6">Contact</div>
                        </NavLink>
                    </div>
                    <div className="navbar-mobile-social">
                        <a href="https://www.linkedin.com/in/ovidiu-mihai-belciug/">
                            <div className="social-item">
                                <i className="fa fa-linkedin">
                                </i>
                            </div>
                        </a>
                        <a href="https://github.com/ovidiumihaibelciug">
                            <div className="social-item">
                                <i className="fa fa-github">
                                </i>
                            </div>
                        </a>
                        <a href="https://www.upwork.com/freelancers/~01680e01c4395543e4">
                            <div className="social-item">
                                <i className="fa fa-arrow-up">
                                </i>
                            </div>
                        </a>
                        <a href="https://www.facebook.com/ovidiumihai.belciug">
                            <div className="social-item">
                                <i className="fa fa-facebook">
                                </i>
                            </div>
                        </a>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}
