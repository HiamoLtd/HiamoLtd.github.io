/* eslint-disable react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';

// Import bootstrap components
import { Row, Col } from 'react-bootstrap';

// eslint-disable-next-line no-unused-vars
import { Screen, BlogBox, Section, ModalImage } from '../../src/components';
import { SEO } from '../../src/components/shared';

import styles from './blog.module.css';

const htmlParse = require('html-react-parser');

export default ({ data }) => {
  console.log('blog', data?.blogsJson);
  const {
    title,
    type,
    date,
    extraInfo,
    references,
    leftContent,
    images
  } = data?.blogsJson;
  // Find image paths
  // eslint-disable-next-line no-unused-vars
  const displayImages = images.map(modalImg => ({
    image: modalImg.image?.childImageSharp?.fluid?.src
      || modalImg.image?.publicURL
      || require('../../src/images/default.jpg'),
    caption: htmlParse(modalImg.caption),
  }));
  // Parse html objects
  const htmlEIContent = htmlParse(extraInfo?.content);
  const leftContentHtml = htmlParse(leftContent);

  console.log('Left:', leftContent.replace('modalimage', 'ModalImage'));

  return (
    <Screen>
      <SEO title={`${title} | Blog`} />
      <Section title={title} mainHeader>
        {/* Subtitle Section */}
        {(type || date) && (
          <Row className={styles.titleRow}>
            <Col md={12}>
              {type && <h2 className={styles.type}>{type}</h2>}
              {date && <p className={styles.date}>{date}</p>}
            </Col>
          </Row>
        )}
        {/* Main content section */}
        <Row>
          {/* Left side text */}
          <Col md={6} className={styles.mainCol}>
            {leftContentHtml}
          </Col>
          {/* Right side text */}
          <Col md={6} className={styles.mainCol}>
            {/* <ModalImage
              image={require('../../images/blogs/the_presence_of_war/screenshot.jpg')}
              caption={(
                <>
                  <p id="caption">
                    The 4-inch gun recreated in Augmented Reality by Hiamo Ltd. 2019.
                  </p>
                </>
              )}
            />
            <p>
              The HMS New Zealand was scrapped in 1922, only 10 years after entering service and 23
              years before the New Zealand government would finish paying back the purchase in 1945
              <sup>[4]</sup>
              . The 4-inch secondary guns were brought to Aotearoa for the final time, where they
              were used as saluting guns in Auckland and Wellington for over 10 years.
              <br />
              <br />
              Eventually, the 4-inch guns were placed in coastal defence roles around the country
              <sup>[5]</sup>
              . Four were used in Wellington, and these are the ones we have focussed
              on the most. They were first emplaced inside the Oruaiti reserve at Fort Dorset’s Gap
              Battery, where the original emplacements can still be seen
              <sup>[5][6]</sup>
              . These were intended to guard the harbour entrance but, luckily, they never had to.
              <br />
              <br />
              Over time the 4-inch guns were modified in numerous ways, receiving better sights to
              aim and shields to protect the crews operating them. Seatoun residents had to put up
              with multiple test firings of the guns for training during the Second World War,
              something which is surely not missed now. Two of the guns were moved to Fort Ballance
              above Scorching Bay
              <sup>[6]</sup>
              , but the threat of invasion had already decreased.
              <br />
              <br />
              After the war ended the 4-inch guns had lost their purpose, and most of them were
              scrapped during the 1950s-60s. Two examples remain outside the Auckland War Memorial
              Museum, although they have lost many pieces over time
              <sup>[7]</sup>
              .
            </p>
            <ModalImage
              image={require('../../images/blogs/the_presence_of_war/dorset.gif')}
              caption={(
                <>
                  <p id="caption">
                    A 4-inch gun of the Fort Dorset Gap Battery in operation. This gun was just down
                    the hill from where the augmented reality photo was taken.
                    <br />
                    <span>Image reference:</span>
                  </p>
                  <a href="https://paperspast.natlib.govt.nz/newspapers/EP19390912.2.49.8" id="ref">
                    https://paperspast.natlib.govt.nz/newspapers/EP19390912.2.49.8
                  </a>
                </>
              )}
            /> */}
          </Col>
        </Row>
        {/* Exta info section, if needed. */}
        <Row>
          <Col md={6} className={styles.mainCol}>
            <h3 className={styles.subheading}>{extraInfo.heading}</h3>
            {htmlEIContent}
          </Col>
        </Row>
        {/* References section, if needed. */}
        {/* // TODO collapsable. Also, highlighting text. */}
        {references && (
          <Row className={styles.endRow}>
            <Col md={12} className={styles.mainCol}>
              <h5 className={`${styles.references} ${styles.subheading}`}>References</h5>
              <p>
                {references?.map((refPair) => {
                  if (refPair.link) {
                    return (
                      <>
                        {refPair.text}
                        {' '}
                        <a href={refPair.link}>{refPair.link}</a>
                        <br />
                      </>
                    );
                  }
                  return refPair.text;
                })}
              </p>
            </Col>
          </Row>
        )}
      </Section>
      <Section title="OTHER BLOGS">
        <Row className={styles.otherBlogsWrapper}>
          <BlogBox
            title="Continuing the Mission"
            content="A new year brings new challenges and oppourtunities; we reflect on the busy first month of 2019."
            date="dd/mm/yy"
            bgColor="color-secondary"
            textColor="color-text-light"
            slug="continuing-the-mission"
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
  );
};

export const query = graphql`
  query($slug: String!) {
    blogsJson(slug: { eq: $slug }) {
      title
      type
      date
      extraInfo {
        heading
        content
      }
      references {
        link
        text
      }
      leftContent
      images {
        image {
          publicURL
          childImageSharp {
            fluid {
              src
            }
          }
        }
        caption
      }
    }
  }
`;
