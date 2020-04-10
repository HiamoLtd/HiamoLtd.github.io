import React from "react";

// Import bootstrap components
import Row from "react-bootstrap/Row"

// TODO we should be able to import these all from components
import { Screen, Team, ProjectBox } from '../components';
import { SEO } from '../components/shared';
import { Section } from "../components/sections";

const IndexPage = () => (
  <Screen>
    <SEO title="Home" />
    <Section title="ABOUT" hasLine>
      <p>About some stuff. Woo</p>
    </Section>
    <Section title="PROJECTS" hasLine>
      <Row>
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
    <Section title="TEAM" hasLine>
      <Row>
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
  </Screen>
)

export default IndexPage;
