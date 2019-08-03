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
          engineering. My focus is on bridging the gap between these disciplines
          with improved processes and shared tools. As a UX Engineer at
          Microsoft, I created everything from prototypes to production React
          apps while building the{' '}
          <a href="https://developer.microsoft.com/en-us/fabric">Fabric</a>{' '}
          design system and component library.
        </p>
        <p>
          Originally from Canada, now residing in beautiful Seattle. It
          doesn&rsquo;t rain as much as you think it does. But very nearly.
        </p>
        <p>
          <strong title="as of August 3, 2019">Currently</strong>: Wrapping up a
          sabattical, looking for my next full-time role. Learning full-stack
          development with a fun side project. Drawing (nearly) every day.
          Attending meetups to get to know the local design and development
          community. Getting back into running.
        </p>
        <p>
          Find me on <a href="https://twitter.com/mikewheatondev">Twitter</a>,{' '}
          <a href="https://github.com/mikewheaton">GitHub</a>,{' '}
          <a href="https://www.linkedin.com/in/wheatonm">LinkedIn</a>, or send
          me an <a href="mailto:mike@wheaton.dev">email</a>.
        </p>
      </Text>
    </Container>
  </>
);

export default About;
