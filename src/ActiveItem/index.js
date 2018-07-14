import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types'

import { withContext as withCarouselContext } from '../Carousel/Context';
import { withContext as withSlideContext } from '../Slide/Context';

export class ActiveItem extends PureComponent {
  static propTypes = {

  }

  render() {
    const { children, currentIndex, prevIndex, nextIndex, index, forwardStyle, backwardStyle, stableStyle } = this.props;

    const transition = {
      transition: 'all 1s ease-out'
    };

    let style = { transformOrigin: 'center'};
    if (currentIndex === index) {
      style = { ...stableStyle, ...transition }
    }
    if (index === nextIndex) {
      style = { ...forwardStyle, ...transition }
    }
    if (index === prevIndex) {
      style = { ...backwardStyle, ...transition }
    }

    return (
      <div style={style}>
        { children }
      </div>
    )
  }
};

ActiveItem.defaultProps = {
  stableStyle: {
    opacity: 1,
    transform: 'none'
  }
};

export default withCarouselContext(withSlideContext(ActiveItem));
