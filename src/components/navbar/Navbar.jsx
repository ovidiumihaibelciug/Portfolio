import React, { Component } from 'react'

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

    render() {
        return (
            <section id="navbar" className="navbar">
                <div className="navbar-item navbar-top">
                    aa
                </div>
                <div className="navbar-item navbar-mid">
                    <div className="item" data-item="1" onMouseOver={this.handleOverEvent} onMouseLeave={this.handleLeaveEvent}>
                        <i className="navbar-icon centered fa fa-home" data-item="1"></i>
                        <div className="item-text hide" data-item="1">asd</div>
                    </div>
                    <div className="item" data-item="2" onMouseOver={this.handleOverEvent} onMouseLeave={this.handleLeaveEvent}>
                        <i className="navbar-icon centered fa fa-home" data-item="2"></i>
                        <div className="item-text hide" data-item="2">asd</div>
                    </div>
                    <div className="item" data-item="3" onMouseOver={this.handleOverEvent} onMouseLeave={this.handleLeaveEvent}>
                        <i className="navbar-icon centered fa fa-home" data-item="3"></i>
                        <div className="item-text hide" data-item="3">asd</div>
                    </div>
                    <div className="item" data-item="4" onMouseOver={this.handleOverEvent} onMouseLeave={this.handleLeaveEvent}>
                        <i className="navbar-icon centered fa fa-home" data-item="4"></i>
                        <div className="item-text hide" data-item="4">asd</div>
                    </div>
                    <div className="item" data-item="5" onMouseOver={this.handleOverEvent} onMouseLeave={this.handleLeaveEvent}>
                        <i className="navbar-icon centered fa fa-home" data-item="5"></i>
                        <div className="item-text hide" data-item="5">asd</div>
                    </div>
                </div>
                <div className="navbar-item navbar-bot">
                    <a href="">
                        <div className="social-item">
                            <i className="fa fa-facebook">
                            </i>
                        </div>
                    </a>
                    <a href="">
                        <div className="social-item">
                            <i className="fa fa-facebook">
                            </i>
                        </div>
                    </a>
                    <a href="">
                        <div className="social-item">
                            <i className="fa fa-facebook">
                            </i>
                        </div>
                    </a>
                </div>
            </section>
        )
    }
}