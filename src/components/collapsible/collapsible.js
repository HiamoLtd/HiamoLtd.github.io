import React, { useState } from 'react';

import styles from './collapsible.module.css';

const Collapsible = ({
  startOpen = false, children, header, hasArrow = false
}) => {
  const [open, setOpen] = useState(startOpen);

  return (
    <>
      <div
        className={styles.headerWrapper}
        onClick={() => setOpen(!open)}
        onKeyPress={() => setOpen(!open)}
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
          <>{header}</>
        )}
      </div>
      <div className={`${styles.dropdown} ${open ? styles.openDropdown : styles.closeDropdown}`}>
        {children}
      </div>
    </>
  );
};

export default Collapsible;
