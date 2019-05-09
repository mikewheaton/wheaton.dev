import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import mike from './mike.png';

const Root = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0;

  /* @todo: Add a media query helper. */
  @media screen and (min-width: 768px) {
    flex-direction: row;
    padding: 40px;
  }
`;

const Face = styled.div`
  height: 50vh;
  width: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  margin-bottom: 2vh;

  @media screen and (min-width: 768px) {
    flex-basis: 0;
    flex-grow: 2;
    height: 100vh;
    margin-bottom: 0;
    margin-right: 5vw;
    max-height: 900px; /* Actual size. */
  }
`;

const Words = styled.div`
  font-family: ${props => props.theme.fonts.monospace};
  font-weight: 300;
  font-size: 1.1rem;
  line-height: 1.75;
  margin: 0 0 1.2rem 0;

  @media screen and (min-width: 768px) {
    flex-basis: 0;
    flex-grow: 3;
  }
`;

const LinkList = styled.ul`
  list-style: none;
  margin: 0;
  max-width: 22em;
  padding: 0;
  width: 100%;

  li {
    margin-bottom: 0.4rem;
  }
`;

const Home = () => {
  return (
    <Root>
      <Face style={{ backgroundImage: `url(${mike})` }} />
      <Words>
        <p>hi, i&rsquo;m mike wheaton.</p>
        <p>
          user experience engineer at microsoft, building onedrive, sharepoint,
          and the{' '}
          <a href="https://developer.microsoft.com/en-us/fabric">fabric</a>{' '}
          design system that's used for apps across the company and beyond.
        </p>
        <p>
          originally from canada, now residing in beautiful seattle. it
          doesn&rsquo;t rain as much as you think it does. but almost.
        </p>
        <p>
          <span title="as of February 2, 2019">currently</span>: training for a
          10k run. learning full-stack development with a fun{' '}
          <a href="http://www.lurn.today/">side project</a>. drawing every day.
          rebuilding this site on <a href="https://www.gatsbyjs.org/">gatsby</a>
          .
        </p>
        <p>find me on:</p>
        <LinkList>
          <li>
            <a href="https://github.com/mikewheaton">github</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/wheatonm">linkedin</a>
          </li>
          <li>
            <a href="https://twitter.com/themikewheaton">twitter</a>
          </li>
          <li>
            <a href="mailto:mike@wheaton.design">mail</a>
          </li>
        </LinkList>
      </Words>
    </Root>
  );
};

export default Home;
