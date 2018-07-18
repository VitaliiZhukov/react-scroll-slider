import React from 'react';

import Carousel from 'Carousel';

import Winter from './Components/Winter';
import Autumn from './Components/Autumn';
import Summer from './Components/Summer';
import Spring from './Components/Spring';

const Slider = () => (
  <Carousel>
    <Winter />
    <Autumn />
    <Summer />
    <Spring />

  </Carousel>
);

export default Slider;
