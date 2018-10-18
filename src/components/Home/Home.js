import './Home.css';

import { Link } from 'gatsby';
import React from 'react';

import mike from './mike.png';

const Home = () => {
  return (
    <div className="Home">
      <div className="Home-face" style={{ backgroundImage: `url(${mike})` }} />
      <div className="Home-words">
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
          <span title="as of September 28, 2018">currently</span>: getting back
          into running. kicking off a fun{' '}
          <a href="http://www.lurn.today/">side project</a>. exploring, with
          recent trips to austin, denver, and portland. rebuilding this site on{' '}
          <a href="https://www.gatsbyjs.org/">gatsby</a> (love it) with a page
          to share <Link to="notes">notes on what i'm learning</Link>.
        </p>
        <p>find me on:</p>
        <ul className="Home-links">
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
        </ul>
      </div>
    </div>
  );
};

export default Home;
