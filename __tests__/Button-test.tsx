/**
 * @format
 */

import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import Button from '../src/components/Elements/Button';

it('Button', () => {
  // test props
  let buttonPrimary = renderer.create(<Button title="asd" type="primary" />);
  let buttonDark = renderer.create(<Button title="asd" type="dark" />);
  let buttonLight = renderer.create(<Button title="asd" type="light" />);
  expect({buttonPrimary, buttonDark, buttonLight}).toMatchSnapshot();
});
