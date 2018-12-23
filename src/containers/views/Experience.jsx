import React, { Component, Fragment } from 'react';

import Navbar from '../../components/navbar/Navbar';
import Story from '../../components/experience/Story';
import Education from '../../components/experience/Education';
import Awards from '../../components/experience/Awards';
import Jobs from '../../components/experience/Jobs';

import Loading from '../../components/Loading';

import axios from 'axios';

import { HOST } from '../../utils';

export default class Experience extends Component {
  state = {
    loading: true,
    story: {},
    education: {},
    awards: {},
  };

  componentDidMount() {
    axios
      .get(HOST + 'experience.json')
      .then(({ data }) => {
        console.log(data);
        this.setState({
          loading: false,
          story: data.experience.story,
          education: data.experience.education,
          awards: data.experience.awards,
          jobs: data.experience.jobs,
        });
      })
      .catch();

    this.setState({
      loading: true,
    });
  }

  render() {
    const { loading, story, education, jobs, awards } = this.state;
    return (
      <Fragment>
        <div className="App Experience">
          <div className="row">
            <div className="sidebar">
              <Navbar />
            </div>
            {loading ? (
              <Loading />
            ) : (
              <div className="content">
                <div className="container">
                  <Story story={story} />
                  <Jobs jobs={jobs} />
                  <Education education={education} />
                  <Awards awards={awards} />
                </div>
              </div>
            )}
          </div>
        </div>
      </Fragment>
    );
  }
}
