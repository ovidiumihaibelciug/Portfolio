import React from 'react';
import { Link } from 'react-router-dom';

import ScrollAnimation from 'react-animate-on-scroll';

const JobBox = ({ item }) => {
  const { id, title, image, description, url } = item;
  return (
    <ScrollAnimation
      className="education-box"
      animateIn="fadeIn"
      animateOut="fadeOut"
    >
      <div
        className="education-left-side"
        style={{ backgroundImage: `url(${image})` }}
      />
      <a href={url}>
        <div className="education-right-side">
          <div className="e-title">{title}</div>
          <div className="e-content">{description}</div>
        </div>
      </a>
    </ScrollAnimation>
  );
};

export default JobBox;
