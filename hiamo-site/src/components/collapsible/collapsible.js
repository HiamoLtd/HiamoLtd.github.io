import React from 'react';
import PropTypes from 'prop-types';

import styles from 'collapsible.module.css';

class Collapsible extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: props.startOpen || false
    }
  }

  toggleDropdown(e) {
    this.setState({open: !this.state.open});
  }

  getOpenClass() {
    return this.state.open ? styles.openDropdown : styles.closeDropdown;
  }

  getArrowClass() {
    return this.state.open ? styles.arrowUp : styles.arrowDown;
  }

  // Return a header based on whether or not we have an arrow to display
  getHeader(hasArrow, header) {
    return (hasArrow ?
      (
        <>
          <div className={styles.header}>
            {header}
          </div>
          <div className={styles.arrowWrapper}>
            <i className={`${this.getArrowClass()} ${styles.arrow}`}/>
          </div>
        </>
      ) : (
        {header}
      )
    );
  }

  // TODO do we want the arrow? How would we go about that?
  render() {
    return (
      <>
        <div className={styles.headerWrapper} onClick={e => toggleDropdown(e)}>
          {getHeader(this.props.hasArrow, this.props.header)}
        </div>
        <div className={`${styles.dropdown} ${this.getOpenClass()}`}>
          {this.props.children}
        </div>
      </>
    );
  };
};


export default Collapsible;