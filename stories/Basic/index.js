import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import Basic from './Basic';
import Horizontal from './Horizontal';
import Vertical from './Vertical';

const Wrapper = styled.div`
  height: 600px;
  margin: 16px;
  font-family: Helvetica;
`;

export default () => storiesOf('Basic slider', module)
  .addDecorator(getStory => (
    <Wrapper>
      { getStory() }
    </Wrapper>
  ))
  .add('Basic', () => <Basic />)
  .add('Horizontal', () => <Horizontal />)
  .add('Vertical', () => <Vertical />);
