import React, { Component } from 'react';
import Navbar from '../../components/navbar/Navbar';


class Home extends Component {
    render() {
        return (
            <div className="App Home">
                <div className="row">
                    <div className="sidebar">
                        <Navbar />
                    </div>
                    <div className="content">
                        ABCDEGH
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
