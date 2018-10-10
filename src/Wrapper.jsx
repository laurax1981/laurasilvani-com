import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip';
import Navigation from './Navigation';
import SocialNets from './SocialNets';
import Works from './Works';

import './Wrapper.css';

function Hero() {
  return (
      <h1>
        Hi, I&rsquo;m Laura.<br />
        I am a <span data-tip data-for='fullstackTip'>full-stack designer</span>* focused on building
        useful, simple yet delightful products.<br />
      </h1>
  )
}

class Wrapper extends Component {
  render() {
    return (
      <div className="Wrapper">
        <header>
          <ul>
            <li>Laura Silvani</li>
            <li><Navigation /></li>
          </ul>
          <Hero />
          {/* <SocialNets /> */}
        </header>

        {/*<span>While I work on the website, please
        feel free to <a href="mailto:laura@laurasilvani.com">contact me</a>.</span>*/}

        <ReactTooltip className='tooltip' id='fullstackTip'>
          * <u>Full-stack designer</u> is a term recently coined to describe multi-disciplinary
          designers skilled in <strong>UX Research</strong> (research, wireframing, prototyping),
          <strong>UI Design</strong> (visual, high-fidelity comp) as well as <strong>Front-End Development</strong> (HTML/CSS/JS).
        </ReactTooltip>

        {/* <Works /> */}
      </div>
    );
  }
}

export default Wrapper;
