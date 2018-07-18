import React from 'react';
import styled from 'styled-components';

import ActiveItem from 'ActiveItem';

import Content from '../Content';
import Image from '../Image';
import imageUrl from '../../../assets/autumn.jpg';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;

const forwardStyleWrapper = { transform: 'translateY(-100%)'};
const backwardStyleWrapper = { transform: 'translateY(100%)'};

const WithImage = () => (
  <ActiveItem
    forwardStyle={forwardStyleWrapper}
    backwardStyle={backwardStyleWrapper}
  >{
    (style) => (
      <Wrapper style={style}>
        <Content title={'This is autumn'} />
        <Image imageUrl={imageUrl} />
      </Wrapper>
    )
  }
  </ActiveItem>
);

export default WithImage;
