import React from "react";

// Import bootstrap components
import { Row, Col } from "react-bootstrap";

// TODO we should be able to import these all from components
import { Screen, BlogBox, Section } from '../../components';
import { SEO } from '../../components/shared';

import styles from './blog.module.css';

const Blog = () => (
  <Screen>
    <SEO title="Continuing the Mission | Blog" />
    <Section title="Continuing the Mission" mainHeader>
      {/* Title section */}
      <Row className={styles.titleRow}>
        <Col md={12}>
          <p className={styles.date}>
            dd/mm/yy
          </p>
        </Col>
      </Row>
      {/* Main content section */}
      <Row className={styles.endRow}>
        {/* Left side text */}
        <Col md={6} className={styles.mainCol}>
          <p>
            The first month of 2019 done and dusted!
            <br/><br/>
            We hope everyone has had a wonderful New Years and an enjoyable summer break.
            <br/><br/>
            While we will miss the road trips, food comas and sleep-ins, we at Hiamo are looking forward
            to what 2019 has in store. We have also been working some of the brilliant students from ICT
            Graduate School in Wellington who have offered their expertise and skills to transform
            our app UI into something more polished. Look out for our sneak peeks in the upcoming
            weeks!
            <br/><br/>
            We've spent this January practising our mission and have been reconnecting ourselves with
            historic landmarks around NZ. We've travelled to Matiu / Somes Island where we explored the
            gun emplacements left from the WWII anti-aircraft batteries while also appreciating the
            amazing views of Wellington from the summit.
            <br/><br/>
            We then headed down to Lyttelton's Godley Head coastal defence batteries where we were
            pleasantly surprised to be greeted with an actual operating 3.7-inch gun restored by the
            Godley Head Heritage Trust amongst the other impressive remnants.
          </p>
        </Col>
        {/* Right side text */}
        <Col md={6} className={styles.mainCol}>
          <p>
            We concluded our heritage journey by revisiting the site that began our interest with
            coastal defence and bringing lost objects and stories to life; Fort Dorset at the
            Oruaiti Reserve in Wellington. It has been a very exciting and rewarding journey for
            Hiamo so far and it was nice to take some time to revisit some of these monumental landmarks
            and look back at what has motivated us to create and innovate.
            <br/><br/>
            It is always worth revisting important places that have been landmarks for your journey, and
            we hope that you all get the same opportunities!
            <br/><br/>
            We look forward to updating you more about our upcoming work and development, so as always
            we will keep you up to date on our social media channels.
          </p>
        </Col>
      </Row>
    </Section>
    <Section title="OTHER BLOGS">
      <Row className={styles.otherBlogsWrapper}>
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
          title="A Year of Firsts"
          date="dd/mm/yy"
          content="After an eventful year filled with great events and changes, we look back on all that has happened since our company first launched."
          bgColor="color-tertiary"
          textColor="color-text-dark"
          slug="a-year-of-firsts"
        />
      </Row>
    </Section>

  </Screen>
)

export default Blog;
