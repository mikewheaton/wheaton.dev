import React from 'react';
import styled from 'styled-components';
import { palette, fonts, sizes } from '../styles/theme';

import Page from '../components/Page/Page';

const Swatch = styled.div`
  background-color: ${props => palette[props.color]};
  width: 80px;
  height: 40px;
  border: 1px solid #ccc;
  margin-bottom: 4px;
`;

const Font = styled.div`
  font-family: ${props => fonts[props.font]};
  font-size: ${props => sizes[props.size]};
  font-weight: ${props => props.weight};
`;

const StylesPage = () => (
  <Page>
    <Swatch color="ice" />
    <Swatch color="cool" />
    <Swatch color="fire" />
    <Swatch color="warm" />
    <Swatch color="black" />
    <Swatch color="darkGray" />
    <Swatch color="lightGray" />
    <Swatch color="white" />

    <Font font="monospace">Space Mono</Font>
    <Font font="monospace" weight="bold">
      Space Mono Bold
    </Font>
    <Font font="sans">Work Sans</Font>
    <Font font="sans" weight="bold">
      Work Sans Bold
    </Font>

    <Font font="sans" size="xxLarge">
      xxLarge
    </Font>
    <Font font="sans" size="xLarge">
      xLarge
    </Font>
    <Font font="sans" size="large">
      large
    </Font>
    <Font font="sans" size="medium">
      medium
    </Font>
    <Font font="sans" size="small">
      small
    </Font>
    <Font font="sans" size="xSmall">
      xSmall
    </Font>
  </Page>
);

export default StylesPage;
