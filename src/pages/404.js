import React from 'react';

import { Screen, Banner } from '../components';
import { SEO } from '../components/shared';

import styles from './404.module.css';

const NotFoundPage = () => (
  <Screen>
    <SEO title="404: Not found" />
    <div className={styles.container}>
      <Banner
        title="PAGE NOT FOUND"
        subtitle="We commend your explorative nature, but it seems there is nothing here!"
        imageRef={require('../images/default.jpg')}
      />
    </div>
  </Screen>
);

export default NotFoundPage;
