/* eslint-disable react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';

// Import bootstrap components
import { Row, Col } from 'react-bootstrap';

// eslint-disable-next-line no-unused-vars
import {
  Screen, Section, ModalImage, PageBoxGrid
} from '../../src/components';
import { SEO } from '../../src/components/shared';

import styles from './blog.module.css';

const htmlParse = require('html-react-parser');

let imageCounter;

const getModalImage = (image, height) => (
  <ModalImage
    imageFluid={
      image?.image?.childImageSharp?.fluid
    }
    image={
      image?.image?.publicURL
      || require('../../src/images/default.jpg')
    }
    height={height}
    caption={image?.caption ? htmlParse(image.caption) : ''}
  />
);

// Process an inputted string, applying proper classnames, image locations, and turning it to HTML
const getHtmlContent = (content, images) => {
  if (!content) return;
  // Replace all invalid class names with valid ones
  let updatedStr = content;
  const found = content.match(/className={styles.[a-zA-Z]*}/g);
  if (found) {
    found.forEach((match) => {
      const realClassName = styles[match.substring(match.indexOf('.') + 1, match.length - 1)];
      updatedStr = updatedStr.replace(match, `class="${realClassName}"`);
    });
  }
  // Replace all the display image tags with actual display images
  // eslint-disable-next-line consistent-return
  return htmlParse(updatedStr, {
    // eslint-disable-next-line consistent-return
    replace: (element) => {
      if (element?.data === '{displayImage}' || element?.data?.match(/{displayImage\[(.*?)\]}/)) {
        imageCounter += 1;
        return getModalImage(images[imageCounter], element?.data?.match(/{displayImage\[(.*?)\]}/)?.[1]);
      }
    }
  });
};

export default ({ data }) => {
  const {
    slug,
    title,
    type,
    date,
    extraInfo,
    references,
    leftContent,
    rightContent,
    images,
  } = data?.blogsJson;

  // Reset image counter so reloading the page still places images in the right spot
  imageCounter = -1;
  // Parse html objects
  const htmlEIContent = extraInfo && htmlParse(extraInfo?.content);
  const leftContentHtml = leftContent && getHtmlContent(leftContent, images);
  const rightContentHtml = rightContent && getHtmlContent(rightContent, images);

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
        {/* Main content section TODO spacing */}
        <Row>
          {/* Left side text */}
          <Col md={6} className={styles.mainCol}>
            {leftContentHtml}
          </Col>
          {/* Right side text */}
          <Col md={6} className={styles.mainCol}>
            {rightContentHtml}
          </Col>
        </Row>
        {/* Exta info section, if needed. */}
        { extraInfo && (
          <Row>
            <Col md={6} className={styles.mainCol}>
              <h3 className={styles.subheading}>{extraInfo.heading}</h3>
              {htmlEIContent}
            </Col>
          </Row>
        )}
        {/* References section, if needed. */}
        {/* // TODO collapsable. Also, highlighting text. */}
        { references && (
          <Row className={styles.endRow}>
            <Col md={12} className={styles.mainCol}>
              <h5 className={`${styles.references} ${styles.subheading}`}>References</h5>
              <p>
                {references?.map((refPair, index) => {
                  if (refPair.link) {
                    return (
                      <>
                        {refPair.text}
                        {' '}
                        { refPair.link && <a href={refPair.link}>{refPair.link}</a> }
                        {index < references.length - 1 && (
                          <>
                            <br />
                            <br />
                          </>
                        )}
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
        <PageBoxGrid pages={data?.allBlogsJson?.nodes.filter(p => p.slug !== slug)} type="blog" />
      </Section>
    </Screen>
  );
};

export const query = graphql`
  query($slug: String!) {
    blogsJson(slug: { eq: $slug }) {
      slug
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
      rightContent
      images {
        image {
          publicURL
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        caption
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
