import React, { Component } from 'react';

import './Navigation.css';
import './Buttons.css';

function NavItem(props) {
  return (
    <li>
      {props.itemText}
      {props.children}
    </li>
  )
}

class Navigation extends Component {
  render () {
    return (
        <nav className="main-nav">
          <ul>
            <NavItem itemText="Resume"></NavItem>
            <NavItem>
              <button className="button--slide" data-text="Well done!"><span>Contact me</span></button>
            </NavItem>
          </ul>
        </nav>
    )
  }
}

export default Navigation;
