import React, { PureComponent } from 'react';
// import { string, shape } from 'prop-types';
import throttle from 'lodash/throttle';
// import debounce from 'lodash/debounce';

import Slide from '../Slide';
import './styles.css';
import { ContextProvider } from './Context';

class Carousel extends PureComponent {
  state = {
    currentIndex: 0,
    nextIndex: 1,
    prevIndex: 2,
    type: 'NONE'
  };

  componentWillMount() {
    this.setNextSlideDebounced = throttle(this.setNextSlide, 1000, {
      leading: true,
      trailing: false
    });

    // this.setNextSlideDebounced = debounce(this.setNextSlide, 100, {
    //   leading: true,
    //   trailing: false
    // });

    this.setInitialIndexes();
  }

  setInitialIndexes() {
    const { children } = this.props;
    this.setState({
      currentIndex: 0,
      nextIndex: 1,
      prevIndex: children.length - 1
    })
  }

  setNextSlide = (type) => {
    const { children = null } = this.props;
    if (!children || children.length <= 1) {
      return null;
    }

    const count = children.length;
    const { currentIndex } = this.state;
    let newIndex = 0;

    if (type === 'NONE') {
      return null;
    }

    if (type === 'FORWARD') {
      if (currentIndex < count - 1) {
        newIndex = currentIndex + 1;
      } else {
        newIndex = 0;
      }
    }
    if (type === 'BACKWARD') {
      if (currentIndex === 0) {
        newIndex = count - 1;
      } else {
        newIndex = currentIndex - 1;
      }
    }

    let newNextIndex = newIndex === count - 1 ? 0 : newIndex + 1;
    let newPrevIndex = newIndex === 0 ? count - 1 : newIndex - 1;

    this.setState({
      currentIndex: newIndex,
      nextIndex: newNextIndex,
      prevIndex: newPrevIndex
    });
  };

  handleScroll = (e) => {
    const { deltaY } = e;
    // console.log(deltaY);
    let type = 'NONE';
    if (deltaY < 0) {
      type = 'FORWARD'
    }
    if (deltaY > 0) {
      type = 'BACKWARD'
    }
    this.setNextSlideDebounced(type);
  }

  render() {
    const { children } = this.props;
    const { currentIndex, nextIndex, prevIndex } = this.state;

    console.log(`current: ${currentIndex}; next: ${nextIndex}; prev: ${prevIndex}`);

    const wrappedChildren = React.Children.map(children, (child, index) => (
      <Slide
        index={index}
        currentIndex={currentIndex}
      >
        { child }
      </Slide>
    ));

    return (
      <ContextProvider value={{ currentIndex, nextIndex, prevIndex }}>
        <div
          className={'carousel__container'}
          onWheel={this.handleScroll}
        >
          { wrappedChildren }
        </div>
      </ContextProvider>
    );
  }
}

Carousel.propTypes = {};

Carousel.defaultProps = {
  slides: []
};

export default Carousel;
