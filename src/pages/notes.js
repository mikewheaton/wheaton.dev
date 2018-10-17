import { graphql } from 'gatsby';
import React from 'react';

import NoteList from '../components/NoteList/NoteList';
import Page from '../components/Page/Page';

export default class Notes extends React.Component {
  render() {
    const { edges } = this.props.data.allMarkdownRemark;
    const notes = edges.map(edge => ({
      id: edge.node.id,
      title: edge.node.frontmatter.title,
      path: edge.node.frontmatter.path,
      date: edge.node.frontmatter.date,
    }));

    return (
      <Page>
        <h1>Notes</h1>
        <NoteList notes={notes} />
      </Page>
    );
  }
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date(formatString: "D MMMM YYYY")
          }
        }
      }
    }
  }
`;
