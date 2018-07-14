import React, { PureComponent } from 'react';
import { number, object } from 'prop-types'

import { withContext as withCarouselContext } from '../Carousel/Context';
import { withContext as withSlideContext } from '../Slide/Context';

export class ActiveItem extends PureComponent {
  render() {
    const { children, currentIndex, prevIndex, nextIndex, index, forwardStyle, backwardStyle, stableStyle, style } = this.props;

    const transition = {
      transition: 'all 1s ease-out'
    };

    let st = { transformOrigin: 'center'};
    if (currentIndex === index) {
      st = { ...stableStyle, ...transition }
    }
    if (index === nextIndex) {
      st = { ...forwardStyle, ...transition }
    }
    if (index === prevIndex) {
      st = { ...backwardStyle, ...transition }
    }

    return (
      <div style={{ ...st, ...style }}>
        { children }
      </div>
    )
  }
};

ActiveItem.propTypes = {
  currentIndex: number.isRequired,
  prevIndex: number.isRequired,
  nextIndex: number.isRequired,
  forwardStyle: object,
  backwardStyle: object,
  stableStyle: object
}

ActiveItem.defaultProps = {
  stableStyle: {
    opacity: 1,
    transform: 'none'
  }
};

export default withCarouselContext(withSlideContext(ActiveItem));
