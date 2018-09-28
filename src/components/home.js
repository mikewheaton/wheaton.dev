import './home.css';

import React from 'react';

import mike from '../images/mike.png';

export default () => {
  return (
    <div class="Home">
      <div class="face">
        <img src={mike} alt="mike wheaton's face" />
      </div>
      <div class="words">
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
          into running. kicking off a{' '}
          <a href="http://www.lurn.today/">side project</a> to learn full-stack
          development. rebuilding this site on{' '}
          <a href="https://www.gatsbyjs.org/">gatsby</a>. exploring, with recent
          trips to austin, denver, and portland.
        </p>
        <p>find me on:</p>
        <ul>
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
