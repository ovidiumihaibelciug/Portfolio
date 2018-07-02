import React from 'react';
import Particles from 'react-particles-js';

const ParticlesDiv = () => {
    return (
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
    )
}

export default ParticlesDiv
