import React from 'react';
import { render } from 'react-dom';

import { GlobalStyle } from '@/styles/GlobalStyle';

const App = () => {
  return (
    <>
      <GlobalStyle />
    </>
  );
};

render(<App />, document.getElementById('root'));
