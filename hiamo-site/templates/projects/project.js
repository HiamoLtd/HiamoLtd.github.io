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

const htmlParse = require('html-react-parser');

export default ({ data }) => {
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
    gridImages,
  } = data?.projectsJson;
  // Get the actual sources for the images
  const bannerImageSrc = bannerImage?.childImageSharp?.fluid?.src
                      || bannerImage?.publicURL
                      || require('../../src/images/default.jpg');
  const gridImageMap = gridImages.map(gridImage => ({
    image: gridImage.image?.childImageSharp?.fluid?.src
      || gridImage.image?.publicURL
      || require('../../src/images/default.jpg'),
    caption: htmlParse(gridImage.caption),
  }));
  // Parse HTML objects
  const imageCaptionHtml = imageCaption ? htmlParse(imageCaption) : <></>;
  const htmlLeftContent = htmlParse(leftContent);

  const htmlRightContent = htmlParse(rightContent);

  return (
    <Screen>
      <SEO title={`${title} | Project`} />
      <HighlightBanner
        title={title}
        subtitle={subtitle}
        imageRef={bannerImageSrc}
        imageCaption={imageCaptionHtml}
        videoSource={bannerVideoUrl}
        videoTitle={bannerVideoTitle}
        videoAspectRatio={bannerVideoAspectRatio}
      />
      <Section>
        {/* Main text content section */}
        <Row className={styles.endRow}>
          {/* Left side text */}
          <Col md={6} className={styles.mainCol}>
            {htmlLeftContent}
          </Col>
          {/* Right side text */}
          <Col md={6} className={styles.mainCol}>
            {htmlRightContent}
          </Col>
        </Row>
      </Section>
      <Section title="GALLERY" hasLine>
        {/* Grid display all the images */}
        {/* TODO these need to auto */}
        <ModalImageGrid images={gridImageMap} />
      </Section>
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

// TODO really should use this https://github.com/gatsbyjs/gatsby/issues/17783
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
