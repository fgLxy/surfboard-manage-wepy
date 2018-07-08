'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WeTextInput = function (_wepy$component) {
  _inherits(WeTextInput, _wepy$component);

  function WeTextInput() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, WeTextInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = WeTextInput.__proto__ || Object.getPrototypeOf(WeTextInput)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      label: String,
      placeholder: String,
      disabled: String,
      onChangeEvent: String,
      type: {
        type: String,
        required: false,
        default: 'text'
      },
      value: {
        type: String,
        twoWay: true
      }
    }, _this.methods = {
      bindInputHandler: function bindInputHandler(val) {
        if (this.onChangeEvent) {
          this.$emit(this.onChangeEvent, val.detail.value);
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(WeTextInput, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return WeTextInput;
}(_wepy2.default.component);

exports.default = WeTextInput;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlVGV4dElucHV0LmpzIl0sIm5hbWVzIjpbIldlVGV4dElucHV0IiwicHJvcHMiLCJsYWJlbCIsIlN0cmluZyIsInBsYWNlaG9sZGVyIiwiZGlzYWJsZWQiLCJvbkNoYW5nZUV2ZW50IiwidHlwZSIsInJlcXVpcmVkIiwiZGVmYXVsdCIsInZhbHVlIiwidHdvV2F5IiwibWV0aG9kcyIsImJpbmRJbnB1dEhhbmRsZXIiLCJ2YWwiLCIkZW1pdCIsImRldGFpbCIsIndlcHkiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUVxQkEsVzs7Ozs7Ozs7Ozs7Ozs7Z01BQ3BCQyxLLEdBQVE7QUFDUEMsYUFBT0MsTUFEQTtBQUVQQyxtQkFBYUQsTUFGTjtBQUdMRSxnQkFBVUYsTUFITDtBQUlMRyxxQkFBZUgsTUFKVjtBQUtMSSxZQUFNO0FBQ0pBLGNBQU1KLE1BREY7QUFFSkssa0JBQVUsS0FGTjtBQUdKQyxpQkFBUztBQUhMLE9BTEQ7QUFVTEMsYUFBTztBQUNMSCxjQUFNSixNQUREO0FBRUxRLGdCQUFRO0FBRkg7QUFWRixLLFFBZ0JQQyxPLEdBQVU7QUFDUkMsd0JBQWtCLDBCQUFTQyxHQUFULEVBQWM7QUFDOUIsWUFBRyxLQUFLUixhQUFSLEVBQXVCO0FBQ3JCLGVBQUtTLEtBQUwsQ0FBVyxLQUFLVCxhQUFoQixFQUErQlEsSUFBSUUsTUFBSixDQUFXTixLQUExQztBQUNEO0FBQ0Y7QUFMTyxLOzs7Ozs2QkFRSCxDQUNQOzs7O0VBMUJ1Q08sZUFBS0MsUzs7a0JBQXpCbEIsVyIsImZpbGUiOiJ3ZVRleHRJbnB1dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFdlVGV4dElucHV0IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xyXG4gIFx0cHJvcHMgPSB7XHJcbiAgXHRcdGxhYmVsOiBTdHJpbmcsXHJcbiAgXHRcdHBsYWNlaG9sZGVyOiBTdHJpbmcsXHJcbiAgICAgIGRpc2FibGVkOiBTdHJpbmcsXHJcbiAgICAgIG9uQ2hhbmdlRXZlbnQ6IFN0cmluZyxcclxuICAgICAgdHlwZToge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDogZmFsc2UsXHJcbiAgICAgICAgZGVmYXVsdDogJ3RleHQnXHJcbiAgICAgIH0sXHJcbiAgICAgIHZhbHVlOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHR3b1dheTogdHJ1ZVxyXG4gICAgICB9XHJcbiAgXHR9XHJcblxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgYmluZElucHV0SGFuZGxlcjogZnVuY3Rpb24odmFsKSB7XHJcbiAgICAgICAgaWYodGhpcy5vbkNoYW5nZUV2ZW50KSB7XHJcbiAgICAgICAgICB0aGlzLiRlbWl0KHRoaXMub25DaGFuZ2VFdmVudCwgdmFsLmRldGFpbC52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIFx0b25Mb2FkKCl7XHJcbiAgXHR9XHJcbiAgfVxyXG4iXX0=