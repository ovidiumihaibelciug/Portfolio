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
        const tags = document.querySelectorAll('.tag');
        [...tags].map(tag => {
            setTimeout(() => {
                tag.style.display = "block";
            }, tag.dataset.hide);
        })
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
                                    number: {
                                        value: 20,
                                        density: {
                                            enable: true,
                                            value_area: 1500
                                        }
                                    },
                                    size: {
                                        value: 1.1
                                    },
                                    line_linked: {
                                        enable: true,
                                        distance: 150,
                                        color: "#ffffff",
                                        opacity: 0.4,
                                        width: 1
                                    },
                                    "shape": {
                                        "type": "star",
                                        "stroke": {
                                            "width": 0,
                                            "color": "#000000"
                                        },
                                        polygon: {
                                            nb_sides: 7
                                        }
                                    }
                                },
                                "image": { "src": LOGO, "width": 100, "height": 100 },
                                "interactivity": {
                                    "detect_on": "canvas",
                                    "events": {
                                        "onhover": {
                                            "enable": true,
                                            "mode": "repulse"
                                        },
                                        "onclick": {
                                            "enable": true,
                                            "mode": "repulse"
                                        },
                                        "resize": true
                                    },
                                    "modes": {
                                        "grab": {
                                            "distance": 400,
                                            "line_linked": {
                                                "opacity": 1
                                            }
                                        },
                                        "repulse": {
                                            "distance": 200,
                                            "duration": 0.4
                                        }
                                    },
                                },
                                "retina_detect": true

                            }}
                        />
                    </div>
                    <div className="row">
                        <div className="sidebar">
                            <Navbar />
                        </div>
                        <div className="content">
                            <span data-hide="10" className="tag tag-render">{"render() {"}</span> <br />
                            <span data-hide="4000" className="tag tag-fragment-start">{"<Fragment>"}</span>
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
                            <span data-hide="8000" className="tag tag-fragment-end">{"</Fragment>"}</span>
                            <span data-hide="12000" className="tag tag-render-end">{"}"}</span>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Home;
