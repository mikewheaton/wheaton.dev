import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import NotesHeader from '../NotesHeader/NotesHeader';
import Page from '../Page/Page';

const Root = styled.div`
  padding: 1rem;

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: ${props => props.theme.fonts.monospace};
    margin: 0 0 8px 0;
    color: ${props => props.theme.colors.secondaryText};
  }

  h1 {
    font-size: ${props => props.theme.sizes.large};
    line-height: ${props => props.theme.lineHeights.narrow};
  }

  h2 {
    font-size: ${props => props.theme.sizes.medium};
  }

  p {
    font-size: ${props => props.theme.sizes.small};
    margin: 0 0 1.4rem 0;
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
    font-size: ${props => props.theme.sizes.small};
    line-height: ${props => props.theme.lineHeights.wide};
  }

  /* @todo: Create a custom theme for code snippets. */
  *:not(pre) > code {
    padding: ${props => props.theme.sizes.xxxSmall};
    font-size: ${props => props.theme.sizes.xSmall};
  }

  pre {
    margin-bottom: 2rem;
    font-size: ${props => props.theme.sizes.xSmall};
  }

  /* Image styles. */
  .gatsby-resp-image-figure {
    margin: 0;

    figcaption {
      font-size: ${props => props.theme.sizes.small};
    }
  }
  .gatsby-resp-image-wrapper {
    margin: 0 0 8px 0 !important;
  }
`;

const Title = styled.h1`
  font-size: ${props => props.theme.sizes.large};
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
      <Page>
        <Root>
          <NotesHeader backTitle="Notes" backTo="/#notes" />
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
