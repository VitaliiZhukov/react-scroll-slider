import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  flex: 1;
  height: 100%;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  `;

const Image = ({ imageUrl }) => (
  <Wrapper imageUrl={imageUrl}/>
);

Image.propTypes = {
  imageUrl: string.isRequired
};

export default Image;
