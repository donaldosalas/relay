/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+relay
 * @format
 */

'use strict';

const React = require('React');
const RelayClassic = require('RelayClassic');

describe('isRelayContainer', function() {
  let MockComponent;
  let MockContainer;

  beforeEach(function() {
    jest.resetModules();

    MockComponent = class extends React.Component {
      render() {
        return <div />;
      }
    };

    MockContainer = RelayClassic.createContainer(MockComponent, {
      fragments: {},
    });
  });

  it('identifies RelayClassic containers correctly', () => {
    expect(RelayClassic.isContainer(MockContainer)).toBe(true);

    expect(RelayClassic.isContainer(MockComponent)).toBe(false);
  });
});
