import React, { Component, Fragment } from 'react';

import Navbar from '../../components/navbar/Navbar';
import TypeAnimation from '../../components/TypeAnimation';
import Info from '../../components/about/Info';
import Image from '../../components/about/Image';

import Loading from '../../components/Loading';
import { about } from '../../data';

export default class About extends Component {
  state = {
    loading: true,
    about: '',
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: false,
        about,
      });
    }, 800);
  }

  render() {
    const { loading, about } = this.state;

    return (
      <Fragment>
        <div className="App About">
          <div className="row">
            <div className="sidebar">
              <Navbar />
            </div>
            {loading ? (
              <Loading />
            ) : (
              <div className="content">
                <span className="box-design-about" />
                <div className="container">
                  <div className="row">
                    <TypeAnimation />
                    <div className="col-md-6 main-about">
                      <div className="animated flipInX content-home">
                        <Info data={about} />
                      </div>
                    </div>
                    <div className="animated fadeInUpBig col-md-5 img-about">
                      <Image />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </Fragment>
    );
  }
}
