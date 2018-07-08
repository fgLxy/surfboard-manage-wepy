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

var WeRadioInput = function (_wepy$component) {
  _inherits(WeRadioInput, _wepy$component);

  function WeRadioInput() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, WeRadioInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = WeRadioInput.__proto__ || Object.getPrototypeOf(WeRadioInput)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      label: String,
      placeholder: String,
      radioItems: Array,
      value: {
        type: String,
        twoWay: true
      }
    }, _this.methods = {
      _radioChange: function _radioChange(newVal) {
        this.value = newVal.detail.value;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(WeRadioInput, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return WeRadioInput;
}(_wepy2.default.component);

exports.default = WeRadioInput;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlUmFkaW9JbnB1dC5qcyJdLCJuYW1lcyI6WyJXZVJhZGlvSW5wdXQiLCJwcm9wcyIsImxhYmVsIiwiU3RyaW5nIiwicGxhY2Vob2xkZXIiLCJyYWRpb0l0ZW1zIiwiQXJyYXkiLCJ2YWx1ZSIsInR5cGUiLCJ0d29XYXkiLCJtZXRob2RzIiwiX3JhZGlvQ2hhbmdlIiwibmV3VmFsIiwiZGV0YWlsIiwid2VweSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBRXFCQSxZOzs7Ozs7Ozs7Ozs7OztrTUFDcEJDLEssR0FBUTtBQUNQQyxhQUFPQyxNQURBO0FBRVBDLG1CQUFhRCxNQUZOO0FBR0xFLGtCQUFZQyxLQUhQO0FBSUxDLGFBQU87QUFDTEMsY0FBTUwsTUFERDtBQUVMTSxnQkFBUTtBQUZIO0FBSkYsSyxRQVNQQyxPLEdBQVU7QUFDUkMsa0JBRFEsd0JBQ0tDLE1BREwsRUFDYTtBQUNuQixhQUFLTCxLQUFMLEdBQWFLLE9BQU9DLE1BQVAsQ0FBY04sS0FBM0I7QUFDRDtBQUhPLEs7Ozs7OzZCQUtILENBQ1A7Ozs7RUFoQndDTyxlQUFLQyxTOztrQkFBMUJmLFkiLCJmaWxlIjoid2VSYWRpb0lucHV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2VSYWRpb0lucHV0IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xyXG4gIFx0cHJvcHMgPSB7XHJcbiAgXHRcdGxhYmVsOiBTdHJpbmcsXHJcbiAgXHRcdHBsYWNlaG9sZGVyOiBTdHJpbmcsXHJcbiAgICAgIHJhZGlvSXRlbXM6IEFycmF5LFxyXG4gICAgICB2YWx1ZToge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICB0d29XYXk6IHRydWVcclxuICAgICAgfVxyXG4gIFx0fVxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgX3JhZGlvQ2hhbmdlKG5ld1ZhbCkge1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSBuZXdWYWwuZGV0YWlsLnZhbHVlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcdG9uTG9hZCgpe1xyXG4gIFx0fVxyXG4gIH1cclxuIl19