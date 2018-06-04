import React from 'react';

const CarouselContext = React.createContext('carousel');

export const ContextProvider = ({ children, value }) => {
  return (
    <CarouselContext.Provider value={value}>
      {children}
    </CarouselContext.Provider>
  );
};

export const withContext = ComposedComponent => {
  return (props) => (
    <CarouselContext.Consumer>
      {({ currentIndex, prevIndex, nextIndex }) =>
        <ComposedComponent
          {...props}
          currentIndex={currentIndex}
          prevIndex={prevIndex}
          nextIndex={nextIndex}
        />
      }
    </CarouselContext.Consumer>
  )
};
