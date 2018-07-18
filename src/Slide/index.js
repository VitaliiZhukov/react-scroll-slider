import React, { PureComponent } from 'react';
// import { string } from 'prop-types';
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

    const style = {};
    style.zIndex = index === currentIndex
      ? 1
      : -1;

    const childrenWithIndex = React.Children.map(children, child =>
      React.cloneElement(child, { slideIndex: index }));

    return (
      <ContextProvider value={{ index }}>
        <div
          className={'slide__container'}
          style={style}
        >
          { childrenWithIndex }
        </div>
      </ContextProvider>
    );
  }
};

Slide.propTypes = {};

Slide.defaultProps = {};

export default Slide;
