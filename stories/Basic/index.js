import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import Slider1 from './Slider1';
import Slider2 from './Slider2';

const Wrapper = styled.div`
  height: 600px;
  background-color: Lavender;
  margin: 16px;
  font-family: Helvetica;
`;

export default () => storiesOf('Basic slider', module)
  .addDecorator(getStory => (
    <Wrapper>
      { getStory() }
    </Wrapper>
  ))
  .add('Basic slider 1', () => <Slider1 />)
  .add('Basic slider 2', () => <Slider2 />);
