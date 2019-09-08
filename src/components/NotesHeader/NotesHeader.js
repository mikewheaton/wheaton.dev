import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Logo from '../Logo/Logo';

const Root = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: ${props => props.theme.sizes.small} 0
    ${props => props.theme.sizes.large} 0;
`;

const BackLink = styled(Link)`
  font-size: ${props => props.theme.sizes.small};
  font-family: ${props => props.theme.fonts.monospace};
  text-transform: uppercase;
  display: inline-block;

  /* Prevents height from changing on hover. */
  &:hover {
    margin-bottom: -2px;
  }
`;

const HomeLink = styled(Link)`
  border-bottom: none;
`;

const HomeLogo = styled(Logo)`
  color: ${props => props.theme.colors.secondaryText};
  height: ${props => props.theme.sizes.medium};
  stroke-width: 0.5%;
  transition: all 0.1s ease-in;

  &:hover {
    color: ${props => props.theme.colors.primaryText};
    stroke-width: 0.75%;
  }
`;

const NotesHeader = ({ backTo, backTitle }) => (
  <Root>
    <BackLink to={backTo}>&larr; {backTitle}</BackLink>
    <HomeLink to="/">
      <HomeLogo />
    </HomeLink>
  </Root>
);

export default NotesHeader;
