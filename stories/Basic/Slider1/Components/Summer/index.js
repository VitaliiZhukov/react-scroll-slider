import React from 'react';
import styled from 'styled-components';

import ActiveItem from 'ActiveItem';

import Content from '../Content';
import imageUrl from './summer.jpg';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;

const Image = styled.div`
  width: 500px;
  height: 100%;
  background-image: url(${imageUrl});
  background-size: cover;
  background-position: center;
  `;

const WithImage = () => {

  const forwardStyleImage = { transform: 'translateY(-100%)'};
  const backwardStyleImage = { transform: 'translateY(100%)'};

  const forwardStyleContent = { transform: 'translateX(100%)'};
  const backwardStyleContent = { transform: 'translateX(-100%)'};

  return (
    <Wrapper>
      <ActiveItem
        forwardStyle={forwardStyleImage}
        backwardStyle={backwardStyleImage}
      >
        <Image />
      </ActiveItem>

      <ActiveItem
        forwardStyle={forwardStyleContent}
        backwardStyle={backwardStyleContent}
      >
        <Content title={'This is summer'} />
      </ActiveItem>
    </Wrapper>
  )
};

export default WithImage;
