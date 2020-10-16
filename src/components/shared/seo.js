/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({
  description, lang, meta, title, metaImage
}) {
  const { site, file } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            siteName
          }
        }
        file(relativePath: { eq: "imgs/default-meta.jpg" }) {
          publicURL
          childImageSharp {
            fixed {
              height
              width
            }
          }
        }
      }
    `
  );

  const metaTitle = `${title} | ${site.siteMetadata.title}`;
  const metaDescription = description || site.siteMetadata.description;
  // Use either the given image or the default one
  const image = metaImage || file;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          name: 'author',
          content: site.siteMetadata.author,
        },
        {
          property: 'og:title',
          content: metaTitle,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:site_name',
          content: site.siteMetadata.siteName,
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:creator',
          content: site.siteMetadata.author,
        },
        {
          name: 'twitter:title',
          content: metaTitle,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
        {
          name: 'twitter:site',
          content: site.siteMetadata.siteName,
        },
      ]
        .concat(
          image
            ? [
              {
                property: 'og:image',
                content: `${site.siteMetadata.siteUrl}${image.publicURL}`,
              },
              {
                property: 'og:image:width',
                content: image.childImageSharp?.fixed?.width,
              },
              {
                property: 'og:image:height',
                content: image.childImageSharp?.fixed?.height,
              },
              {
                name: 'twitter:card',
                content: 'summary_large_image',
              },
            ]
            : [
              {
                name: 'twitter:card',
                content: 'summary',
              },
            ]
        )
        .concat(meta)}
    />
  );
}

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  description: '',
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  metaImage: PropTypes.object,
};

export default SEO;
