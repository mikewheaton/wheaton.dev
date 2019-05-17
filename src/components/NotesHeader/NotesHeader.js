import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Root = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const BackLink = styled(Link)`
  font-size: ${props => props.theme.sizes.small};
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

const HomeLink = styled(Link)`
  border-bottom: none;
  font-size: ${props => props.theme.sizes.small};
  font-weight: bold;
  text-transform: uppercase;
`;

const NotesHeader = ({ backTo, backTitle }) => (
  <Root>
    <BackLink to={backTo}>&larr; {backTitle}</BackLink>
    <HomeLink to="/">Mike Wheaton</HomeLink>
  </Root>
);

export default NotesHeader;
