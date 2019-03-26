import React, {Component, Fragment} from 'react';
import Navbar from '../../components/navbar/Navbar';
import Loading from '../../components/Loading';
import Info from '../../components/home/Info';
import Logo from '../../components/home/Logo';
import ParticlesDiv from '../../components/ParticlesDiv';
import TypeAnimation from '../../components/TypeAnimation';
import HomeAnimation from "../../components/HomeAnimation";
import classNames from 'classnames';

class Home extends Component {
  state = {
    loading: false,
    loadingAnim: true,
  };

  componentDidMount() {
    const skip = this.props.location.search;

    setTimeout(() => {
      this.setState({
        loadingAnim: false
      }, () => {
        const img = document.querySelector('.img-container');
        const svg = document.querySelector('.svg-container');
        setTimeout(() => {
          img.classList.remove('hide');
          svg.classList.add('hide');
        }, 1500)
      })
    }, skip ? 100 : 2750)
  }

  render() {
    const { loadingAnim } = this.state;
    console.log(this.props);
    const skip = this.props.location.search;

    return (
      <Fragment>
        { !skip && <HomeAnimation show={loadingAnim} /> }
        <div className={classNames("App Home", { 'hide': loadingAnim })}>
          {!loadingAnim && (
            <div className="particles">
              <ParticlesDiv/>
            </div>
          )}
          <div className="row">
            <div className="sidebar">
              <Navbar />
            </div>
            {!loadingAnim ? (
              <div className="content">
                <TypeAnimation/>
                <div className="container home-container">
                  <div className="row">
                    <div className="animated fadeInUp col-sm-6 col-md-6 main-home">
                      <Info/>
                    </div>
                    <div className="col-sm-5 col-md-5 img-home">
                      <Logo/>
                    </div>
                    <div className="col-md-1"/>
                  </div>
                </div>
              </div>
            ) : (
              <Loading/>
            )}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Home;
