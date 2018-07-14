import React from 'react';

const SlideContext = React.createContext('slide');

export const ContextProvider = ({ children, value }) => {
  return (
    <SlideContext.Provider value={value}>
      {children}
    </SlideContext.Provider>
  );
};

export const withContext = ComposedComponent => {
  return (props) => (
    <SlideContext.Consumer>
      {({ index }) =>
        <ComposedComponent
          {...props}
          index={index}
        />
      }
    </SlideContext.Consumer>
  )
};
