import React, { Component, Fragment } from 'react';

import Navbar from '../../components/navbar/Navbar';

import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import randomColor from 'randomcolor';
import CloudItem from '../../components/CloudItem';
import anime from 'animejs';

import TagSkills from '../TagSkills';
import Rellax from 'rellax';


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
        }, 5000);

        var rellax = new Rellax('.rellax', {
            speed: -2,
            center: false,
            wrapper: null,
            round: true,
            vertical: true,
            horizontal: false
        });

    }

    scrollDown = () => {
        document.querySelector('.first-row-skills').scrollIntoView({
            behavior: 'smooth', block: "start", inline: "nearest"
        })
    }



    render() {
        return (
            <Fragment>
                <div className="App Skills">
                    <div className="line line-left"></div>
                    <div className="line line-right"></div>
                    <div className="row">
                        <div className="sidebar">
                            <Navbar style={{ position: "fixed" }} />
                        </div>
                        <div className="content">
                            <div className="go-down-btn" onClick={this.scrollDown}>
                                <i className="fa fa-arrow-down"></i>
                            </div>
                            <div className="rellax square square1 lg-blue1" style={{ transform: "rotate(45deg)" }} data-rellax-speed="-4"></div>
                            <div className="rellax square square2 lg-blue1" style={{ transform: "rotate(45deg)" }} data-rellax-speed="-9"></div>
                            <div className="rellax circle circle1 lg" data-rellax-speed="-2"></div>
                            <div className="rellax circle circle3 md" data-rellax-speed="-4"></div>
                            <div className="rellax circle circle4 md" data-rellax-speed="3"></div>
                            <div className="rellax circle circle2" data-rellax-speed="-8"></div>

                            <span data-hide="10" className="tag tag-render tag-1">{"render() {"}</span>
                            <span data-hide="4000" className="tag tag-fragment-start tag-2">{"<Fragment>"}</span>
                            <div className="container">
                                <TagSkills />
                                <div className="skill-points first-row-skills">
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
                    </div>
                </div>
            </Fragment >
        )
    }
}
