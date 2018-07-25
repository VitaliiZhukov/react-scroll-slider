import { PureComponent } from 'react';
import { number, object } from 'prop-types'

import { withContext as withCarouselContext } from '../Carousel/Context';
import { withContext as withSlideContext } from '../Slide/Context';

export class ActiveItem extends PureComponent {
  render() {
    const {
      children,
      isCurrent,
      isPrev,
      isNext,
      forwardStyle,
      backwardStyle,
      stableStyle
    } = this.props;

    const transition = {
      transition: 'all 1s ease-out'
    };

    let st = { transformOrigin: 'center'};
    if (isCurrent) {
      st = { ...stableStyle, ...transition }
    }
    if (isNext) {
      st = { ...forwardStyle, ...transition }
    }
    if (isPrev) {
      st = { ...backwardStyle, ...transition }
    }

    return children(st);
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
