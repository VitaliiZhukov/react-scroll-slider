import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

import ActiveItem from '../../Components/ActiveItem';

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  ${props => {
    const { layout } = props;
    let res;
    switch (layout) {
      case 'LAYOUT_1':
        res = `
          justify-content: flex-start;
        `;
        break;
      case 'LAYOUT_2':
        res = `
          justify-content: flex-end;
        `;
        break;
      case 'LAYOUT_3':
        res = `
          justify-content: flex-start;
          align-items: center;
        `
        break;
      case 'LAYOUT_4':
        res = `
          justify-content: flex-end;
          align-items: center;
        `
        break;
      case 'LAYOUT_5':
        res = `
          justify-content: center;
          align-items: flex-end;
        `
        break;
      default:
        res = 'justify-content: center; align-items: center;'
        break;
    }

      return res;
    }
  }}
`;

const ImageContainer = styled.div`
  background-color: Gray;
  width: 300px;
  height: 800px;
`;

const Content = styled.div`
  width: 400px;
  display: inline-block;
`;

class SlideContent extends Component {
  static propTypes = {

  }

  render() {
    const { title, description, layout } = this.props;

    const forwardStyleContent = {
      transform: 'translateX(-100px) scale(.5)'
    };

    const backwardStyleContent = {
      transform: 'translateX(100px) scale(2)'
    };

    const forwardStyleImage = {
      transform: 'translateY(100%)',
    };

    const backwardStyleImage = {
      transform: 'translateY(-100%)'
    };

    return (
      <Container layout={layout}>
        <ActiveItem
          forwardStyle={forwardStyleContent}
          backwardStyle={backwardStyleContent}
        >
          <Content>
            <h2>
              { title }
            </h2>
              <p>
                { description}
              </p>
          </Content>
        </ActiveItem>

        <ActiveItem
          forwardStyle={forwardStyleImage}
          backwardStyle={backwardStyleImage}
        >
          <ImageContainer />
        </ActiveItem>
      </Container>
    )
  }
};

export default SlideContent;
