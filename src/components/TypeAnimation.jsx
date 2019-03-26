import React, { Component } from 'react';

export default class TypeAnimation extends Component {

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
            <React.Fragment>
                <span data-hide="10" className="tag tag-render">{"render() {"}</span> <br />
                <span data-hide="4000" className="tag tag-fragment-start">{"return " +  "<" + "Fragment" +">"}</span>
                <span data-hide="8000" className="tag tag-fragment-end">{"</Fragment>"}</span>
                <span data-hide="12000" className="tag tag-render-end">{"}"}</span>
            </React.Fragment>
        )
    }
}
