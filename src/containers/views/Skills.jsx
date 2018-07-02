import React, { Component, Fragment } from 'react';

import Navbar from '../../components/navbar/Navbar';
import 'react-circular-progressbar/dist/styles.css';

import TagSkills from '../TagSkills';
import Rellax from 'rellax';
import RellaxDivs from '../../components/skills/RellaxDivs';
import Skill from '../../components/skills/Skill';



export default class Skills extends Component {

    componentDidMount() {

        setInterval(() => {
            this.forceUpdate();
        }, 5000);

        new Rellax('.rellax', {
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
                            <RellaxDivs />
                            <div className="container">
                                <TagSkills />
                                <div className="skill-points first-row-skills">
                                    <Skill />
                                    <Skill />
                                    <Skill />
                                    <Skill />
                                    <Skill />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
