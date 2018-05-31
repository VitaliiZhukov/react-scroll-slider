import React, { PureComponent } from 'react';
// import { string, shape } from 'prop-types';
import throttle from 'lodash/throttle';

import Slide from '../Slide';
import './styles.css';
import { ContextProvider } from './Context';

class Carousel extends PureComponent {
  state = {
    currentIndex: 0,
    nextIndex: 1,
    prevIndex: 2,
    isNext: true
  };

  componentWillMount() {
    this.setNextSlideDebounced = throttle(this.setNextSlide, 2000, {
      leading: true,
      trailing: false
    });

    this.setInitialIndexes();
  }

  setInitialIndexes() {
    const { slides } = this.props;
    this.setState({
      currentIndex: 0,
      nextIndex: 1,
      prevIndex: slides.length - 1
    })
  }

  setNextSlide = (isNext) => {
    const { children = null } = this.props;
    if (!children || children.length <= 1) {
      return null;
    }

    const count = children.length;
    const { currentIndex } = this.state;
    let newIndex = 0;

    if (isNext) {
      if (currentIndex < count - 1) {
        newIndex = currentIndex + 1;
      } else {
        newIndex = 0;
      }
    } else {
      if (currentIndex === 0) {
        newIndex = count - 1;
      } else {
        newIndex = currentIndex - 1;
      }
    }

    let newNextIndex = newIndex === count - 1 ? 0 : newIndex + 1;
    let newPrevIndex = newIndex === 0 ? count - 1 : newIndex - 1;

    this.setState({
      isNext,
      currentIndex: newIndex,
      nextIndex: newNextIndex,
      prevIndex: newPrevIndex
    });
  };

  handleScroll = (e) => {
    const { deltaY } = e;
    // console.log(deltaY);
    this.setNextSlideDebounced(deltaY < 0);
  }

  render() {
    const { children } = this.props;
    const { currentIndex, nextIndex, prevIndex, isNext } = this.state;

    console.log(`currentIndex: ${currentIndex}`);

    const wrappedChildren = React.Children.map(children, (child, index) => (
      <Slide
        index={index}
        currentIndex={currentIndex}
      >
        { child }
      </Slide>
    ));

    return (
      <ContextProvider>
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
