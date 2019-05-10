import React from 'react';
import styled from 'styled-components';

import About from '../components/About/About';
import Page from '../components/Page/Page';
import NoteList from '../components/NoteList/NoteList';

const Slide = styled.div`
  min-height: 100vh;
  padding: ${props => props.theme.sizes.large};
  display: flex;
  justify-content: ${props => (props.centerContent ? 'center' : 'flex-start')};
  flex-direction: column;
`;

class Index extends React.Component {
  state = {
    isThemeDark: true,
  };

  aboutRef = React.createRef();

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

    if (this.aboutRef.current) {
      observer.observe(this.aboutRef.current);
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
      <Page themeVariant={this.state.isThemeDark && 'dark'}>
        <Slide centerContent={true} ref={this.aboutRef}>
          <About />
        </Slide>
        <Slide id="notes">
          <h2>Notes</h2>
          <NoteList notes={notes} />
        </Slide>
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
