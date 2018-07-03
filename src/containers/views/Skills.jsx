import React, { Component, Fragment } from 'react';

import Navbar from '../../components/navbar/Navbar';
import 'react-circular-progressbar/dist/styles.css';

import TagSkills from '../TagSkills';
import Rellax from 'rellax';
import RellaxDivs from '../../components/skills/RellaxDivs';
import Skill from '../../components/skills/Skill';

import Loading from '../../components/Loading';

import {HOST} from '../../utils';

import axios from 'axios';

export default class Skills extends Component {

    state = {
        loading: true,
        skills: []
    }

    componentWillMount() {
        this.forceUpdate();
    }
    

    componentDidMount() {
        setInterval(() => {
            this.forceUpdate();
        }, 5000);

        axios.get(HOST + 'skills.json')
            .then(({data}) => {
                setTimeout(() => {    
                    this.setState({
                        skills: data.skills,
                        loading: false
                    }, () => {
                        new Rellax('.rellax', {
                            speed: -2,
                            center: false,
                            wrapper: null,
                            round: true,
                            vertical: true,
                            horizontal: false
                        });
                    });
                }, 4000);         
            })
            .catch(err => console.log(err))
        
    }

    scrollDown = () => {
        document.querySelector('.first-row-skills').scrollIntoView({
            behavior: 'smooth', block: "start", inline: "nearest"
        })
    }

    render() {
        const {loading, skills} = this.state;
        console.log(skills);
        return (
            <Fragment>
                <div className="App Skills">
                    <div className="line line-left"></div>
                    <div className="line line-right"></div>
                    <div className="row">
                        <div className="sidebar">
                            <Navbar style={{ position: "fixed" }} />
                        </div>
                        {
                            loading ? <Loading /> : (
                                <div className="content">
                                    <div className="go-down-btn" onClick={this.scrollDown}>
                                        <i className="fa fa-arrow-down"></i>
                                    </div>
                                    <RellaxDivs />
                                    <div className="container">
                                        <TagSkills />
                                        <div className="skill-points first-row-skills">
                                            {
                                                skills.map(skill => {
                                                    return <Skill key={skill.id} skill={skill} />
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </Fragment>
        )
    }
}
