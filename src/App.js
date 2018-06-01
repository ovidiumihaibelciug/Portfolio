import React, { Component } from 'react';
import Navbar from './components/navbar/Navbar';

import './assets/scss/App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
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

export default App;
