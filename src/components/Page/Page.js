import './Page.css';

import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';

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
      <div className="Page">
        <Helmet>
          <html lang="en" />
          <title>{data.site.siteMetadata.title}</title>
          <meta
            name="google-site-verification"
            content="VfiHt_hBis8VcZHpXz3bMhNvBbmIVc_iMWVlZ3UjSJw"
          />
        </Helmet>
        {children}
      </div>
    )}
  />
);

export default Page;
