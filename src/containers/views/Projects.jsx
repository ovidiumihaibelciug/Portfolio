import React, { Component, Fragment } from 'react';

import Navbar from '../../components/navbar/Navbar';

import { projects } from '../../utils';

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
        const {projects, project} = this.state;
        const id = projects.indexOf(project) != 0  ? projects.indexOf(project) : projects.length;

        this.setState({
            project: projects[id-1]
        });
    }

    nextProject = () => {
        const {projects, project} = this.state;
        const id = projects.indexOf(project) < projects.length - 1  ? projects.indexOf(project) : -1;

        this.setState({
            project: projects[id+1]
        });
    }

    render() {
        const { project } = this.state;
        const { id, title, text, tags, url, code, image } = project;
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
                                    <div className="project">
                                        <div class="layer"></div>
                                        <div className="pattern top"></div>
                                        <div className="pattern right"></div>
                                        <div className="project-leftside">
                                            <div className="project-id"> { id < 9 ? "0" : "" }{id}</div>
                                            <div className="project-title">{ title }</div>
                                            <div className="project-text">{text}</div>
                                            <div className="project-tags">
                                                {
                                                    tags.map(tag => <div className="project-tag">{tag}</div>)
                                                }
                                            </div>
                                            <div className="project-more">
                                                <div className="see_code">
                                                    <i className="fa fa-code"></i>
                                                    &nbsp;&nbsp; <span>Code</span>
                                                </div>
                                                <div className="see_url">
                                                    <i className="fa fa-eye"></i>
                                                    &nbsp;&nbsp; <span>Site</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="project-rightside">
                                            <div className="project-image"></div>
                                            <div className="project-arrows">
                                                <div className="arrow-left" onClick={this.prevProject}>
                                                    <i className="fa fa-arrow-left"></i>
                                                </div>
                                                <div className="arrow-right" onClick={this.nextProject}>
                                                    <i className="fa fa-arrow-right"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}
