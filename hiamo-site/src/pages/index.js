import React from "react";

import { Screen } from '../components/layout';
import { SEO } from '../components/shared';

const IndexPage = () => (
  <Screen>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
  </Screen>
)

export default IndexPage
