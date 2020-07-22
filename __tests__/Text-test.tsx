/**
 * @format
 */

import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import Text from '../src/components/Elements/Text';

it('Text', () => {
  // test props
  let TextPrimary = renderer.create(<Text type="bold">asd</Text>);
  let TextDark = renderer.create(<Text type="regular">asd</Text>);
  let TextLight = renderer.create(<Text type="semibold">asd</Text>);
  let textThin = renderer.create(<Text type="thin">asd</Text>);
  expect({TextPrimary, TextDark, TextLight, textThin}).toMatchSnapshot();
});
