import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Carousel from './index';

beforeEach(() => {
  jest.resetModules();
});

describe('Render Empty Carousel component', () => {
  const wrapper = shallow(<Carousel />);

  it('should render wrapper with proper class and empty children', () => {
    expect(wrapper.find('.carousel__container')).toHaveLength(1);
  });
});

describe('Render Carousel component with children', () => {
  const wrapper = mount(
    <Carousel>
      <div/>
      <div/>
    </Carousel>
  );

  console.log(wrapper.debug());

  it('should render 3 slide children with proper class', () => {
    expect(wrapper.find('.slide__container')).toHaveLength(2);
  });
});
