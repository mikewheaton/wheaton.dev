import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import BackLink from '../BackLink/BackLink';
import Page from '../Page/Page';

const Root = styled.div`
  p {
    font-family: 'Overpass', sans-serif;
    font-size: 1.25rem;
  }
`;

const Title = styled.h1`
  font-size: 44px;
  margin: 0;
`;

const Content = styled.div`
  margin-bottom: 40px;
`;

const Date = styled.div`
  color: ${props => props.theme.colors.secondaryText};
  font-family: ${props => props.theme.fonts.monospace};
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
          <Content dangerouslySetInnerHTML={{ __html: html }} />
          <Date>{frontmatter.date}</Date>
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
