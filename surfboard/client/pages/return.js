'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../api/api.js');

var _api2 = _interopRequireDefault(_api);

var _tip = require('./../utils/tip.js');

var _tip2 = _interopRequireDefault(_tip);

var _weTextInput = require('./../components/weTextInput.js');

var _weTextInput2 = _interopRequireDefault(_weTextInput);

var _index = require('./../lang/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/* import obj from '../wxs/obj.wxs' */


var Return = function (_wepy$page) {
  _inherits(Return, _wepy$page);

  function Return() {
    var _ref, _this$data;

    var _temp, _this, _ret;

    _classCallCheck(this, Return);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Return.__proto__ || Object.getPrototypeOf(Return)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "idInput": { "xmlns:v-bind": "", "v-bind:label.sync": "idLabel", "value": "1768S180623_0101900001", "disabled": "true" }, "priceInput": { "v-bind:label.sync": "priceLabel", "value": "300", "disabled": "true" }, "typeInput": { "v-bind:label.sync": "typeLabel", "v-bind:value.sync": "_type", "disabled": "true" }, "outTimeInput": { "v-bind:label.sync": "outTimeLabel", "v-bind:value.sync": "outTime", "disabled": "true" }, "returnTimeInput": { "v-bind:label.sync": "returnTimeLabel", "v-bind:value.sync": "returnTime", "disabled": "true" }, "timeInput": { "v-bind:label.sync": "timeLabel", "v-bind:value.sync": "time", "disabled": "true" }, "totalPriceInput": { "v-bind:label.sync": "totalPriceLabel", "v-bind:value.sync": "totalPrice", "disabled": "true" }, "actualCollectionInput": { "v-bind:label.sync": "actualCollectionLabel", "v-bind:placeholder.sync": "actualCollectionPlaceholder", "v-bind:value.sync": "actualCollection", "onChangeEvent": "onActualCollectionChange" }, "changeInput": { "v-bind:label.sync": "changeLabel", "v-bind:value.sync": "change", "disabled": "true" } }, _this.$events = {}, _this.components = {
      idInput: _weTextInput2.default,
      priceInput: _weTextInput2.default,
      typeInput: _weTextInput2.default,
      outTimeInput: _weTextInput2.default,
      returnTimeInput: _weTextInput2.default,
      timeInput: _weTextInput2.default,
      totalPriceInput: _weTextInput2.default,
      actualCollectionInput: _weTextInput2.default,
      changeInput: _weTextInput2.default
    }, _this.data = (_this$data = {
      lang: 'en',
      id: '1768S180623_0101900001',
      time: '3',
      price: '300',
      type: 'return.type.day',
      outTime: '20180620 AM 10:00',
      returnTime: '20180620 PM 01:00'
    }, _defineProperty(_this$data, 'time', '3'), _defineProperty(_this$data, 'totalPrice', '900'), _defineProperty(_this$data, 'actualCollection', '234'), _this$data), _this.computed = Object.assign({
      msg: function msg() {
        return this.lang === 'en' ? this.$parent.globalData.en : this.$parent.globalData.zh;
      },
      _type: function _type() {
        return this.msg[this.type];
      },
      change: function change() {
        console.log(this.actualCollection * 1 - this.totalPrice * 1);
        return "" + (this.actualCollection * 1 - this.totalPrice * 1);
      }
    }, (0, _index.computedGen)('return', ['id', 'price', 'type', 'outTime', 'returnTime', 'time', 'totalPrice', 'actualCollection', 'change'])), _this.watch = {
      'actualCollection': function actualCollection(newVal) {
        console.log(newVal);
      }
    }, _this.methods = {}, _this.events = {
      'lang-change': function langChange(newLang) {
        this.lang = newLang;
      },
      'onActualCollectionChange': function onActualCollectionChange(value) {
        console.log(value);
        this.actualCollection = value;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  /*  wxs =  */ /* {
                obj
                } */

  _createClass(Return, [{
    key: 'onLoad',
    value: function onLoad() {
      this.lang = (0, _index.getLang)();
    }
  }]);

  return Return;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Return , 'pages/return'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJldHVybi5qcyJdLCJuYW1lcyI6WyJSZXR1cm4iLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJpZElucHV0IiwiV2VUZXh0SW5wdXQiLCJwcmljZUlucHV0IiwidHlwZUlucHV0Iiwib3V0VGltZUlucHV0IiwicmV0dXJuVGltZUlucHV0IiwidGltZUlucHV0IiwidG90YWxQcmljZUlucHV0IiwiYWN0dWFsQ29sbGVjdGlvbklucHV0IiwiY2hhbmdlSW5wdXQiLCJkYXRhIiwibGFuZyIsImlkIiwidGltZSIsInByaWNlIiwidHlwZSIsIm91dFRpbWUiLCJyZXR1cm5UaW1lIiwiY29tcHV0ZWQiLCJPYmplY3QiLCJhc3NpZ24iLCJtc2ciLCIkcGFyZW50IiwiZ2xvYmFsRGF0YSIsImVuIiwiemgiLCJfdHlwZSIsImNoYW5nZSIsImNvbnNvbGUiLCJsb2ciLCJhY3R1YWxDb2xsZWN0aW9uIiwidG90YWxQcmljZSIsIndhdGNoIiwibmV3VmFsIiwibWV0aG9kcyIsImV2ZW50cyIsIm5ld0xhbmciLCJ2YWx1ZSIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7Ozs7Ozs7O0FBREE7OztJQUdxQkEsTTs7Ozs7Ozs7Ozs7Ozs7c0xBQ3BCQyxPLEdBQVUsRSxRQUNiQyxNLEdBQVMsRUFBQyxXQUFVLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIscUJBQW9CLFNBQXZDLEVBQWlELFNBQVEsd0JBQXpELEVBQWtGLFlBQVcsTUFBN0YsRUFBWCxFQUFnSCxjQUFhLEVBQUMscUJBQW9CLFlBQXJCLEVBQWtDLFNBQVEsS0FBMUMsRUFBZ0QsWUFBVyxNQUEzRCxFQUE3SCxFQUFnTSxhQUFZLEVBQUMscUJBQW9CLFdBQXJCLEVBQWlDLHFCQUFvQixPQUFyRCxFQUE2RCxZQUFXLE1BQXhFLEVBQTVNLEVBQTRSLGdCQUFlLEVBQUMscUJBQW9CLGNBQXJCLEVBQW9DLHFCQUFvQixTQUF4RCxFQUFrRSxZQUFXLE1BQTdFLEVBQTNTLEVBQWdZLG1CQUFrQixFQUFDLHFCQUFvQixpQkFBckIsRUFBdUMscUJBQW9CLFlBQTNELEVBQXdFLFlBQVcsTUFBbkYsRUFBbFosRUFBNmUsYUFBWSxFQUFDLHFCQUFvQixXQUFyQixFQUFpQyxxQkFBb0IsTUFBckQsRUFBNEQsWUFBVyxNQUF2RSxFQUF6ZixFQUF3a0IsbUJBQWtCLEVBQUMscUJBQW9CLGlCQUFyQixFQUF1QyxxQkFBb0IsWUFBM0QsRUFBd0UsWUFBVyxNQUFuRixFQUExbEIsRUFBcXJCLHlCQUF3QixFQUFDLHFCQUFvQix1QkFBckIsRUFBNkMsMkJBQTBCLDZCQUF2RSxFQUFxRyxxQkFBb0Isa0JBQXpILEVBQTRJLGlCQUFnQiwwQkFBNUosRUFBN3NCLEVBQXE0QixlQUFjLEVBQUMscUJBQW9CLGFBQXJCLEVBQW1DLHFCQUFvQixRQUF2RCxFQUFnRSxZQUFXLE1BQTNFLEVBQW41QixFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNSQyxlQUFTQyxxQkFERDtBQUVSQyxrQkFBWUQscUJBRko7QUFHUkUsaUJBQVdGLHFCQUhIO0FBSVJHLG9CQUFjSCxxQkFKTjtBQUtSSSx1QkFBaUJKLHFCQUxUO0FBTVJLLGlCQUFXTCxxQkFOSDtBQU9STSx1QkFBaUJOLHFCQVBUO0FBUVJPLDZCQUF1QlAscUJBUmY7QUFTUlEsbUJBQWFSO0FBVEwsSyxRQVlWUyxJO0FBQ0VDLFlBQU0sSTtBQUNOQyxVQUFJLHdCO0FBQ0pDLFlBQU0sRztBQUNOQyxhQUFPLEs7QUFDUEMsWUFBTSxpQjtBQUNOQyxlQUFTLG1CO0FBQ1RDLGtCQUFZOzJDQUNOLEcsNkNBQ00sSyxtREFDTSxLLHNCQUdwQkMsUSxHQUFXQyxPQUFPQyxNQUFQLENBQWM7QUFDdkJDLFdBQUssZUFBVztBQUNkLGVBQU8sS0FBS1YsSUFBTCxLQUFjLElBQWQsR0FBcUIsS0FBS1csT0FBTCxDQUFhQyxVQUFiLENBQXdCQyxFQUE3QyxHQUFrRCxLQUFLRixPQUFMLENBQWFDLFVBQWIsQ0FBd0JFLEVBQWpGO0FBQ0QsT0FIc0I7QUFJdkJDLGFBQU8saUJBQVc7QUFDaEIsZUFBTyxLQUFLTCxHQUFMLENBQVMsS0FBS04sSUFBZCxDQUFQO0FBQ0QsT0FOc0I7QUFPdkJZLGNBQVEsa0JBQVc7QUFDakJDLGdCQUFRQyxHQUFSLENBQVksS0FBS0MsZ0JBQUwsR0FBc0IsQ0FBdEIsR0FBMEIsS0FBS0MsVUFBTCxHQUFnQixDQUF0RDtBQUNBLGVBQU8sTUFBTSxLQUFLRCxnQkFBTCxHQUFzQixDQUF0QixHQUEwQixLQUFLQyxVQUFMLEdBQWdCLENBQWhELENBQVA7QUFDRDtBQVZzQixLQUFkLEVBV1Isd0JBQVksUUFBWixFQUFzQixDQUFDLElBQUQsRUFBTyxPQUFQLEVBQWdCLE1BQWhCLEVBQXdCLFNBQXhCLEVBQW1DLFlBQW5DLEVBQWlELE1BQWpELEVBQXlELFlBQXpELEVBQXVFLGtCQUF2RSxFQUEyRixRQUEzRixDQUF0QixDQVhRLEMsUUFpQlhDLEssR0FBUTtBQUNOLDBCQUFvQiwwQkFBU0MsTUFBVCxFQUFpQjtBQUNuQ0wsZ0JBQVFDLEdBQVIsQ0FBWUksTUFBWjtBQUNEO0FBSEssSyxRQU1SQyxPLEdBQVUsRSxRQUdWQyxNLEdBQVM7QUFDUCxxQkFBZSxvQkFBU0MsT0FBVCxFQUFrQjtBQUMvQixhQUFLekIsSUFBTCxHQUFZeUIsT0FBWjtBQUNELE9BSE07QUFJUCxrQ0FBNEIsa0NBQVNDLEtBQVQsRUFBZ0I7QUFDMUNULGdCQUFRQyxHQUFSLENBQVlRLEtBQVo7QUFDQSxhQUFLUCxnQkFBTCxHQUF3Qk8sS0FBeEI7QUFDRDtBQVBNLEs7OztBQWJWLGUsQ0FBYTs7Ozs7OzZCQXVCSDtBQUNQLFdBQUsxQixJQUFMLEdBQVkscUJBQVo7QUFDRDs7OztFQW5FaUMyQixlQUFLQyxJOztrQkFBcEI1QyxNIiwiZmlsZSI6InJldHVybi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgaW1wb3J0IGFwaSBmcm9tICcuLi9hcGkvYXBpLmpzJ1xyXG4gIGltcG9ydCB0aXAgZnJvbSAnLi4vdXRpbHMvdGlwLmpzJ1xyXG4gIGltcG9ydCBXZVRleHRJbnB1dCBmcm9tICcuLi9jb21wb25lbnRzL3dlVGV4dElucHV0J1xyXG4gIC8qIGltcG9ydCBvYmogZnJvbSAnLi4vd3hzL29iai53eHMnICovXHJcbiAgaW1wb3J0IHtnZXRMYW5nLCBzZXRMYW5nLCBjb21wdXRlZEdlbn0gZnJvbSAnLi4vbGFuZy9pbmRleC5qcydcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmV0dXJuIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJpZElucHV0XCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpsYWJlbC5zeW5jXCI6XCJpZExhYmVsXCIsXCJ2YWx1ZVwiOlwiMTc2OFMxODA2MjNfMDEwMTkwMDAwMVwiLFwiZGlzYWJsZWRcIjpcInRydWVcIn0sXCJwcmljZUlucHV0XCI6e1widi1iaW5kOmxhYmVsLnN5bmNcIjpcInByaWNlTGFiZWxcIixcInZhbHVlXCI6XCIzMDBcIixcImRpc2FibGVkXCI6XCJ0cnVlXCJ9LFwidHlwZUlucHV0XCI6e1widi1iaW5kOmxhYmVsLnN5bmNcIjpcInR5cGVMYWJlbFwiLFwidi1iaW5kOnZhbHVlLnN5bmNcIjpcIl90eXBlXCIsXCJkaXNhYmxlZFwiOlwidHJ1ZVwifSxcIm91dFRpbWVJbnB1dFwiOntcInYtYmluZDpsYWJlbC5zeW5jXCI6XCJvdXRUaW1lTGFiZWxcIixcInYtYmluZDp2YWx1ZS5zeW5jXCI6XCJvdXRUaW1lXCIsXCJkaXNhYmxlZFwiOlwidHJ1ZVwifSxcInJldHVyblRpbWVJbnB1dFwiOntcInYtYmluZDpsYWJlbC5zeW5jXCI6XCJyZXR1cm5UaW1lTGFiZWxcIixcInYtYmluZDp2YWx1ZS5zeW5jXCI6XCJyZXR1cm5UaW1lXCIsXCJkaXNhYmxlZFwiOlwidHJ1ZVwifSxcInRpbWVJbnB1dFwiOntcInYtYmluZDpsYWJlbC5zeW5jXCI6XCJ0aW1lTGFiZWxcIixcInYtYmluZDp2YWx1ZS5zeW5jXCI6XCJ0aW1lXCIsXCJkaXNhYmxlZFwiOlwidHJ1ZVwifSxcInRvdGFsUHJpY2VJbnB1dFwiOntcInYtYmluZDpsYWJlbC5zeW5jXCI6XCJ0b3RhbFByaWNlTGFiZWxcIixcInYtYmluZDp2YWx1ZS5zeW5jXCI6XCJ0b3RhbFByaWNlXCIsXCJkaXNhYmxlZFwiOlwidHJ1ZVwifSxcImFjdHVhbENvbGxlY3Rpb25JbnB1dFwiOntcInYtYmluZDpsYWJlbC5zeW5jXCI6XCJhY3R1YWxDb2xsZWN0aW9uTGFiZWxcIixcInYtYmluZDpwbGFjZWhvbGRlci5zeW5jXCI6XCJhY3R1YWxDb2xsZWN0aW9uUGxhY2Vob2xkZXJcIixcInYtYmluZDp2YWx1ZS5zeW5jXCI6XCJhY3R1YWxDb2xsZWN0aW9uXCIsXCJvbkNoYW5nZUV2ZW50XCI6XCJvbkFjdHVhbENvbGxlY3Rpb25DaGFuZ2VcIn0sXCJjaGFuZ2VJbnB1dFwiOntcInYtYmluZDpsYWJlbC5zeW5jXCI6XCJjaGFuZ2VMYWJlbFwiLFwidi1iaW5kOnZhbHVlLnN5bmNcIjpcImNoYW5nZVwiLFwiZGlzYWJsZWRcIjpcInRydWVcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xyXG4gICAgICBpZElucHV0OiBXZVRleHRJbnB1dCxcclxuICAgICAgcHJpY2VJbnB1dDogV2VUZXh0SW5wdXQsXHJcbiAgICAgIHR5cGVJbnB1dDogV2VUZXh0SW5wdXQsXHJcbiAgICAgIG91dFRpbWVJbnB1dDogV2VUZXh0SW5wdXQsXHJcbiAgICAgIHJldHVyblRpbWVJbnB1dDogV2VUZXh0SW5wdXQsXHJcbiAgICAgIHRpbWVJbnB1dDogV2VUZXh0SW5wdXQsXHJcbiAgICAgIHRvdGFsUHJpY2VJbnB1dDogV2VUZXh0SW5wdXQsXHJcbiAgICAgIGFjdHVhbENvbGxlY3Rpb25JbnB1dDogV2VUZXh0SW5wdXQsXHJcbiAgICAgIGNoYW5nZUlucHV0OiBXZVRleHRJbnB1dFxyXG4gICAgfVxyXG5cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIGxhbmc6ICdlbicsXHJcbiAgICAgIGlkOiAnMTc2OFMxODA2MjNfMDEwMTkwMDAwMScsXHJcbiAgICAgIHRpbWU6ICczJyxcclxuICAgICAgcHJpY2U6ICczMDAnLFxyXG4gICAgICB0eXBlOiAncmV0dXJuLnR5cGUuZGF5JyxcclxuICAgICAgb3V0VGltZTogJzIwMTgwNjIwIEFNIDEwOjAwJyxcclxuICAgICAgcmV0dXJuVGltZTogJzIwMTgwNjIwIFBNIDAxOjAwJyxcclxuICAgICAgdGltZTogJzMnLFxyXG4gICAgICB0b3RhbFByaWNlOiAnOTAwJyxcclxuICAgICAgYWN0dWFsQ29sbGVjdGlvbjogJzIzNCcsXHJcbiAgICB9XHJcblxyXG4gICAgY29tcHV0ZWQgPSBPYmplY3QuYXNzaWduKHtcclxuICAgICAgbXNnOiBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5sYW5nID09PSAnZW4nID8gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEuZW4gOiB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS56aDtcclxuICAgICAgfSxcclxuICAgICAgX3R5cGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1zZ1t0aGlzLnR5cGVdXHJcbiAgICAgIH0sXHJcbiAgICAgIGNoYW5nZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5hY3R1YWxDb2xsZWN0aW9uKjEgLSB0aGlzLnRvdGFsUHJpY2UqMSk7XHJcbiAgICAgICAgcmV0dXJuIFwiXCIgKyAodGhpcy5hY3R1YWxDb2xsZWN0aW9uKjEgLSB0aGlzLnRvdGFsUHJpY2UqMSk7XHJcbiAgICAgIH1cclxuICAgIH0sIGNvbXB1dGVkR2VuKCdyZXR1cm4nLCBbJ2lkJywgJ3ByaWNlJywgJ3R5cGUnLCAnb3V0VGltZScsICdyZXR1cm5UaW1lJywgJ3RpbWUnLCAndG90YWxQcmljZScsICdhY3R1YWxDb2xsZWN0aW9uJywgJ2NoYW5nZSddKSlcclxuXHJcbiAgIC8qICB3eHMgPSAgKi8vKiB7XHJcbiAgICAgIG9ialxyXG4gICAgfSAqL1xyXG5cclxuICAgIHdhdGNoID0ge1xyXG4gICAgICAnYWN0dWFsQ29sbGVjdGlvbic6IGZ1bmN0aW9uKG5ld1ZhbCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG5ld1ZhbClcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICB9XHJcblxyXG4gICAgZXZlbnRzID0ge1xyXG4gICAgICAnbGFuZy1jaGFuZ2UnOiBmdW5jdGlvbihuZXdMYW5nKSB7XHJcbiAgICAgICAgdGhpcy5sYW5nID0gbmV3TGFuZ1xyXG4gICAgICB9LFxyXG4gICAgICAnb25BY3R1YWxDb2xsZWN0aW9uQ2hhbmdlJzogZnVuY3Rpb24odmFsdWUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5hY3R1YWxDb2xsZWN0aW9uID0gdmFsdWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgIHRoaXMubGFuZyA9IGdldExhbmcoKVxyXG4gICAgfVxyXG4gIH1cclxuIl19