import React from 'react';
import styled from 'styled-components';

const Logo = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1282 484"
      preserveAspectRatio="none"
      stroke-width="2%"
      className={className}
      style={{ overflow: 'visible' }}
    >
      <path
        d="M42 442S131.278 42 213.429 42c82.15 0 89.277 400 171.428 400S474.135 42 556.286 42c82.15 0 89.278 400 171.428 400 82.151 0 89.278-400 171.429-400s89.278 400 171.428 400C1152.722 442 1242 42 1242 42"
        fill="none"
        stroke="currentcolor"
        strokeLinecap="square"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
};

export default Logo;
