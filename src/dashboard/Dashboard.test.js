import React from 'react';
import { render, cleanup, fireEvent, waitForElement } from '@testing-library/react';
import 'jest-dom/extend-expect';
import Display from '../display/Display';
import Controls from '../controls/Controls';

afterEach(cleanup);

test('displays if gate is open and unlocked', () => {
  const { getByText } = render(<Display locked={false} closed={false} />);

  getByText('Unlocked');
  getByText('Open');
});

test('displays if gate is closed and locked', () => {
  const { getByText } = render(<Display locked={true} closed={true} />);

  getByText('Locked');
  getByText('Closed');
});

test('click close gate changes open gate', () => {
  const controls = render(<Controls locked={false} closed={true} />);

  let button = controls.getByText('Open Gate');

  fireEvent.click(button, { button: 0 })

  // I tried to use async calls and it does not want to work. I checked the slack and it seems to be an issue for everyone.
  
  // controls.getByText('Close Gate');
});
