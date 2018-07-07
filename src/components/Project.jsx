import React, { Component } from 'react'

export class Project extends Component {

    state = {
        image: '',
        images: ''
    }

    componentDidMount() {
        let images = this.state.images ? this.state.images : this.props.project.images;
        this.setState({
            image: images[0]
        })

        setInterval(() => {
            images = this.state.images ? this.state.images : this.props.project.images;
            let image = this.state.image;
            let div = document.querySelector('.project-image');
            if (div) {
                div.classList.add('fadeIn');
                div.classList.remove('fadeOut');
                let index = images.indexOf(image) < images.length - 1 ? images.indexOf(image) : -1;

                this.setState({
                    image: images[index + 1]
                })
                setTimeout(() => {
                    div.classList.remove('fadeIn');
                    div.classList.add('fadeOut');
                }, 4000)
            }
        }, 5000)
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            image: nextProps.project.images[0],
            images: nextProps.project.images
        })
    }

    render() {
        const { id, name, description, tags, code, url } = this.props.project;
        const { image } = this.state;
        return (
            <div className="project">
                <div class="layer"></div>
                <div className="pattern top"></div>
                <div className="pattern right"></div>
                <div className="project-leftside animated slideInRight">
                    <div className="project-id"> {id < 9 ? "0" : ""}{id}</div>
                    <div className="project-title">{name}</div>
                    <div className="project-text">{description}</div>
                    <div className="project-tags">
                        {
                            tags.map(tag => <div className="project-tag">{tag}</div>)
                        }
                    </div>
                    <div className="project-more">
                        {
                            url && (
                                <a href={url} target="_blank">
                                    <div className="see_url">
                                        <i className="fa fa-eye"></i>
                                        &nbsp;&nbsp; <span>Site</span>
                                    </div>
                                </a>
                            )
                        }
                        {
                            code && (
                                <a href={code} target="_blank">
                                    <div className="see_code">
                                        <i className="fa fa-code"></i>
                                        &nbsp;&nbsp; <span>Code</span>
                                    </div>
                                </a>
                            )
                        }
                    </div>
                </div>
                <div className="project-rightside animated slideInRight">
                    <div className="animated project-image" style={{ backgroundImage: `url(${image})` }}></div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Project