import React, { Component } from 'react';

import Carousel from './Components/Carousel';

class App extends Component {
  render() {
    return (
      <Carousel>

        <div>{'Slide 1'}</div>
        <div>{'Slide 2'}</div>
        <div>{'Slide 3'}</div>
        <div>{'Slide 4'}</div>
        <div>{'Slide 5'}</div>
        
      </Carousel>
    );
  }
};

export default App;
