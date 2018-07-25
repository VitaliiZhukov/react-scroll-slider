import React from 'react';
import { shallow } from 'enzyme';

import Slide from './index';

beforeEach(() => {
  jest.resetModules();
});

describe('Render Slide component', () => {
  it('should render slide container with proper classname', () => {
    const props = {
      index: 0,
      nextIndex: 1,
      prevIndex: 2,
      currentIndex: 0
    };
  
    const wrapper = shallow(<Slide { ...props } />);
  
    expect(wrapper.find('.slide__container')).toHaveLength(1);
  });

  it('should not render slide if index is not current/next/prev', () => {
    const props = {
      index: 3,
      nextIndex: 1,
      prevIndex: 2,
      currentIndex: 0
    };
  
    const wrapper = shallow(<Slide { ...props } />);
  
    expect(wrapper.type()).toBe(null);
  });
});
