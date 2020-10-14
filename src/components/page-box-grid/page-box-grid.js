/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';

// Import Bootstrap tools
import { Row } from 'react-bootstrap';
import BlogBox from '../blogbox';
import ProjectBox from '../projectbox';

import styles from './page-box-grid.module.css';

const PageBoxGrid = ({ pages = [], colCount = 3, type = 'blog' }) => {
  const rows = [];
  let currCol = 1;
  let currRow = 0;
  // Loop over all the images and arrange them into columns
  pages.forEach((page) => {
    const currPage = { ...page };
    // Set color based on odd or even row
    currPage.bgColor = currCol % 2 ? 'color-secondary' : 'color-tertiary';
    currPage.textColor = currCol % 2 ? 'color-text-light' : 'color-text-dark';
    rows[currRow] = rows[currRow] ? [...rows[currRow], currPage] : [currPage];
    if (currCol >= colCount) {
      currRow += 1;
      currCol = 1;
    } else {
      currCol += 1;
    }
  });

  return (
    <div className={styles.gridWrapper}>
      {rows.map((row, i) => (
        <Row key={i}>
          {row.map(col => (type.toLowerCase() === 'blog' ? (
            <BlogBox
              title={col.title}
              type={col.type}
              date={col.date}
              content={col.cardDescription}
              bgColor={col.bgColor}
              textColor={col.textColor}
              slug={col.slug}
            />
          ) : (
            type.toLowerCase() === 'project' && (
            <ProjectBox
              title={col.cardTitle}
              subtitle={col.cardType}
              content={col.cardDescription}
              bgColor={col.bgColor}
              textColor={col.textColor}
              slug={col.slug}
            />
            )
          )))}
        </Row>
      ))}
    </div>
  );
};

PageBoxGrid.propTypes = {
  pages: PropTypes.array.isRequired,
  colCount: PropTypes.number,
  type: PropTypes.string.isRequired,
};

export default PageBoxGrid;
