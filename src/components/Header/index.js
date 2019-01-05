import React, {Component} from 'react';
import {withRouter} from 'react-router';
import {NavLink} from 'react-router-dom';

import Wrapper from '../Wrapper';

import './Header.css';

class Header extends Component {
  render() {
    const pageUrl = this.props.match.url;
    const pageTitle = 'SVG Gradient Map Filter';
    const sectionsList = [
      {
        id: 'about',
        name: 'About tool',
        url: '/about'
      }
    ];

    const navItems = sectionsList.map(item => {
      const {id, name, url} = item;
      const navItemClassList = [
        'Header__nav-link',
        `Header__nav-link-${id}`
      ];

      if (item.url === pageUrl) {
        navItemClassList.push('Header__nav-link--current');
        navItemClassList.push(`Header__nav-link-${id}--current`);
      }

      const navItemClass = navItemClassList.join(' ');

      if (item.url === pageUrl) {
        return (
          <span
            key={id}
            className={navItemClass}
          >
            <span className="Header__nav-text">{name}</span>
          </span>
        );
      }

      return (
        <NavLink
          key={id}
          to={url}
          className={navItemClass}
        >
          <span className="Header__nav-text">{name}</span>
        </NavLink>
      );
    });

    const getLogoLink = () => {
      const logoLinkProps = {};

      if (pageUrl !== '/') {
        logoLinkProps.to = '/';

        return (
          <NavLink
            className="Header__logo"
            {...logoLinkProps}
          >{pageTitle}</NavLink>
        );
      }

      return (
        <span
          className="Header__logo"
        >{pageTitle}</span>
      );
    };

    return (
      <header className="Header">
        <Wrapper>
          <div className="Header__content">
            <h1 className="Header__title">
              {getLogoLink()}
            </h1>

            <nav className="Header__nav">
              {navItems}
            </nav>
          </div>
        </Wrapper>
      </header>
    );
  }
}

export default withRouter(Header);
