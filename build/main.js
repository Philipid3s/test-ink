'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ink = require('ink');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = function (_Component) {
	_inherits(Counter, _Component);

	function Counter() {
		_classCallCheck(this, Counter);

		var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this));

		_this.state = {
			i: 0
		};
		return _this;
	}

	_createClass(Counter, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_ink.Box,
				{ borderStyle: 'round', borderColor: 'green', float: 'center', padding: 1 },
				_react2.default.createElement(
					'ul',
					null,
					_react2.default.createElement(
						'li',
						null,
						_react2.default.createElement(
							_ink.Color,
							{ green: true },
							this.state.i,
							' tests passed'
						)
					),
					_react2.default.createElement(
						'li',
						null,
						_react2.default.createElement(
							_ink.Color,
							{ red: true },
							this.state.i,
							' tests failed'
						)
					)
				)
			);
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			this.timer = setInterval(function () {
				_this2.setState({
					i: _this2.state.i + 1
				});
			}, 100);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			clearInterval(this.timer);
		}
	}]);

	return Counter;
}(_react.Component);

(0, _ink.render)(_react2.default.createElement(Counter, null));