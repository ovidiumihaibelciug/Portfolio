import React, { Component, Fragment } from 'react';

import Navbar from '../../components/navbar/Navbar';

import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import randomColor from 'randomcolor';
import CloudItem from '../../components/CloudItem';
import anime from 'animejs';

import TagSkills from '../TagSkills';


export default class Skills extends Component {

    componentDidMount() {
        const tags = document.querySelectorAll('.tag');
        const skills = document.querySelectorAll('.skill-text-anim');
        console.log(skills);
        [...tags].map(tag => {
            setTimeout(() => {
                tag.style.display = "block";
            }, tag.dataset.hide);
        });
        [...skills].map(skill => {
            console.log(skill);
        })
        setInterval(() => {
            this.forceUpdate();
        }, 3000);

        // anime({
        //     targets: 'div',
        //     translateX: [
        //       { value: 100, duration: 1200 },
        //       { value: 0, duration: 800 }
        //     ],
        //     rotate: '1turn',
        //     duration: 2000,
        //     loop: false
        //   });
    }

    render() {
        const yourPercentage = 75;
        return (
            <Fragment>
                <div className="App Skills">

                    <div className="row">
                        <div className="sidebar">
                            <Navbar style={{ position: "fixed" }} />
                        </div>
                        <div className="content">
                            <span data-hide="10" className="tag tag-render tag-1">{"render() {"}</span>
                            <span data-hide="4000" className="tag tag-fragment-start tag-2">{"<Fragment>"}</span>
                            <div className="container">
                                <TagSkills />
                                <div className="skill-points">
                                    <div className="flex-row">
                                        <div className="left-side">

                                            <div className="set-size charts-container">
                                                <div className="pie-wrapper progress-95 style-2">
                                                    <span className="label">95<span className="smaller">%</span></span>
                                                    <div className="pie">
                                                        <div className="left-side half-circle"></div>
                                                        <div className="right-side half-circle"></div>
                                                    </div>
                                                    <div className="shadow"></div>
                                                </div>
                                            </div>
                                            <div className="progress-section-text">HTML&CSS</div>

                                        </div>
                                        <div className="right-side">
                                            <div className="skill">
                                                <div className="skill-label">
                                                    <div className="skill-name">ABCD</div>
                                                    <div className="skill-procent">95%</div>
                                                </div>
                                                <div className="skill-bar">
                                                    <div className="skill-progress"></div>
                                                </div>
                                            </div>
                                            <div className="skill">
                                                <div className="skill-label">
                                                    <div className="skill-name">ABCD</div>
                                                    <div className="skill-procent">75%</div>
                                                </div>
                                                <div className="skill-bar">
                                                    <div className="skill-progress" style={{ width: "75%" }}></div>
                                                </div>
                                            </div>
                                            <div className="skill">
                                                <div className="skill-label">
                                                    <div className="skill-name">ABCD</div>
                                                    <div className="skill-procent">95%</div>
                                                </div>
                                                <div className="skill-bar">
                                                    <div className="skill-progress"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-row">
                                        <div className="left-side">

                                            <div class="set-size charts-container">
                                                <div class="pie-wrapper progress-95 style-2">
                                                    <span class="label">95<span class="smaller">%</span></span>
                                                    <div class="pie">
                                                        <div class="left-side half-circle"></div>
                                                        <div class="right-side half-circle"></div>
                                                    </div>
                                                    <div class="shadow"></div>
                                                </div>
                                            </div>
                                            <div className="progress-section-text">HTML&CSS</div>

                                        </div>
                                        <div className="right-side">
                                            <div className="skill">
                                                <div className="skill-label">
                                                    <div className="skill-name">ABCD</div>
                                                    <div className="skill-procent">95%</div>
                                                </div>
                                                <div className="skill-bar">
                                                    <div className="skill-progress"></div>
                                                </div>
                                            </div>
                                            <div className="skill">
                                                <div className="skill-label">
                                                    <div className="skill-name">ABCD</div>
                                                    <div className="skill-procent">75%</div>
                                                </div>
                                                <div className="skill-bar">
                                                    <div className="skill-progress" style={{ width: "75%" }}></div>
                                                </div>
                                            </div>
                                            <div className="skill">
                                                <div className="skill-label">
                                                    <div className="skill-name">ABCD</div>
                                                    <div className="skill-procent">95%</div>
                                                </div>
                                                <div className="skill-bar">
                                                    <div className="skill-progress"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-row">
                                        <div className="left-side">

                                            <div class="set-size charts-container">
                                                <div class="pie-wrapper progress-95 style-2">
                                                    <span class="label">95<span class="smaller">%</span></span>
                                                    <div class="pie">
                                                        <div class="left-side half-circle"></div>
                                                        <div class="right-side half-circle"></div>
                                                    </div>
                                                    <div class="shadow"></div>
                                                </div>
                                            </div>
                                            <div className="progress-section-text">HTML&CSS</div>

                                        </div>
                                        <div className="right-side">
                                            <div className="skill">
                                                <div className="skill-label">
                                                    <div className="skill-name">ABCD</div>
                                                    <div className="skill-procent">95%</div>
                                                </div>
                                                <div className="skill-bar">
                                                    <div className="skill-progress"></div>
                                                </div>
                                            </div>
                                            <div className="skill">
                                                <div className="skill-label">
                                                    <div className="skill-name">ABCD</div>
                                                    <div className="skill-procent">75%</div>
                                                </div>
                                                <div className="skill-bar">
                                                    <div className="skill-progress" style={{ width: "75%" }}></div>
                                                </div>
                                            </div>
                                            <div className="skill">
                                                <div className="skill-label">
                                                    <div className="skill-name">ABCD</div>
                                                    <div className="skill-procent">95%</div>
                                                </div>
                                                <div className="skill-bar">
                                                    <div className="skill-progress"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <span data-hide="8000" className="tag tag-fragment-end tag-3">{"</Fragment>"}</span>
                        <span data-hide="12000" className="tag tag-render-end tag-4">{"}"}</span>
                    </div>
                </div>
            </Fragment >
        )
    }
}
