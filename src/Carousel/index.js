import React, { PureComponent } from 'react';
import { oneOfType, node, arrayOf } from 'prop-types';
import throttle from 'lodash/throttle';

import Slide from '../Slide';
import './styles.css';
import { ContextProvider } from './Context';
import { directions } from '../constants';

class Carousel extends PureComponent {
  constructor(props) {
    super(props);

    const { children } = props;
    const count = children && children.length ? children.length : 0;

    this.state = {
      direction: directions.NONE,
      currentIndex: 0,
      nextIndex: count ? 1 : 0,
      prevIndex: count ? count - 1 : 0
    };

    this.setNextSlideThrottled = throttle(this.setNextSlide, 1000, {
      leading: true,
      trailing: false
    });
  }

  setNextSlide = (direction) => {
    const { children = null } = this.props;
    if (!children || children.length <= 1) {
      return null;
    }

    const count = children.length;
    const { currentIndex } = this.state;
    let newIndex = 0;

    if (direction === directions.NONE) {
      return null;
    }

    if (direction === directions.FORWARD) {
      if (currentIndex < count - 1) {
        newIndex = currentIndex + 1;
      } else {
        newIndex = 0;
      }
    }
    if (direction === directions.BACKWARD) {
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
    e.preventDefault();
    const { deltaY } = e;
    let direction = directions.NONE;
    if (deltaY < 0) {
      direction = directions.FORWARD
    }
    if (deltaY > 0) {
      direction = directions.BACKWARD
    }
    this.setNextSlideThrottled(direction);
  }

  render() {
    const { children } = this.props;
    const { currentIndex, nextIndex, prevIndex } = this.state;

    // console.log(`current: ${currentIndex}; next: ${nextIndex}; prev: ${prevIndex}`);

    const wrappedChildren = React.Children.map(children, (child, index) => (
      <Slide
        index={index}
        currentIndex={currentIndex}
        nextIndex={nextIndex}
        prevIndex={prevIndex}
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

Carousel.propTypes = {
  children: oneOfType([arrayOf(node), node]),
};

Carousel.defaultProps = {
  slides: []
};

export default Carousel;
