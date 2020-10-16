/* eslint-disable react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';

// Import bootstrap components
import { Row, Col } from 'react-bootstrap';

// TODO we should be able to import these all from components
import {
  Screen, Banner, Section, PageBoxGrid
} from '../components';
import { SEO } from '../components/shared';
import { About, Contact, Team } from '../components/sections';

import styles from './index.module.css';

export default ({ data }) => (
  <Screen>
    <SEO title="Home" />
    {/* Banner Section */}
    <Banner
      title="AUGMENTED REALITY FOR HISTORIC SITES AND BEYOND."
      subtitle="Hiamo creates AR experiences that bring content to life by immersing users in interactive stories, visualizations, and more."
      imageRef={require('../images/default.jpg')}
    />
    <Contact />
    {/* About Section */}
    <Section title="ABOUT" id="About">
      <Row className={styles.aboutWrapper}>
        <About title="STORY TELLING">
          <p>
            History is created and retained through stories, and the objects those before us
            have left behind.
            <br />
            <br />
            We bring these stories to life by visualizing them exactly where the events occurred,
            and connect people with the past by letting them be a part of the events through
            gamification.
          </p>
        </About>
        <About title="VISUALIZATION">
          <p>
            Using Augmented Reality (AR), we can create things that never were, or recreate
            something which has long since disappeared.
            <br />
            <br />
            AR allows us to visualize whatever is necessary for the experience you want. This
            could mean using AR to digitally recreate an interactive and expandable replica of a
            heritage site or item, or to visualize a new product which hasn&apos;t been built yet.
          </p>
        </About>
        <About title="AR EXPERIENCES">
          <p>
            We don&apos;t just create applications, we create experiences, and each one is
            uniquely tied to the subject or target industry. We build
            experiences which users will remember, and ones that deeply connect them to
            the content they are seeing in front of them.
            <br />
            <br />
            Our skillset can be applied to a variety of opportunities in the culture and
            heritage sector and beyond.
          </p>
        </About>
      </Row>
      <Row>
        {/* Empty column for spaciong out the motto section */}
        <Col md={5} />
        <Col md={7} className={styles.mottoWrapper}>
          <h3 className={styles.motto}>
            &quot;RECONNECTING EXPLORERS WITH HISTORIC LANDMARKS THROUGH THE LENS OF TODAYS
            INNOVATION.&quot;
          </h3>
        </Col>
      </Row>
    </Section>
    {/* Project Links Section */}
    <Section title="PROJECTS" id="Projects">
      <PageBoxGrid pages={data?.allProjectsJson?.nodes} type="project" />
    </Section>
    {/* Team Section */}
    <Section title="TEAM" id="Team">
      <Row className={styles.teamWrapper}>
        <Team
          name="Alex Hockley"
          job="CEO"
          email="alex@hiamo.nz"
          linkedIn="https://www.linkedin.com/in/alexjhockley/"
        />
        <Team
          name="Shaika Khan"
          job="CTO"
          email="shaika@hiamo.nz"
          linkedIn="https://www.linkedin.com/in/khanshai/"
        />
      </Row>
    </Section>
    {/* Blogs Links Section */}
    <Section title="BLOG" id="Blog">
      <PageBoxGrid pages={data?.allBlogsJson?.nodes} type="blog" />
    </Section>
  </Screen>
);

export const query = graphql`
  query {
    allProjectsJson {
      nodes {
        slug
        cardTitle
        cardType
        cardDescription
      }
    }
    allBlogsJson {
      nodes {
        slug
        cardDescription
        title
        date
        type
      }
    }
  }
`;
