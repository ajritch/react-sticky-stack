'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsTestUtils = require('react-addons-test-utils');

var _reactAddonsTestUtils2 = _interopRequireDefault(_reactAddonsTestUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

jest.dontMock('../sticky-stack-item');

var StickyStackItem = require('../sticky-stack-item').default;

describe('StickyStackItem', function () {
  var register = undefined;

  beforeEach(function () {
    register = jest.genMockFunction();

    var FakeContext = _react2.default.createClass({
      displayName: 'FakeContext',

      propTypes: {
        children: _react2.default.PropTypes.element
      },
      getChildContext: function getChildContext() {
        return {
          getStyle: function getStyle() {},
          register: register
        };
      },
      render: function render() {
        return _react2.default.createElement(
          'div',
          null,
          this.props.children
        );
      },

      childContextTypes: {
        getStyle: _react2.default.PropTypes.func,
        register: _react2.default.PropTypes.func
      }
    });

    _reactAddonsTestUtils2.default.renderIntoDocument(_react2.default.createElement(
      FakeContext,
      null,
      _react2.default.createElement(StickyStackItem, { position: 0 })
    ));
  });

  it('registers itself to the context', function () {
    expect(register).toBeCalled();
  });
});