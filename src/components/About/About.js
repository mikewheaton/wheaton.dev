import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: ${props => props.theme.sizes.xLarge};
  letter-spacing: 0.05rem;
  margin: 0;
  position: relative;
  text-transform: uppercase;
  line-height: 0.9;
`;

const Container = styled.div`
  position: relative;
`;

const Subtitle = styled.h2`
  color: ${props => props.theme.palette.cool};
  background: #ccc;
  font-size: ${props => props.theme.sizes.medium};
  font-weight: normal;
  left: -${props => props.theme.sizes.xLarge};
  line-height: 0;
  margin: 0;
  position: absolute;
  text-align: right;
  top: 1.5rem;
  transform: rotate(180deg);
  writing-mode: vertical-rl;
  opacity: 0;
  transition: opacity 0.4s ease-in;

  &::before {
    color: ${props => props.theme.palette.cool};
    content: '-';
    position: absolute;
    top: -${props => props.theme.sizes.large};
    transform: scaleY(3);
  }

  @media screen and (min-width: 50rem) {
    opacity: 1;
  }
`;

const Text = styled.div`
  p {
    font-size: ${props => props.theme.sizes.small};
    margin: ${props => props.theme.sizes.small} 0;
    font-weight: lighter;
  }

  a,
  a:visited,
  strong {
    font-weight: normal;
  }
`;

const LinkList = styled.ul`
  list-style: none;
  margin: 0;
  max-width: 22em;
  padding: 0;
  width: 100%;

  li {
    margin-bottom: ${props => props.theme.sizes.xxSmall};
  }
`;

const About = () => (
  <>
    <Title>Mike Wheaton</Title>
    <Container>
      <Subtitle>About</Subtitle>
      <Text>
        <p>
          I solve business problems at the intersection of design and
          engineering. My recent focus has been on helping these disciplines
          better collaborate with improved processes and shared tools. At
          Microsoft, I accomplished this in my role as a UX Engineer by creating
          everything from prototypes to production apps while being a key
          contributor to the{' '}
          <a href="https://developer.microsoft.com/en-us/fabric">Fabric</a>{' '}
          design system .
        </p>
        <p>
          Originally from Canada, now residing in beautiful Seattle. It
          doesn&rsquo;t rain as much as you think it does. But very nearly.
        </p>
        <p>
          <strong title="as of May 10, 2019">Currently</strong>: Taking a
          sabattical. Learning full-stack development with a fun side project.
          Drawing (nearly) every day. Attending meetups to get to know the local
          design and development community.
        </p>
        <p>
          Find me on <a href="https://twitter.com/themikewheaton">Twitter</a>,{' '}
          <a href="https://github.com/mikewheaton">GitHub</a>,{' '}
          <a href="https://www.linkedin.com/in/wheatonm">LinkedIn</a>, or send
          me an <a href="mailto:mike@wheaton.design">email</a>.
        </p>
      </Text>
    </Container>
  </>
);

export default About;
