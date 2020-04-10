import React from "react";

// Import bootstrap components
import { Row, Col } from "react-bootstrap";

// TODO we should be able to import these all from components
import { Screen, Team, ProjectBox, BlogBox, About, Banner } from '../components';
import { SEO } from '../components/shared';
import { Section, Contact } from "../components/sections";

import styles from './index.module.css';

const IndexPage = () => (
  <Screen>
    <SEO title="Home" />
    <Banner
      title="AUGMENTED REALITY FOR HISTORIC SITES AND BEYOND."
      subtitle="Hiamo creates AR experiences that bring content to life by immersing users in interactive stories, visualizations, and more."
      imageRef=""
    />
    <Contact />
    <Section title="ABOUT">
      <Row className={styles.aboutWrapper}>
        <About title="STORY TELLING">
          <p>
            History is created and connected by its stories, and the objects those before us have left behind.
            <br/>
            <br/>
            We bring these stories to life by visualizing them exactly where the events occurred and connect people
            with the tales by letting them be a part of the history through gamification.     
          </p>
        </About>
        <About title="VISUALIZATION">
          <p>
            Using Augmented Reality (AR), we can create things that never were, or recreate something which has since disappeared.
            <br/>
            <br/>
            AR lets us visualize whatever is necessary for the experience you want. This could mean using AR to digitally recreate
            an interactive and expandable replica of a heritage site or item, or to visualize a new product which hasn't been built yet.
          </p>
        </About>
        <About title="AR EXPERIENCES">
          <p>
            Each experience we build is uniquely tied to the subject or target industry. We build experiences that
            visitors and users will remember, and ones that deeply connect them to the content they are seeing in front of them.
            <br/>
            <br/>
            Our skillset can also be applied to a variety of opportunities in the culture and heritage sector and beyond. 
          </p>
          {/* TODO this is also an option */}
          {/* <p>
            We don't just create applications, we create experiences, and each experience is uniquely tied to its subject.
            Hiamo crafts experiences thatvisitors and users will remember, and ones that deeply connect them to the content
            they are seeing in front of them.
            <br/>
            <br/>
            This skillset can be applied to a variety of opportunities in the culture and heritage sector and beyond. 
          </p> */}
        </About>
      </Row>
      <Row>
        {/* Empty column for spaciong out the motto section */}
        <Col md={5}/>
        <Col md={7} className={styles.mottoWrapper}>
          <h3 className={styles.motto}>
            "RECONNECTING EXPLORERS WITH HISTORIC LANDMARKS THROUGH THE LENS OF TODAYS INNOVATION."
          </h3>
        </Col>
      </Row>
    </Section>
    <Section title="PROJECTS">
      <Row className={styles.projectWrapper}>
        <ProjectBox
          title="COASTAL DEFENCE"
          subtitle="VISUALISATION"
          content="New Zealand is littered with coastal defence sites, but many lack the naval guns they were built for. We bring these objects back digitally, creating an interactive and environmentally friendly alternative to physical replicas."
          bgColor="color-secondary"
          textColor="color-text-light"
        />
        <ProjectBox
          title="WAHINE DISASTER"
          subtitle="STORYTELLING"
          content="For Wellington Heritage Week 2019, Hiamo gave a new insight into the tragic sinking of the T.E.V Wahine by using augmented reality to visualse the path of the ship by the Wahine memorial mast."
          bgColor="color-tertiary"
          textColor="color-text-dark"
        />
        <ProjectBox
          title="SEEING STARS"
          subtitle="EDUCATION"
          content="Hiamo was asked to solve the problem of what a stargazing business could do if it was too cloudy to see the stars on a given night. Our answer? Bring the stars to earth!"
          bgColor="color-secondary"
          textColor="color-text-light"
        />
      </Row>
    </Section>
    <Section title="TEAM">
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
    <Section title="BLOG">
      <Row className={styles.blogWrapper}>
        {/* // TODO go through all colours anre remove "color", just set it to "text-dark" or whatever */}
        <BlogBox
          title="The Presence of War"
          type="Heritage Highlight"
          content="The story of Aotearoa's 4-inch coastal defence guns, from the battles of Europe to the shores of New Zealand."
          date="dd/mm/yy"
          bgColor="color-secondary"
          textColor="color-text-light"
          slug="the-presence-of-war"
        />
        <BlogBox
          title="Continuing the Mission"
          content="A new year brings new challenges and oppourtunities; we reflect on the busy first month of 2019."
          date="dd/mm/yy"
          bgColor="color-tertiary"
          textColor="color-text-dark"
          slug="continuing-the-mission"
        />
        <BlogBox
          title="A Year of Firsts"
          date="dd/mm/yy"
          content="After an eventful year filled with great events and changes, we look back on all that has happened since our company first launched."
          bgColor="color-secondary"
          textColor="color-text-light"
          slug="a-year-of-first"
        />
      </Row>
    </Section>
  </Screen>
)

export default IndexPage;
