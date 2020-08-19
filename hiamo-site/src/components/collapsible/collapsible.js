/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';

import styles from 'collapsible.module.css';

const Collapsible = (startOpen = false, children, header, hasArrow = false) => {
  const [open, setOpen] = useState(startOpen);

  // TODO do we want the arrow? How would we go about that?
  return (
    <>
      <div
        className={styles.headerWrapper}
        onClick={() => setOpen(!open)}
        onKeyUp={() => setOpen(!open)}
        id="modal-closer"
        role="dialog"
      >
        {hasArrow ? (
          <>
            <div className={styles.header}>{header}</div>
            <div className={styles.arrowWrapper}>
              <i className={`${open ? styles.arrowUp : styles.arrowDown} ${styles.arrow}`} />
            </div>
          </>
        ) : (
          header
        )}
      </div>
      <div className={`${styles.dropdown} ${open ? styles.openDropdown : styles.closeDropdown}`}>{children}</div>
    </>
  );
};

export default Collapsible;
