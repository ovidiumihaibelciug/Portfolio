import React, {Component, Fragment} from 'react';
import classNames from 'classnames';

const images = [
  {
    image: 'https://i.imgur.com/ZmZQ2pT.png',
    time: 0,
  },
  {
    image: 'https://i.imgur.com/orqu6kB.png',
    time: 1000,
  },
  {
    image: 'https://i.imgur.com/lsVuqZZ.png',
    time: 1500
  },
  {
    image: 'https://i.imgur.com/orqu6kB.png',
    time: 2000,
  },
  {
    image: 'https://i.imgur.com/1yxWzaZ.png',
    time: 2200,
  },
  {
    image: 'https://i.imgur.com/cfyFL15.png',
    time: 2400,
  },
  {
    image: 'https://i.imgur.com/By1G6La.png',
    time: 2600,
  },

];

class HomeAnimation extends Component {

  state = {
    activeImage: images[0]
  };

  componentDidMount() {
    let activeImage = images[0];
      images.forEach((item, id) => {
        setTimeout(() => {
          activeImage = item.image;
          this.setState({
            activeImage,
          });
        }, item.time);
      })
  }

  render() {
    const { activeImage } = this.state;
    const { show } = this.props;
    const isLastImage = images.indexOf(images.find(item => item.image === activeImage)) === images.length - 1;

    return (
      <div className={classNames('home--animation-container', { 'home--animation-container--hide': !show })}>
        <div className="home--animation__top-bar"></div>
        <div className={"home--animation"} style={{backgroundImage: `url(${activeImage})`}}/>
        <div className="home--animation__bottom-bar"></div>
      </div>
    );
  }
}

export default HomeAnimation;