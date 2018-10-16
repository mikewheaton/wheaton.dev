import { graphql } from 'gatsby';
import React from 'react';
import './Note.css';
import Standard from '../../layouts/Standard/Standard';

export default class Note extends React.Component {
  render() {
    const { markdownRemark } = this.props.data;
    const { frontmatter, html } = markdownRemark;

    return (
      <Standard>
        <div className="Note">
          <h1>{frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: html }} />
          <hr />
          <p>Published: {frontmatter.date}</p>
        </div>
      </Standard>
    );
  }
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
