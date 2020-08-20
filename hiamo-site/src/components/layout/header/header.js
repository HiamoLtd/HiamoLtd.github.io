import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';

import styles from './header.module.css';

// Checks whether a link is on the current page slug, or if we need to link to an
// external page. Returns an adjusted link.
function getLink(link, slug) {
  // Check what page we are on.
  const currPage = typeof window !== 'undefined' ? window.location.pathname : '';
  // Currently, all header pages are on the home page. If we aren't at home page, link us there
  return currPage === '/' || slug === '/' ? `#${link}` : `${slug}/${link}`;
}

const NavLink = ({ content, link }) => (
  <Link to={link} className={`${styles.link} nav-link`}>
    {content}
  </Link>
);

const Header = () => (
  <div className={styles.container}>
    <Navbar className={`content align-items-end ${styles.nav}`} expand="lg" sticky="top">
      {/* Brand sign */}
      <Link to={getLink('Home', '/')}>
        <Navbar.Brand className={styles.brandWrapper}>
          <img
            src={require('../../../images/icons/logo_name.png')}
            height="60"
            className={`${styles.brand} d-inline-block align-top`}
            alt="Hiamo navbar logo"
          />
        </Navbar.Brand>
      </Link>
      {/* Collapse controls */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse
        id="basic-navbar-nav"
        className={`${styles.linkWrapper} align-items-end justify-content-end`}
      >
        {/* Links */}
        <NavLink content="HOME" link={getLink('Home', '/')} />
        <NavLink content="ABOUT" link={getLink('About', '/')} />
        <NavLink content="PROJECTS" link={getLink('Projects', '/')} />
        <NavLink content="TEAM" link={getLink('Team', '/')} />
        <NavLink content="BLOG" link={getLink('Blog', '/')} />
      </Navbar.Collapse>
    </Navbar>
  </div>
);

NavLink.propTypes = {
  content: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Header;
