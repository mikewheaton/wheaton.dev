import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import Page from '../Page/Page';

const Root = styled.div`
  p {
    font-family: 'Overpass', sans-serif;
    font-size: 1.25rem;
  }

  pre {
    overflow-x: scroll;
  }
`;

const Date = styled.div`
  color: var(--secondary);
  font-family: var(--monospace);
`;

const Title = styled.h1`
  font-size: 44px;
`;

export default class Note extends React.Component {
  render() {
    const { markdownRemark } = this.props.data;
    const { frontmatter, html } = markdownRemark;

    return (
      <Page>
        <Root>
          <Date>{frontmatter.date}</Date>
          <Title>{frontmatter.title}</Title>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </Root>
      </Page>
    );
  }
}

/* @todo: By what magic does Gatsby connect this query to the component?! */
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "D MMMM YYYY")
        path
        title
      }
    }
  }
`;
