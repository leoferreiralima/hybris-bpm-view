import React from 'react';

import Button from '@/components/Button';
import { render } from '@testing-library/react';

test('button should renders', () => {
  const { getByText } = render(<Button>ButtonContent</Button>);

  expect(getByText('ButtonContent')).toBeTruthy();
  expect(getByText('ButtonContent')).toHaveAttribute('type', 'button');
});
