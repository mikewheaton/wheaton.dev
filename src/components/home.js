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
          user experience engineer at microsoft, building the{' '}
          <a href="https://developer.microsoft.com/en-us/fabric">fabric</a>{' '}
          design system and products for collaboration and cloud storage with
          some terrific people.
        </p>
        <p>
          originally from canada, now residing in beautiful seattle. it
          doesn&rsquo;t rain as much as you think it does. but almost.
        </p>
        <p>
          <span title="as of September 10, 2018">currently</span>: getting back
          into running. kicking off a{' '}
          <a href="http://www.lurn.live/">side project</a> to gain familiarity
          with full-stack development. exploring, with recent trips to austin
          and denver. learning to draw and paint.
        </p>
        <p>find me on:</p>
        <ul>
          <li>
            <a href="mailto:mike@mikewheaton.ca">email</a>
          </li>
          <li>
            <a href="https://github.com/mikewheaton">github</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/wheatonm">linkedin</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
