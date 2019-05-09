import React from 'react';
import styled from 'styled-components';

import Home from '../components/Home/Home';
import Page from '../components/Page/Page';
import NoteList from '../components/NoteList/NoteList';

const HomeWrapper = styled.div`
  min-height: 100vh;
  padding: 20px;
`;

const NotesWrapper = styled.div`
  min-height: 100vh;
  padding: 20px;
`;

class Index extends React.Component {
  state = {
    isThemeDark: true,
  };

  homeRef = React.createRef();

  componentDidMount() {
    const observer = new IntersectionObserver(
      entries => {
        this.setState({
          isThemeDark: entries[0].isIntersecting,
        });
      },
      {
        threshold: 0.5,
      }
    );

    if (this.homeRef.current) {
      observer.observe(this.homeRef.current);
    }
  }

  render() {
    const { edges } = this.props.data.allMarkdownRemark;
    const notes = edges.map(edge => ({
      id: edge.node.id,
      title: edge.node.frontmatter.title,
      path: edge.node.frontmatter.path,
      date: edge.node.frontmatter.date,
    }));

    return (
      <Page themeVariant={this.state.isThemeDark ? 'dark' : 'light'}>
        <HomeWrapper ref={this.homeRef}>
          <Home />
        </HomeWrapper>
        <NotesWrapper id="notes">
          <h2>Notes</h2>
          <NoteList notes={notes} />
        </NotesWrapper>
      </Page>
    );
  }
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { draft: { eq: false } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date(formatString: "D MMMM YYYY")
            draft
          }
        }
      }
    }
  }
`;

export default Index;
