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


var Sell = function (_wepy$page) {
  _inherits(Sell, _wepy$page);

  function Sell() {
    var _ref, _this$data;

    var _temp, _this, _ret;

    _classCallCheck(this, Sell);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Sell.__proto__ || Object.getPrototypeOf(Sell)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "idInput": { "xmlns:v-bind": "", "v-bind:label.sync": "idLabel", "value": "1768S180623_0101900001", "disabled": "true" }, "priceInput": { "v-bind:label.sync": "priceLabel", "value": "300", "disabled": "true" }, "nameInput": { "v-bind:label.sync": "nameLabel", "v-bind:placeholder.sync": "namePlaceholder", "v-bind:value.sync": "name" }, "nationalityInput": { "v-bind:label.sync": "nationalityLabel", "v-bind:placeholder.sync": "nationalityPlaceholder", "v-bind:value.sync": "nationality" }, "passportInput": { "v-bind:label.sync": "passportLabel", "v-bind:placeholder.sync": "passportPlaceholder", "v-bind:value.sync": "passport" }, "phoneInput": { "v-bind:label.sync": "phoneLabel", "v-bind:placeholder.sync": "phonePlaceholder", "v-bind:value.sync": "phone" }, "emailInput": { "v-bind:label.sync": "emailLabel", "v-bind:placeholder.sync": "emailPlaceholder", "v-bind:value.sync": "email" }, "totalPriceInput": { "v-bind:label.sync": "totalPriceLabel", "v-bind:value.sync": "totalPrice", "disabled": "true" }, "actualCollectionInput": { "v-bind:label.sync": "actualCollectionLabel", "v-bind:placeholder.sync": "actualCollectionPlaceholder", "v-bind:value.sync": "actualCollection", "onChangeEvent": "onActualCollectionChange" }, "changeInput": { "v-bind:label.sync": "changeLabel", "v-bind:value.sync": "change", "disabled": "true" } }, _this.$events = {}, _this.components = {
      idInput: _weTextInput2.default,
      priceInput: _weTextInput2.default,
      nameInput: _weTextInput2.default,
      nationalityInput: _weTextInput2.default,
      passportInput: _weTextInput2.default,
      phoneInput: _weTextInput2.default,
      emailInput: _weTextInput2.default,
      totalPriceInput: _weTextInput2.default,
      actualCollectionInput: _weTextInput2.default,
      changeInput: _weTextInput2.default
    }, _this.data = (_this$data = {
      lang: 'en',
      id: '1768S180623_0101900001',
      time: '3',
      price: '300',
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
    }, (0, _index.computedGen)('sell', ['id', 'price', 'name', 'nationality', 'passport', 'phone', 'email', 'totalPrice', 'actualCollection', 'change'])), _this.watch = {
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

  _createClass(Sell, [{
    key: 'onLoad',
    value: function onLoad() {
      this.lang = (0, _index.getLang)();
    }
  }]);

  return Sell;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Sell , 'pages/sell'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGwuanMiXSwibmFtZXMiOlsiU2VsbCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImlkSW5wdXQiLCJXZVRleHRJbnB1dCIsInByaWNlSW5wdXQiLCJuYW1lSW5wdXQiLCJuYXRpb25hbGl0eUlucHV0IiwicGFzc3BvcnRJbnB1dCIsInBob25lSW5wdXQiLCJlbWFpbElucHV0IiwidG90YWxQcmljZUlucHV0IiwiYWN0dWFsQ29sbGVjdGlvbklucHV0IiwiY2hhbmdlSW5wdXQiLCJkYXRhIiwibGFuZyIsImlkIiwidGltZSIsInByaWNlIiwib3V0VGltZSIsInJldHVyblRpbWUiLCJjb21wdXRlZCIsIk9iamVjdCIsImFzc2lnbiIsIm1zZyIsIiRwYXJlbnQiLCJnbG9iYWxEYXRhIiwiZW4iLCJ6aCIsIl90eXBlIiwidHlwZSIsImNoYW5nZSIsImNvbnNvbGUiLCJsb2ciLCJhY3R1YWxDb2xsZWN0aW9uIiwidG90YWxQcmljZSIsIndhdGNoIiwibmV3VmFsIiwibWV0aG9kcyIsImV2ZW50cyIsIm5ld0xhbmciLCJ2YWx1ZSIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7Ozs7Ozs7O0FBREE7OztJQUdxQkEsSTs7Ozs7Ozs7Ozs7Ozs7a0xBQ3BCQyxPLEdBQVUsRSxRQUNiQyxNLEdBQVMsRUFBQyxXQUFVLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIscUJBQW9CLFNBQXZDLEVBQWlELFNBQVEsd0JBQXpELEVBQWtGLFlBQVcsTUFBN0YsRUFBWCxFQUFnSCxjQUFhLEVBQUMscUJBQW9CLFlBQXJCLEVBQWtDLFNBQVEsS0FBMUMsRUFBZ0QsWUFBVyxNQUEzRCxFQUE3SCxFQUFnTSxhQUFZLEVBQUMscUJBQW9CLFdBQXJCLEVBQWlDLDJCQUEwQixpQkFBM0QsRUFBNkUscUJBQW9CLE1BQWpHLEVBQTVNLEVBQXFULG9CQUFtQixFQUFDLHFC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QUFLQyxJOztrQkFBbEI3QyxJIiwiZmlsZSI6InNlbGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gIGltcG9ydCBhcGkgZnJvbSAnLi4vYXBpL2FwaS5qcydcclxuICBpbXBvcnQgdGlwIGZyb20gJy4uL3V0aWxzL3RpcC5qcydcclxuICBpbXBvcnQgV2VUZXh0SW5wdXQgZnJvbSAnLi4vY29tcG9uZW50cy93ZVRleHRJbnB1dCdcclxuICAvKiBpbXBvcnQgb2JqIGZyb20gJy4uL3d4cy9vYmoud3hzJyAqL1xyXG4gIGltcG9ydCB7Z2V0TGFuZywgc2V0TGFuZywgY29tcHV0ZWRHZW59IGZyb20gJy4uL2xhbmcvaW5kZXguanMnXHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGwgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcImlkSW5wdXRcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOmxhYmVsLnN5bmNcIjpcImlkTGFiZWxcIixcInZhbHVlXCI6XCIxNzY4UzE4MDYyM18wMTAxOTAwMDAxXCIsXCJkaXNhYmxlZFwiOlwidHJ1ZVwifSxcInByaWNlSW5wdXRcIjp7XCJ2LWJpbmQ6bGFiZWwuc3luY1wiOlwicHJpY2VMYWJlbFwiLFwidmFsdWVcIjpcIjMwMFwiLFwiZGlzYWJsZWRcIjpcInRydWVcIn0sXCJuYW1lSW5wdXRcIjp7XCJ2LWJpbmQ6bGFiZWwuc3luY1wiOlwibmFtZUxhYmVsXCIsXCJ2LWJpbmQ6cGxhY2Vob2xkZXIuc3luY1wiOlwibmFtZVBsYWNlaG9sZGVyXCIsXCJ2LWJpbmQ6dmFsdWUuc3luY1wiOlwibmFtZVwifSxcIm5hdGlvbmFsaXR5SW5wdXRcIjp7XCJ2LWJpbmQ6bGFiZWwuc3luY1wiOlwibmF0aW9uYWxpdHlMYWJlbFwiLFwidi1iaW5kOnBsYWNlaG9sZGVyLnN5bmNcIjpcIm5hdGlvbmFsaXR5UGxhY2Vob2xkZXJcIixcInYtYmluZDp2YWx1ZS5zeW5jXCI6XCJuYXRpb25hbGl0eVwifSxcInBhc3Nwb3J0SW5wdXRcIjp7XCJ2LWJpbmQ6bGFiZWwuc3luY1wiOlwicGFzc3BvcnRMYWJlbFwiLFwidi1iaW5kOnBsYWNlaG9sZGVyLnN5bmNcIjpcInBhc3Nwb3J0UGxhY2Vob2xkZXJcIixcInYtYmluZDp2YWx1ZS5zeW5jXCI6XCJwYXNzcG9ydFwifSxcInBob25lSW5wdXRcIjp7XCJ2LWJpbmQ6bGFiZWwuc3luY1wiOlwicGhvbmVMYWJlbFwiLFwidi1iaW5kOnBsYWNlaG9sZGVyLnN5bmNcIjpcInBob25lUGxhY2Vob2xkZXJcIixcInYtYmluZDp2YWx1ZS5zeW5jXCI6XCJwaG9uZVwifSxcImVtYWlsSW5wdXRcIjp7XCJ2LWJpbmQ6bGFiZWwuc3luY1wiOlwiZW1haWxMYWJlbFwiLFwidi1iaW5kOnBsYWNlaG9sZGVyLnN5bmNcIjpcImVtYWlsUGxhY2Vob2xkZXJcIixcInYtYmluZDp2YWx1ZS5zeW5jXCI6XCJlbWFpbFwifSxcInRvdGFsUHJpY2VJbnB1dFwiOntcInYtYmluZDpsYWJlbC5zeW5jXCI6XCJ0b3RhbFByaWNlTGFiZWxcIixcInYtYmluZDp2YWx1ZS5zeW5jXCI6XCJ0b3RhbFByaWNlXCIsXCJkaXNhYmxlZFwiOlwidHJ1ZVwifSxcImFjdHVhbENvbGxlY3Rpb25JbnB1dFwiOntcInYtYmluZDpsYWJlbC5zeW5jXCI6XCJhY3R1YWxDb2xsZWN0aW9uTGFiZWxcIixcInYtYmluZDpwbGFjZWhvbGRlci5zeW5jXCI6XCJhY3R1YWxDb2xsZWN0aW9uUGxhY2Vob2xkZXJcIixcInYtYmluZDp2YWx1ZS5zeW5jXCI6XCJhY3R1YWxDb2xsZWN0aW9uXCIsXCJvbkNoYW5nZUV2ZW50XCI6XCJvbkFjdHVhbENvbGxlY3Rpb25DaGFuZ2VcIn0sXCJjaGFuZ2VJbnB1dFwiOntcInYtYmluZDpsYWJlbC5zeW5jXCI6XCJjaGFuZ2VMYWJlbFwiLFwidi1iaW5kOnZhbHVlLnN5bmNcIjpcImNoYW5nZVwiLFwiZGlzYWJsZWRcIjpcInRydWVcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xyXG4gICAgICBpZElucHV0OiBXZVRleHRJbnB1dCxcclxuICAgICAgcHJpY2VJbnB1dDogV2VUZXh0SW5wdXQsXHJcbiAgICAgIG5hbWVJbnB1dDogV2VUZXh0SW5wdXQsXHJcbiAgICAgIG5hdGlvbmFsaXR5SW5wdXQ6IFdlVGV4dElucHV0LFxyXG4gICAgICBwYXNzcG9ydElucHV0OiBXZVRleHRJbnB1dCxcclxuICAgICAgcGhvbmVJbnB1dDogV2VUZXh0SW5wdXQsXHJcbiAgICAgIGVtYWlsSW5wdXQ6IFdlVGV4dElucHV0LFxyXG4gICAgICB0b3RhbFByaWNlSW5wdXQ6IFdlVGV4dElucHV0LFxyXG4gICAgICBhY3R1YWxDb2xsZWN0aW9uSW5wdXQ6IFdlVGV4dElucHV0LFxyXG4gICAgICBjaGFuZ2VJbnB1dDogV2VUZXh0SW5wdXRcclxuICAgIH1cclxuXHJcbiAgICBkYXRhID0ge1xyXG4gICAgICBsYW5nOiAnZW4nLFxyXG4gICAgICBpZDogJzE3NjhTMTgwNjIzXzAxMDE5MDAwMDEnLFxyXG4gICAgICB0aW1lOiAnMycsXHJcbiAgICAgIHByaWNlOiAnMzAwJyxcclxuICAgICAgb3V0VGltZTogJzIwMTgwNjIwIEFNIDEwOjAwJyxcclxuICAgICAgcmV0dXJuVGltZTogJzIwMTgwNjIwIFBNIDAxOjAwJyxcclxuICAgICAgdGltZTogJzMnLFxyXG4gICAgICB0b3RhbFByaWNlOiAnOTAwJyxcclxuICAgICAgYWN0dWFsQ29sbGVjdGlvbjogJzIzNCcsXHJcbiAgICB9XHJcblxyXG4gICAgY29tcHV0ZWQgPSBPYmplY3QuYXNzaWduKHtcclxuICAgICAgbXNnOiBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5sYW5nID09PSAnZW4nID8gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEuZW4gOiB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS56aDtcclxuICAgICAgfSxcclxuICAgICAgX3R5cGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1zZ1t0aGlzLnR5cGVdXHJcbiAgICAgIH0sXHJcbiAgICAgIGNoYW5nZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5hY3R1YWxDb2xsZWN0aW9uKjEgLSB0aGlzLnRvdGFsUHJpY2UqMSk7XHJcbiAgICAgICAgcmV0dXJuIFwiXCIgKyAodGhpcy5hY3R1YWxDb2xsZWN0aW9uKjEgLSB0aGlzLnRvdGFsUHJpY2UqMSk7XHJcbiAgICAgIH1cclxuICAgIH0sIGNvbXB1dGVkR2VuKCdzZWxsJywgWydpZCcsICdwcmljZScsICduYW1lJywgJ25hdGlvbmFsaXR5JywgJ3Bhc3Nwb3J0JywgXHJcbiAgICAncGhvbmUnLCAnZW1haWwnLCAndG90YWxQcmljZScsICdhY3R1YWxDb2xsZWN0aW9uJywgJ2NoYW5nZSddKSlcclxuXHJcbiAgIC8qICB3eHMgPSAgKi8vKiB7XHJcbiAgICAgIG9ialxyXG4gICAgfSAqL1xyXG5cclxuICAgIHdhdGNoID0ge1xyXG4gICAgICAnYWN0dWFsQ29sbGVjdGlvbic6IGZ1bmN0aW9uKG5ld1ZhbCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG5ld1ZhbClcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICB9XHJcblxyXG4gICAgZXZlbnRzID0ge1xyXG4gICAgICAnbGFuZy1jaGFuZ2UnOiBmdW5jdGlvbihuZXdMYW5nKSB7XHJcbiAgICAgICAgdGhpcy5sYW5nID0gbmV3TGFuZ1xyXG4gICAgICB9LFxyXG4gICAgICAnb25BY3R1YWxDb2xsZWN0aW9uQ2hhbmdlJzogZnVuY3Rpb24odmFsdWUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5hY3R1YWxDb2xsZWN0aW9uID0gdmFsdWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgIHRoaXMubGFuZyA9IGdldExhbmcoKVxyXG4gICAgfVxyXG4gIH1cclxuIl19