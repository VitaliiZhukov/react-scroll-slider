import React, { PureComponent } from 'react';
import { number, node, oneOfType, arrayOf } from 'prop-types';
import './styles.css';

import { ContextProvider } from './Context';

class Slide extends PureComponent {
  render() {
    const { children, index, currentIndex, nextIndex, prevIndex } = this.props;

    if ((index !== nextIndex)
     && (index !== prevIndex)
     && (index !== currentIndex)) {
      return null;
    }

    const isNext = index === nextIndex;
    const isPrev = index === prevIndex;
    const isCurrent = index === currentIndex;

    const style = {
      zIndex: isCurrent ? 1 : -1
    };

    return (
      <ContextProvider value={{ index, isNext, isPrev, isCurrent }}>
        <div
          className={'slide__container'}
          style={style}
        >
          { children }
        </div>
      </ContextProvider>
    );
  }
};

Slide.propTypes = {
  children: oneOfType([arrayOf(node), node]),
  index: number.isRequired,
  nextIndex: number.isRequired,
  prevIndex: number.isRequired,
  currentIndex: number.isRequired
};

Slide.defaultProps = {
  children: null
};

export default Slide;
