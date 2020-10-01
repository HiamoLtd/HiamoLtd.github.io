import React, { useState } from 'react';
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
  return currPage === '/' || slug === '/' ? `/#${link}` : `${slug}/${link}`;
}

const NavLink = ({ content, link, toggleNav }) => (
  <Link to={link} className={`${styles.link} nav-link`} onClick={toggleNav}>
    {content}
  </Link>
);

const Header = () => {
  const [open, setOpen] = useState(false);

  const onSelect = () => {
    setTimeout(() => {
      if (open) setOpen(false);
    }, 100);
  };

  return (
    <div className={styles.container}>
      <Navbar
        className={`content align-items-end ${styles.nav}`}
        expand="lg"
        sticky="top"
        expanded={open}
      >
        {/* Brand sign */}
        <Link to="/">
          <Navbar.Brand>
            <img
              src={require('../../../images/icons/logo_name.png')}
              className={`${styles.brand} d-inline-block align-top`}
              alt="Hiamo navbar logo"
            />
          </Navbar.Brand>
        </Link>
        {/* Collapse controls */}
        <Navbar.Toggle
          className={`${styles.hamburgerWrapper}`}
          type="button"
          data-toggle="collapse"
          aria-controls="Header navbar toggle"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setOpen(open ? false : 'expanded')}
        >
          <div className={`${styles.hamburger} ${!!open && styles.open}`}>
            <span />
            <span />
            <span />
            <span />
          </div>
        </Navbar.Toggle>
        <Navbar.Collapse
          id="basic-navbar-nav"
          className={`${styles.linkWrapper} align-items-end justify-content-end`}
          onSelect={() => {
            console.log('tEst:', open);
            setOpen(false);
          }}
        >
          {/* Links */}
          <NavLink content="HOME" link="/" toggleNav={onSelect} />
          <NavLink content="ABOUT" link={getLink('About', '/')} toggleNav={onSelect} />
          <NavLink content="PROJECTS" link={getLink('Projects', '/')} toggleNav={onSelect} />
          <NavLink content="TEAM" link={getLink('Team', '/')} toggleNav={onSelect} />
          <NavLink content="BLOG" link={getLink('Blog', '/')} toggleNav={onSelect} />
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

NavLink.propTypes = {
  content: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  toggleNav: PropTypes.func.isRequired,
};

export default Header;
