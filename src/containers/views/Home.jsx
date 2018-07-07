import React, { Component, Fragment } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Loading from '../../components/Loading';
import Info from '../../components/home/Info';
import Logo from '../../components/home/Logo';
import ParticlesDiv from '../../components/ParticlesDiv';
import TypeAnimation from '../../components/TypeAnimation';

class Home extends Component {
    state = {
        loading: true
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                loading: false
            }, () => {
                const img = document.querySelector('.img-container');
                const svg = document.querySelector('.svg-container');
                setTimeout(() => {

                    img.classList.remove('hide');
                    svg.classList.add('hide');
                }, 2000)
            });
        }, 1000);
    }

    render() {
        const { loading } = this.state;
        return (
            <Fragment>
                <div className="App Home">
                    {!loading &&
                        <div className="particles">
                            <ParticlesDiv />
                        </div>
                    }
                    <div className="row">
                        <div className="sidebar">
                            <Navbar />
                        </div>
                        {!loading ? (
                            <div className="content">
                                <TypeAnimation />
                                <div className="container home-container">
                                    <div className="row">
                                        <div className="animated fadeInUp col-sm-6 col-md-6 main-home">
                                            <Info />
                                        </div>
                                        <div className="col-sm-5 col-md-5 img-home">
                                            <Logo />
                                        </div>
                                        <div className="col-md-1"></div>
                                    </div>
                                </div>
                            </div>
                        ) : <Loading />
                        }
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Home;
