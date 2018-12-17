import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import BackLink from '../BackLink/BackLink';
import Page from '../Page/Page';

const Root = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: ${props => props.theme.fonts.monospace};
    margin: 0 0 8px 0;
  }

  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  p {
    font-size: 1.35rem;
    line-height: 2rem;
    margin: 0 0 2rem 0;
  }

  em {
    font-style: normal;
    font-weight: bold;
    color: ${props => props.theme.colors.emphasizedText};
  }

  ul {
    padding: 0;
  }

  li {
    font-size: 1.35rem;
    line-height: 2rem;
  }

  /* @todo: Create a custom theme for code snippets. */
  *:not(pre) > code {
    padding: 0.1rem 0.2rem 0.2rem 0.2rem;
  }

  pre {
    margin-bottom: 2rem;
  }
`;

const Title = styled.h1`
  font-size: 44px;
  margin: 0;
  font-family: ${props => props.theme.fonts.monospace};
`;

const Date = styled.div`
  color: ${props => props.theme.colors.secondaryText};
  font-family: ${props => props.theme.fonts.monospace};
  margin-bottom: 20px;
`;

const Content = styled.div`
  margin-bottom: 40px;
`;

export default class Note extends React.Component {
  render() {
    const { markdownRemark } = this.props.data;
    const { frontmatter, html } = markdownRemark;

    return (
      <Page themeVariant="light">
        <Root>
          <BackLink title="Notes" to="/notes" />
          <Title>{frontmatter.title}</Title>
          <Date>{frontmatter.date}</Date>
          <Content dangerouslySetInnerHTML={{ __html: html }} />
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
