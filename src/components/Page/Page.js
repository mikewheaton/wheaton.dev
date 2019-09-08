import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from '../../styles/theme.js';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Space+Mono:400,700|Work+Sans:300,400,700');

  /* Show content hidden by index.css (prevents FOUC). */
  body {
    opacity: 1;
  }

  html {
    box-sizing: border-box;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  /* Scale the base size (16px to 24px) based on the viewport's width. */
  html {
    font-size: 16px;
    line-height: ${props => props.theme.lineHeights.regular};
  }
  @media screen and (min-width: 50rem) {
    html {
      font-size: 2vw;
    }
  }
  @media screen and (min-width: 75em) {
    html {
      font-size: 1.5rem;
    }
  }

  body {
    font-family: ${props => props.theme.fonts.sans};
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.primaryText};
    cursor: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAmAgMAAACjabO2AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTU5RjBCRjk2QTMzMTFFNjlBNjlBREJCM0E5MDE4RTIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTU5RjBCRkE2QTMzMTFFNjlBNjlBREJCM0E5MDE4RTIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxNTlGMEJGNzZBMzMxMUU2OUE2OUFEQkIzQTkwMThFMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxNTlGMEJGODZBMzMxMUU2OUE2OUFEQkIzQTkwMThFMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pvx33JMAAAAJUExURQAAAP///////3N4pWMAAAADdFJOU///ANfKDUEAAABBSURBVBjTXcypAQAxEAJAzBqqw2x/0VR5IpeHqHED2rbxg6AYKGgGCpqBgmagoBnoQsChZjbRaB54A7u08cvg4gPv/1fR9dPARwAAAABJRU5ErkJggg==')
        5 5,
      auto;
    margin: 0;
    height: 100vh;
    transition: background-color 0.4s cubic-bezier(.17,.67,.83,.67);
  }

  a,
  a:visited {
    border-bottom: 2px solid ${props => props.theme.colors.secondaryText};
    color: ${props => props.theme.colors.primaryText};
    text-decoration: none;
  }
  a:hover {
    border-bottom-width: 4px;
    cursor: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAsAgMAAAB9I4IhAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTU5RjBCRkQ2QTMzMTFFNjlBNjlBREJCM0E5MDE4RTIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTU5RjBCRkU2QTMzMTFFNjlBNjlBREJCM0E5MDE4RTIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxNTlGMEJGQjZBMzMxMUU2OUE2OUFEQkIzQTkwMThFMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxNTlGMEJGQzZBMzMxMUU2OUE2OUFEQkIzQTkwMThFMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pgj0zqsAAAAJUExURQAAAP///////3N4pWMAAAADdFJOU///ANfKDUEAAABOSURBVBjTrcuhEcAwDATBJ09Uncj1J6wqA0KU2JkxCFuy6q7o7i5NOf+WNkKxyhkb5ZTCiRMNOQ28hAEeKljUPlR9KmvqLgcqgDiQJE1dw9ma97mQdGMAAAAASUVORK5CYII=')
        15 5,
      auto;
  }
`;

const Root = styled.div`
  margin: 0 auto;
  max-width: 37rem;
`;

const Page = ({ children, themeVariant }) => {
  return (
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
        <ThemeProvider theme={theme(themeVariant)}>
          <Root>
            <GlobalStyles />
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
        </ThemeProvider>
      )}
    />
  );
};

export default Page;
