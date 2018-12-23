import React from 'react';
import JobBox from './JobBox';

const Jobs = ({ jobs }) => {
  return (
    <div className="education">
      <div className="title">Experience</div>
      <div className="education-body">
        {jobs.map(item => {
          return <JobBox item={item} />;
        })}
      </div>
    </div>
  );
};

export default Jobs;
