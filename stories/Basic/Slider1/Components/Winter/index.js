import React from 'react';
import styled from 'styled-components';

import ActiveItem from 'ActiveItem';

import Content from '../Content';
import imageUrl from './winter.jpg';

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

  const forwardStyleImage = { transform: 'translateX(-100%)'};
  const backwardStyleImage = { transform: 'translateX(100%)'};

  const forwardStyleContent = { transform: 'scale(.5)'};
  const backwardStyleContent = { transform: 'scale(2)'};

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
        <Content title={'This is winter'} />
      </ActiveItem>
    </Wrapper>
  )
};

export default WithImage;
