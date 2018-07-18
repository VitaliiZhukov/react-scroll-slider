import React from 'react';
import styled from 'styled-components';

import ActiveItem from 'ActiveItem';

import Content from '../Content';
import Image from '../Image';
import imageUrl from '../../../assets/summer.jpg';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;

const forwardStyleWrapper = { transform: 'translateX(-100%)'};
const backwardStyleWrapper = { transform: 'translateX(100%)'};

const WithImage = () => (
  <ActiveItem
    forwardStyle={forwardStyleWrapper}
    backwardStyle={backwardStyleWrapper}
  >{
    (style) => (
      <Wrapper style={style}>
        <Image imageUrl={imageUrl}/>
        <Content title={'This is summer'} />
      </Wrapper>
    )
  }
  </ActiveItem>
);

export default WithImage;
