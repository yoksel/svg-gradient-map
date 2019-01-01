import React, {Component} from 'react';
import {withRouter} from 'react-router';
import {NavLink} from 'react-router-dom';

import Wrapper from '../Wrapper';

import './Header.css';

class Header extends Component {
  render() {
    const {section = 'playground'} = this.props.match.params;
    const logoLinkProps = {};

    if (section !== 'playground') {
      logoLinkProps.to = '/';
    } else {
      logoLinkProps.to = '';
    }

    return (
      <header className="Header">
        <Wrapper>
          <div className="Header__content">
            <h1 className="Header__title">
              <NavLink
                className="Header__logo"
                {...logoLinkProps}
              >SVG Gradient Map Filter</NavLink>
            </h1>
          </div>
        </Wrapper>
      </header>
    );
  }
}

export default withRouter(Header);
