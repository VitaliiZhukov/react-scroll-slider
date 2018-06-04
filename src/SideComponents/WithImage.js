import React from 'react';
import styled from 'styled-components';

import ActiveItem from '../Components/ActiveItem';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;

const ContentWrapper = styled.div`
  flex-basis: 30%;
  height: 100%;
  background-color: LightSlateGray;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Image = styled.div`
  width: 500px;
  height: 100%;
  background-image: url(http://res.cloudinary.com/arabianna/image/fetch/a_0/f_auto/http://res.cloudinary.com/arabianna/image/upload/v1524668432/categories/photo/portfolio/portfolio2.jpg);
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
        <ContentWrapper>
          <h2>
            This is another slide
          </h2>
          <p>
            {'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur'}
          </p>
        </ContentWrapper>
      </ActiveItem>
    </Wrapper>
  )
};

export default WithImage;
