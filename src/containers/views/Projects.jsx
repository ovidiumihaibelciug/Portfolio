import React, { Component, Fragment } from 'react';

import Navbar from '../../components/navbar/Navbar';

import { projects } from '../../utils';

import Project from '../../components/Project';

export default class Projects extends Component {

    state = {
        projects: [],
        project: {}
    }

    componentWillMount() {
        this.setState({
            projects: projects,
            project: projects[0]
        });
    }

    prevProject = () => {
        const { projects, project } = this.state;
        const id = projects.indexOf(project) != 0 ? projects.indexOf(project) : projects.length;



        const div1 = document.querySelector(".project-leftside");
        const div2 = document.querySelector(".project-rightside");

        div1.classList.add('fadeOut');
        div2.classList.add('fadeOut');
        div1.classList.remove('slideInRight');
        div2.classList.remove('slideInRight');


        setTimeout(() => {
            this.setState({
                project: projects[id - 1]
            });
            div1.classList.remove('slideOutLeft');
            div1.classList.add('slideInRight');
            div2.classList.remove('slideOutLeft');
            div2.classList.add('slideInRight');
        }, 1000)
    }

    nextProject = () => {
        const { projects, project } = this.state;
        const id = projects.indexOf(project) < projects.length - 1 ? projects.indexOf(project) : -1;

        const div1 = document.querySelector(".project-leftside");
        const div2 = document.querySelector(".project-rightside");

        div1.classList.add('fadeOut');
        div2.classList.add('fadeOut');
        div1.classList.remove('slideInRight');
        div2.classList.remove('slideInRight');


        setTimeout(() => {
            this.setState({
                project: projects[id + 1]
            });
            div1.classList.remove('slideOutLeft');
            div1.classList.add('slideInRight');
            div2.classList.remove('slideOutLeft');
            div2.classList.add('slideInRight');
        }, 1000)
    }

    render() {
        const { project } = this.state;
        return (
            <Fragment>
                <div className="App Projects">
                    <div className="row">
                        <div className="sidebar">
                            <Navbar />
                        </div>
                        <div className="content">
                            <div className="container">
                                <div className="projects-list">
                                    <Project project={project}>
                                        <div className="project-arrows">
                                            <div className="arrow-left" onClick={this.prevProject}>
                                                <i className="fa fa-arrow-left"></i>
                                            </div>
                                            <div className="arrow-right" onClick={this.nextProject}>
                                                <i className="fa fa-arrow-right"></i>
                                            </div>
                                        </div>
                                    </Project>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}
