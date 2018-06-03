import React, { Component, Fragment } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Particles from 'react-particles-js';

import LOGO from "./LOGO.svg";

class Home extends Component {


    componentDidMount() {
        const img = document.querySelector('.img-container');
        const svg = document.querySelector('.svg-container');
        console.log(img);
        console.log(svg);
        setTimeout(() => {
            console.log('abcd');
            img.classList.remove('hide');
            svg.classList.add('hide');
        }, 2000)
    }

    render() {
        const logo = "../../assets/images/LOGO.png";
        return (
            <Fragment>
                <div className="App Home">
                    <div className="particles">
                        <Particles
                            params={{
                                particles: {
                                    line_linked: {
                                        shadow: {
                                            enable: true,
                                            color: "#004567",
                                            blur: 1
                                        }
                                    }
                                }
                            }}
                        />
                    </div>
                    <div className="row">
                        <div className="sidebar">
                            <Navbar />
                        </div>
                        <div className="content">
                            <span className="tag tag-render">{"render() {"}</span> <br />
                            <span className="tag tag-fragment-start">{"<Fragment>"}</span>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6 main-home">
                                        <div className="text-name">
                                            Hi,<br /> I'm <span className="text-username">Ovi</span>diu-Mihai Belciug,<br /> Web Developer.
                                        </div>
                                        <div className="text-title">
                                            React / Laravel / Vue
                                        </div>
                                        <div className="contact-btn">
                                            <a href="">Contact me</a>
                                        </div>
                                    </div>
                                    <div className="col-md-5 img-home">
                                        <div className="svg-container">
                                            <object>
                                                <embed src={LOGO} width="100%" height="120%" />
                                            </object>
                                        </div>
                                        <div className="img-container hide"></div>
                                    </div>
                                </div>
                            </div>
                            <span className="tag tag-fragment-end">{"</Fragment>"}</span>
                            <span className="tag tag-render-end">{"}"}</span>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Home;
