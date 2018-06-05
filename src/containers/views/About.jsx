import React, { Component, Fragment } from 'react';

import Navbar from '../../components/navbar/Navbar';

export default class About extends Component {

    componentDidMount() {
        const tags = document.querySelectorAll('.tag');
        [...tags].map(tag => {
            setTimeout(() => {
                tag.style.display = "block";
            }, tag.dataset.hide);
        })
    }

    render() {
        return (
            <Fragment>
                <div className="App About">

                    <div className="row">
                        <div className="sidebar">
                            <Navbar />
                        </div>
                        <div className="content">
                            <span data-hide="10" className="tag tag-render tag-1">{"render() {"}</span>
                            <span data-hide="4000" className="tag tag-fragment-start tag-2">{"<Fragment>"}</span>
                            <span className="box-design-about"></span>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6 main-about">
                                        <div className="content-home">
                                            <div className="title">About me.</div>
                                            <div className="description">
                                                <p>
                                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore quaerat, quibusdam facilis autem non harum provident! At quidem recusandae corrupti?
                                                </p>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa libero praesentium sed eveniet odit aperiam! Amet quam molestias labore praesentium explicabo magni possimus molestiae autem reiciendis unde eveniet esse perferendis, laudantium animi aliquid impedit nostrum perspiciatis rerum veniam alias deserunt?
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-5 img-about">
                                        <div className="image-container"></div>
                                    </div>
                                </div>

                            </div>
                            <span data-hide="8000" className="tag tag-fragment-end tag-3">{"</Fragment>"}</span>
                            <span data-hide="12000" className="tag tag-render-end tag-4">{"}"}</span>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
