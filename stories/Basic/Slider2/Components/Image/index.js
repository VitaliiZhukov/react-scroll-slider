import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 500px;
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
