import { graphql } from 'gatsby';
import React from 'react';
import './Note.css';
import Page from '../Page/Page';

export default class Note extends React.Component {
  render() {
    const { markdownRemark } = this.props.data;
    const { frontmatter, html } = markdownRemark;

    return (
      <Page>
        <div className="Note">
          <div className="Note-date">{frontmatter.date}</div>
          <h1 className="Note-title">{frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </Page>
    );
  }
}

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
