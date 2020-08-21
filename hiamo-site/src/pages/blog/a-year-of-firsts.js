import React from 'react';

// Import bootstrap components
import { Row, Col } from 'react-bootstrap';

// TODO we should be able to import these all from components
import { Screen, BlogBox, Section } from '../../components';
import { SEO } from '../../components/shared';

import styles from './blog.module.css';

const Blog = () => (
  <Screen>
    <SEO title="A Year of Firsts | Blog" />
    <Section title="A Year of Firsts" mainHeader>
      {/* Title section */}
      <Row className={styles.titleRow}>
        <Col md={12}>
          <p className={styles.date}>dd/mm/yy</p>
        </Col>
      </Row>
      {/* Main content section */}
      <Row className={styles.endRow}>
        {/* Left side text */}
        <Col md={6} className={styles.mainCol}>
          <p>
            Happy New Year’s Eve everyone! We hope you had a brilliant and rewarding 2018 and that
            2019 will be even more exciting.
            <br />
            <br />
            Our 2018 has been very an exciting year with many firsts.
            <br />
            First time launching a company.
            <br />
            First time participating in an innovation (business) accelerator program.
            <br />
            First time pitching to potential clients and future partners.
            <br />
            First time participating in a business showcase.
            <br />
            First time ordering company merchandise!
            <br />
            <br />
            As we got to grips with all the new jargon and the never-ending paperwork needs we found
            ourselves solidifying our company, building our brand and identity, realising our
            strengths, and planning how we will contribute the Cultural and Heritage sector of New
            Zealand and beyond. Of course, we wouldn`&apos;`t have made this far without the
            encouragement and advice of our mentors and peers and we would like to take this moment
            to appreciate all the amazing people who have and are continuing to support us and our
            company.
            <br />
            <br />
            A huge thank you to Te Papa and the Mahuki Innovation Accelerator program. We are
            extremely grateful for the opportunity given to us to manifest our company, while also
            providing us with a platform to grow, connect with others, and present ourselves to many
            audiences.
            <br />
            <br />
            Thank you to the Mahuki team, Tui Te Hau, and Ezel Kokcu for your endless support,
            advice, and for seeing the best in us. You have been the first people we turned to and
            you always made time for us.
            <br />
            <br />
            Thank you to the 2018 Mahuki cohort and the Alumni. We are incredibly glad to have grown
            alongside 10 amazing teams. Where we saw problems and risks, you saw solutions and
            opportunities. Your quirkiness, advice, banter, and lunch trips are what we will miss
            the most.
          </p>
        </Col>
        {/* Right side text */}
        <Col md={6} className={styles.mainCol}>
          <p>
            Thank you to our spectacular mentors. Your guidance and counsel are invaluable to us and
            has greatly assisted us as we found our footing through the journey so far.
            <br />
            <br />
            Thank you to all who have offered their consultation and resources for our company and
            ideas. Your recommendations and knowledge have helped us progress much farther with our
            work.
            <br />
            <br />
            Thank you to our cohort, staff, and supervisors at Victoria University of Wellington for
            being so understanding, encouraging, and accommodating to us starting our business
            venture in the middle of our final year!
            <br />
            <br />
            Thank you to our family, friends and peers for the non-stop support, love, rides in your
            cars and for taking us out for much-needed breaks and hearing out all our ramblings even
            when it didn’t make any sense!
            <br />
            <br />
            And last but not the least, a big thank you to you who are reading this! It is because
            of your interest and encouragement in us and what we do that makes us eager to create
            and innovate. You all are the reason why we are ‘Hiamo’ and we hope we can return that
            excitement and elevation to you with our products.
            <br />
            <br />
            Happy Holidays and Happy New Year!
            <br />
            Shaika and Alex
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
          slug="the_presence_of_war"
        />
        <BlogBox
          title="Continuing the Mission"
          content="A new year brings new challenges and oppourtunities; we reflect on the busy first month of 2019."
          date="dd/mm/yy"
          bgColor="color-tertiary"
          textColor="color-text-dark"
          slug="continuing-the-mission"
        />
      </Row>
    </Section>
  </Screen>
);

export default Blog;
