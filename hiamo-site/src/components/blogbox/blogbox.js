import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import { Box } from '../shared';

import styles from './blogbox.module.css';

//TODO links should encompass the whole page
const BlogBox = ({ title, type, date, content, bgColor, textColor, width, slug }) => (
  <Box
    width={width}
    bgColor={bgColor}
  >
    <Link  to={`/blogs/${slug}`} className={styles.link}>
      <div className={styles.titleWrapper}>
        <h3 className={styles.title}>
          {title}
        </h3>
        {type &&
          <h4 className={styles.type} style={{color: `rgb(var(--${textColor}))`}}>
            {type}
          </h4>
        }
        <p className={styles.date} style={{color: `rgb(var(--${textColor}))`}}>
          {date}
        </p>
      </div>
      <p className={styles.text} style={{color: `rgb(var(--${textColor}))`}}>
        {content}
      </p>
      <p className={styles.readMore}>
        Read more...
      </p>
    </Link>
  </Box>
);

BlogBox.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
  date: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  width: PropTypes.number,
  slug: PropTypes.string.isRequired
}

export default BlogBox;
