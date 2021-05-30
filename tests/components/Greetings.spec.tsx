import React from 'react';

import Greetings from '@/components/Greetings';
import { render } from '@testing-library/react';

test('Greetings should renders', () => {
  const { getByText, getByAltText } = render(<Greetings />);

  expect(
    getByText(
      'An Electron boilerplate including TypeScript, React, Jest and ESLint.',
    ),
  ).toBeTruthy();
  expect(getByAltText('ReactJS logo')).toBeTruthy();
});
