/* eslint-disable react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';

// Import bootstrap components
import { Row, Col } from 'react-bootstrap';

import {
  HighlightBanner, Screen, Section, PageBoxGrid, ModalImageGrid
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
    gridImagesColCount,
    gridImages,
    slug
  } = data?.projectsJson;

  // Get the actual sources for the images
  const bannerImageFluid = bannerImage?.childImageSharp?.fluid;
  const bannerImageSrc = bannerImage?.childImageSharp?.fluid?.src
                      || bannerImage?.publicURL
                      || require('../../src/images/default.jpg');
  const gridImageMap = gridImages.map(gridImage => ({
    fluidImage: gridImage.image?.childImageSharp?.fluid,
    staticImage: gridImage.image?.childImageSharp?.fluid?.src
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
        fluidImageRef={bannerImageFluid}
        imageCaption={imageCaptionHtml}
        videoSource={bannerVideoUrl}
        videoTitle={bannerVideoTitle}
        videoAspectRatio={bannerVideoAspectRatio}
      />
      <Section>
        {/* Main text content section */}
        <Row className={styles.endRow}>
          {/* Left side text */}
          <Col lg={6} className={styles.mainCol}>
            {htmlLeftContent}
          </Col>
          {/* Right side text */}
          <Col lg={6} className={styles.mainCol}>
            {htmlRightContent}
          </Col>
        </Row>
      </Section>
      <Section title="GALLERY" hasLine>
        {/* Grid display all the images */}
        <ModalImageGrid images={gridImageMap} colCount={gridImagesColCount || undefined} />
      </Section>
      <Section title="OTHER PROJECTS">
        <PageBoxGrid pages={data?.allProjectsJson?.nodes.filter(p => p.slug !== slug)} type="project" />
      </Section>
    </Screen>
  );
};

export const query = graphql`
  query($slug: String!) {
    projectsJson(slug: { eq: $slug }) {
      slug
      title
      subtitle
      bannerImage {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
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
      gridImagesColCount
      gridImages {
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
    allProjectsJson {
      nodes {
        slug
        cardTitle
        cardType
        cardDescription
      }
    }
  }
`;
