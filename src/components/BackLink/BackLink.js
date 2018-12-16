import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Root = styled(Link)`
  font-size: 20px;
  font-family: ${props => props.theme.fonts.monospace};
  text-transform: uppercase;
  margin-bottom: 40px;
  display: inline-block;

  /* Prevents height from changing on hover. */
  /* @todo: Find a better solution to this. */
  &:hover {
    margin-bottom: 38px;
  }
`;

export default ({ title, to }) => <Root to={to}>&larr; {title}</Root>;
