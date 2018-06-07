import React, { Component, Fragment } from 'react';

import Navbar from '../../components/navbar/Navbar';

import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default class Skills extends Component {

    componentDidMount() {
        const tags = document.querySelectorAll('.tag');
        [...tags].map(tag => {
            setTimeout(() => {
                tag.style.display = "block";
            }, tag.dataset.hide);
        })
    }

    render() {
        const yourPercentage = 75;
        return (
            <Fragment>
                <div className="App Skills">

                    <div className="row">
                        <div className="sidebar">
                            <Navbar />
                        </div>
                        <div className="content">
                            <span data-hide="10" className="tag tag-render tag-1">{"render() {"}</span>
                            <span data-hide="4000" className="tag tag-fragment-start tag-2">{"<Fragment>"}</span>
                            <div className="container">
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
                        <span data-hide="8000" className="tag tag-fragment-end tag-3">{"</Fragment>"}</span>
                        <span data-hide="12000" className="tag tag-render-end tag-4">{"}"}</span>
                    </div>
                </div>
            </Fragment >
        )
    }
}
