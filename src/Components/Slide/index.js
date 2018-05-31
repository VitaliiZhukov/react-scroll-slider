import React, { PureComponent } from 'react';
// import { string } from 'prop-types';
import './styles.css';

class Slide extends PureComponent {
  render() {
    const { children, index, currentIndex } = this.props;

    const style = {
      opacity: index !== currentIndex ? 0 : 1,
      zIndex: index !== currentIndex ? -1 : 1,
    };
    return (
      <div
        className={'slide__container'}
        style={style}
      >
        { children }
      </div>
    );
  }
};

Slide.propTypes = {};

Slide.defaultProps = {};

export default Slide;
