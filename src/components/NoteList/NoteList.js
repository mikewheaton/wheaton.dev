import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const Root = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Note = styled.li`
  margin-bottom: 40px;
`;

const TitleLink = styled(Link)`
  font-size: ${props => props.theme.sizes.medium};
  font-family: ${props => props.theme.fonts.monospace};
  display: inline-block;
  font-weight: bold;
  margin: 0 0 8px 0;

  /* @todo: Have used this messy method twice now. */
  &:hover {
    margin-bottom: 6px;
  }
`;

const Date = styled.div`
  font-size: ${props => props.theme.sizes.xSmall};
  color: ${props => props.theme.colors.secondaryText};
  font-family: ${props => props.theme.fonts.monospace};
`;

export default ({ notes }) => {
  return (
    <Root>
      {notes.map(note => (
        <Note key={note.id}>
          <TitleLink to={note.path}>{note.title}</TitleLink>
          <Date>{note.date}</Date>
        </Note>
      ))}
    </Root>
  );
};
