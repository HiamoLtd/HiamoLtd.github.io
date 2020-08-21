/* eslint-disable react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';

// Import bootstrap components
import { Row, Col } from 'react-bootstrap';

import {
  HighlightBanner, Screen, Section, ProjectBox, ModalImageGrid
} from '../../src/components';
import { SEO } from '../../src/components/shared';

import styles from './project.module.css';

// eslint-disable-next-line react/prop-types
export default ({ data }) => {
  console.log(data);
  const {
    title,
    subtitle,
    bannerImage,
    imageCaption,
    bannerVideoUrl,
    bannerVideoTitle,
    bannerVideoAspectRatio,
    leftContent,
    rightContent,
    gridImages
  } = data?.projectsJson;
  // leftContent = JSON.parse(leftContent);
  // rightContent = JSON.parse(rightContent);
  // eslint-disable-next-line react/prop-types
  return (
    <Screen>
      <SEO title={title} />
      <HighlightBanner
        title={title}
        subtitle={subtitle}
        imageRef={bannerImage}
        imageCaption={imageCaption}
        videoSource={bannerVideoUrl}
        videoTitle={bannerVideoTitle}
        videoAspectRatio={bannerVideoAspectRatio}
      />
      <Section>
        {/* Main text content section */}
        <Row className={styles.endRow}>
          {/* Left side text */}
          <Col md={6} className={styles.mainCol}>
            {leftContent}
          </Col>
          {/* Right side text */}
          <Col md={6} className={styles.mainCol}>
            {rightContent}
          </Col>
        </Row>
      </Section>
      <Section title="GALLERY" hasLine={false} />
      {/* Grid display all the images */}
      {/* TODO these need to auto */}
      <ModalImageGrid images={gridImages} hasLine />
      <Section title="OTHER PROJECTS">
        <Row className={styles.otherProjectsWrapper}>
          <ProjectBox
            title="XXXXXXXXXX"
            type="XXXXXXXXXX"
            content="XXXXXXXXXX"
            bgColor="color-secondary"
            textColor="color-text-light"
            slug="XXXXXXXXXX"
          />
          <ProjectBox
            title="XXXXXXXXXX"
            content="XXXXXXXXXX"
            bgColor="color-tertiary"
            textColor="color-text-dark"
            slug="XXXXXXXXXX"
          />
        </Row>
      </Section>
    </Screen>
  );
};

export const query = graphql`
  query($slug: String!) {
    projectsJson(slug: { eq: $slug }) {
      title
      subtitle
      bannerImage {
        childImageSharp {
          fluid {
            src
          }
        }
        publicURL
      }
      imageCaption
      bannerVideoUrl
      bannerVideoTitle
      bannerVideoAspectRatio
      leftContent
      rightContent
      gridImages {
        image {
          childImageSharp {
            fluid {
              src
            }
          }
          publicURL
        }
        caption
      }
    }
  }
`;
