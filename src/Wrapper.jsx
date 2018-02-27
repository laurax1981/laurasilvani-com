import React, { Component } from 'react';
import './Wrapper.css';
import Navigation from './Navigation';
import SocialNets from './SocialNets';
import Works from './Works';

class Wrapper extends Component {
  render() {
    return (
      <div className="Wrapper">
        <div className="Wrapper-sidebar">
          <h1>
            <strong>Laura Silvani</strong><br />
            Designer, Front End Developer
          </h1>
          <Navigation />
          <SocialNets />
        </div>
        <Works />
      </div>
    );
  }
}

export default Wrapper;
