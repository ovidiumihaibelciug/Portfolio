import React, { Component, Fragment } from 'react';

import Navbar from '../../components/navbar/Navbar';

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

                            <span data-hide="8000" className="tag tag-fragment-end tag-3">{"</Fragment>"}</span>
                            <span data-hide="12000" className="tag tag-render-end tag-4">{"}"}</span>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
