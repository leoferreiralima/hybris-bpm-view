import React from 'react';
import { render } from 'react-dom';

import Bpmn from '@/components/Bpmn';
import Diagram from '@/diagram';
import { GlobalStyle } from '@/styles/GlobalStyle';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Bpmn source={Diagram} />
    </>
  );
};

render(<App />, document.getElementById('root'));
