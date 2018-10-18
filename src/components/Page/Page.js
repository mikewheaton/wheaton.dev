import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

const Root = styled.div`
  margin: 0 auto;
  max-width: 1000px;
  min-width: 320px;
`;

const Page = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Root>
        <Helmet>
          <html lang="en" />
          <title>{data.site.siteMetadata.title}</title>
          <meta
            name="google-site-verification"
            content="VfiHt_hBis8VcZHpXz3bMhNvBbmIVc_iMWVlZ3UjSJw"
          />
        </Helmet>
        {children}
      </Root>
    )}
  />
);

export default Page;
