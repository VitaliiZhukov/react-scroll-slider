import React, { Component } from 'react';

import Carousel from './Components/Carousel';
import Content from './SideComponents/Content';
import WithImage from './SideComponents/WithImage';

class App extends Component {
  render() {
    return (
      <Carousel>
        <Content
          title={'Slide 1'}
          description={'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur mag'}
          layout={'LAYOUT_1'}
        />

        <WithImage />

        <Content
          title={'Slide 2'}
          description={'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur mag'}
          layout={'LAYOUT_2'}
        />
        {/* <Content
          title={'Slide 3'}
          description={'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur mag'}
          layout={'LAYOUT_3'}
        /> */}
        {/* <Content
          title={'Slide 4'}
          description={'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur mag'}
          layout={'LAYOUT_4'}
        />
        <Content
          title={'Slide 5'}
          description={'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur mag'}
          layout={'LAYOUT_5'}
        /> */}
      </Carousel>
    );
  }
};

export default App;
