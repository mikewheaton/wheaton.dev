import React from 'react';
import styled from 'styled-components';
import Logo from '../Logo/Logo';

const TitleWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h1`
  flex-basis: auto;
  flex-shrink: 0;
  font-size: ${props => props.theme.sizes.xLarge};
  letter-spacing: 0.05rem;
  line-height: 0.9;
  margin: 0;
  position: relative;
  text-transform: uppercase;
`;

const TitleLogo = styled(Logo)`
  color: ${props => props.theme.colors.secondaryText};
  height: ${props => props.theme.sizes.large};
  stroke-width: 0.3rem;
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
    <TitleWrapper>
      <Title>Mike Wheaton</Title>
      <TitleLogo />
    </TitleWrapper>

    <Container>
      <Subtitle>About</Subtitle>
      <Text>
        <p>
          As a <strong>product designer and front-end engineer</strong>, I focus
          on delivering high-quality software that tackles business problems
          from a user-centered perspective.
        </p>
        <p>
          Before becoming an independent contractor, I was a{' '}
          <a href="https://dev.to/emmawedekind/ux-engineering-3hem">
            UX Engineer
          </a>{' '}
          at Microsoft. I bridged the gap between design and engineering by
          building prototypes, production-ready React applications, and the{' '}
          <a href="https://developer.microsoft.com/en-us/fabric">
            Office UI Fabric
          </a>{' '}
          design system and component library.
        </p>
        <p>
          Originally from Canada, I now reside in beautiful Seattle, Washington.
          It doesn't rain as much as you've heard it does. But just about.
        </p>
        <p>
          <strong title="as of September 7, 2019">Currently</strong>: Starting a
          new project where we're creating a much-needed application for the
          transportation industry. Drawing or painting (almost) every day.
          Mentoring students at <a href="https://www.thinkful.com/">Thinkful</a>
          . Getting back into running.
        </p>
        <p>
          You can find me on{' '}
          <a href="https://www.linkedin.com/in/wheatonm">LinkedIn</a>,{' '}
          <a href="https://github.com/mikewheaton">GitHub</a>, or send me an{' '}
          <a href="mailto:mike@wheaton.dev">email</a>.
        </p>
      </Text>
    </Container>
  </>
);

export default About;
