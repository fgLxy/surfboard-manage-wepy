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

var _weRadioInput = require('./../components/weRadioInput.js');

var _weRadioInput2 = _interopRequireDefault(_weRadioInput);

var _index = require('./../lang/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/* import obj from '../wxs/obj.wxs' */


var Fix = function (_wepy$page) {
  _inherits(Fix, _wepy$page);

  function Fix() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Fix);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Fix.__proto__ || Object.getPrototypeOf(Fix)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "idInput": { "xmlns:v-bind": "", "v-bind:label.sync": "idLabel", "v-bind:value.sync": "id", "disabled": "true" }, "typeInput": { "v-bind:label.sync": "typeLabel", "v-bind:placeholder.sync": "typePlaceholder", "v-bind:radioItems.sync": "typeEnums", "v-bind:value.sync": "type" }, "timeInput": { "type": "number", "v-bind:label.sync": "timeLabel", "v-bind:placeholder.sync": "timePlaceholder", "v-bind:value.sync": "time" } }, _this.$events = {}, _this.components = {
      idInput: _weTextInput2.default,
      priceInput: _weTextInput2.default,
      typeInput: _weRadioInput2.default,
      timeInput: _weTextInput2.default
    }, _this.data = {
      lang: 'en',
      id: '1768S180623_0101900001',
      type: 'rent.type.day',
      time: '',
      price: '300',
      name: '',
      nationality: '',
      passport: '',
      phone: '',
      email: ''
    }, _this.computed = Object.assign({
      msg: function msg() {
        return this.lang === 'en' ? this.$parent.globalData.en : this.$parent.globalData.zh;
      },
      typeEnums: function typeEnums() {
        return this.lang && [{
          name: this.msg ? this.msg['fix.type.day'] : '',
          value: 'rent.type.day'
        }, {
          name: this.msg ? this.msg['fix.type.hour'] : '',
          value: 'rent.type.hour'
        }];
      }
    }, (0, _index.computedGen)('fix', ['id', 'type', 'time'])), _this.watch = {}, _this.methods = {}, _this.events = {
      'lang-change': function langChange(newLang) {
        this.lang = newLang;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  /*  wxs =  */ /* {
                obj
                } */

  _createClass(Fix, [{
    key: 'onLoad',
    value: function onLoad() {
      this.lang = (0, _index.getLang)();
    }
  }]);

  return Fix;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Fix , 'pages/fix'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpeC5qcyJdLCJuYW1lcyI6WyJGaXgiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJpZElucHV0IiwiV2VUZXh0SW5wdXQiLCJwcmljZUlucHV0IiwidHlwZUlucHV0IiwiV2VSYWRpb0lucHV0IiwidGltZUlucHV0IiwiZGF0YSIsImxhbmciLCJpZCIsInR5cGUiLCJ0aW1lIiwicHJpY2UiLCJuYW1lIiwibmF0aW9uYWxpdHkiLCJwYXNzcG9ydCIsInBob25lIiwiZW1haWwiLCJjb21wdXRlZCIsIk9iamVjdCIsImFzc2lnbiIsIm1zZyIsIiRwYXJlbnQiLCJnbG9iYWxEYXRhIiwiZW4iLCJ6aCIsInR5cGVFbnVtcyIsInZhbHVlIiwid2F0Y2giLCJtZXRob2RzIiwiZXZlbnRzIiwibmV3TGFuZyIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7Ozs7Ozs7O0FBREE7OztJQUdxQkEsRzs7Ozs7Ozs7Ozs7Ozs7Z0xBQ3BCQyxPLEdBQVUsRSxRQUNiQyxNLEdBQVMsRUFBQyxXQUFVLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIscUJBQW9CLFNBQXZDLEVBQWlELHFCQUFvQixJQUFyRSxFQUEwRSxZQUFXLE1BQXJGLEVBQVgsRUFBd0csYUFBWSxFQUFDLHFCQUFvQixXQUFyQixFQUFpQywyQkFBMEIsaUJBQTNELEVBQTZFLDBCQUF5QixXQUF0RyxFQUFrSCxxQkFBb0IsTUFBdEksRUFBcEgsRUFBa1EsYUFBWSxFQUFDLFFBQU8sUUFBUixFQUFpQixxQkFBb0IsV0FBckMsRUFBaUQsMkJBQTBCLGlCQUEzRSxFQUE2RixxQkFBb0IsTUFBakgsRUFBOVEsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDUkMsZUFBU0MscUJBREQ7QUFFUkMsa0JBQVlELHFCQUZKO0FBR1JFLGlCQUFXQyxzQkFISDtBQUlSQyxpQkFBV0o7QUFKSCxLLFFBT1ZLLEksR0FBTztBQUNMQyxZQUFNLElBREQ7QUFFTEMsVUFBSSx3QkFGQztBQUdMQyxZQUFNLGVBSEQ7QUFJTEMsWUFBTSxFQUpEO0FBS0xDLGFBQU8sS0FMRjtBQU1MQyxZQUFNLEVBTkQ7QUFPTEMsbUJBQWEsRUFQUjtBQVFMQyxnQkFBVSxFQVJMO0FBU0xDLGFBQU8sRUFURjtBQVVMQyxhQUFPO0FBVkYsSyxRQWFQQyxRLEdBQVdDLE9BQU9DLE1BQVAsQ0FBYztBQUN2QkMsV0FBSyxlQUFXO0FBQ2QsZUFBTyxLQUFLYixJQUFMLEtBQWMsSUFBZCxHQUFxQixLQUFLYyxPQUFMLENBQWFDLFVBQWIsQ0FBd0JDLEVBQTdDLEdBQWtELEtBQUtGLE9BQUwsQ0FBYUMsVUFBYixDQUF3QkUsRUFBakY7QUFDRCxPQUhzQjtBQUl2QkMsaUJBQVcscUJBQVc7QUFDcEIsZUFBTyxLQUFLbEIsSUFBTCxJQUFhLENBQUM7QUFDckJLLGdCQUFNLEtBQUtRLEdBQUwsR0FBVyxLQUFLQSxHQUFMLENBQVMsY0FBVCxDQUFYLEdBQXNDLEVBRHZCO0FBRXJCTSxpQkFBTztBQUZjLFNBQUQsRUFHbkI7QUFDRGQsZ0JBQU0sS0FBS1EsR0FBTCxHQUFXLEtBQUtBLEdBQUwsQ0FBUyxlQUFULENBQVgsR0FBdUMsRUFENUM7QUFFRE0saUJBQU87QUFGTixTQUhtQixDQUFwQjtBQU9EO0FBWnNCLEtBQWQsRUFhUix3QkFBWSxLQUFaLEVBQW1CLENBQUMsSUFBRCxFQUFPLE1BQVAsRUFBZSxNQUFmLENBQW5CLENBYlEsQyxRQW1CWEMsSyxHQUFRLEUsUUFHUkMsTyxHQUFVLEUsUUFHVkMsTSxHQUFTO0FBQ1AscUJBQWUsb0JBQVNDLE9BQVQsRUFBa0I7QUFDL0IsYUFBS3ZCLElBQUwsR0FBWXVCLE9BQVo7QUFDRDtBQUhNLEs7OztBQVZWLGUsQ0FBYTs7Ozs7OzZCQWdCSDtBQUNQLFdBQUt2QixJQUFMLEdBQVkscUJBQVo7QUFDRDs7OztFQXpEOEJ3QixlQUFLQyxJOztrQkFBakJyQyxHIiwiZmlsZSI6ImZpeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgaW1wb3J0IGFwaSBmcm9tICcuLi9hcGkvYXBpLmpzJ1xyXG4gIGltcG9ydCB0aXAgZnJvbSAnLi4vdXRpbHMvdGlwLmpzJ1xyXG4gIGltcG9ydCBXZVRleHRJbnB1dCBmcm9tICcuLi9jb21wb25lbnRzL3dlVGV4dElucHV0J1xyXG4gIGltcG9ydCBXZVJhZGlvSW5wdXQgZnJvbSAnLi4vY29tcG9uZW50cy93ZVJhZGlvSW5wdXQnXHJcbiAgLyogaW1wb3J0IG9iaiBmcm9tICcuLi93eHMvb2JqLnd4cycgKi9cclxuICBpbXBvcnQge2dldExhbmcsIHNldExhbmcsIGNvbXB1dGVkR2VufSBmcm9tICcuLi9sYW5nL2luZGV4LmpzJ1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBGaXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcImlkSW5wdXRcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOmxhYmVsLnN5bmNcIjpcImlkTGFiZWxcIixcInYtYmluZDp2YWx1ZS5zeW5jXCI6XCJpZFwiLFwiZGlzYWJsZWRcIjpcInRydWVcIn0sXCJ0eXBlSW5wdXRcIjp7XCJ2LWJpbmQ6bGFiZWwuc3luY1wiOlwidHlwZUxhYmVsXCIsXCJ2LWJpbmQ6cGxhY2Vob2xkZXIuc3luY1wiOlwidHlwZVBsYWNlaG9sZGVyXCIsXCJ2LWJpbmQ6cmFkaW9JdGVtcy5zeW5jXCI6XCJ0eXBlRW51bXNcIixcInYtYmluZDp2YWx1ZS5zeW5jXCI6XCJ0eXBlXCJ9LFwidGltZUlucHV0XCI6e1widHlwZVwiOlwibnVtYmVyXCIsXCJ2LWJpbmQ6bGFiZWwuc3luY1wiOlwidGltZUxhYmVsXCIsXCJ2LWJpbmQ6cGxhY2Vob2xkZXIuc3luY1wiOlwidGltZVBsYWNlaG9sZGVyXCIsXCJ2LWJpbmQ6dmFsdWUuc3luY1wiOlwidGltZVwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XHJcbiAgICAgIGlkSW5wdXQ6IFdlVGV4dElucHV0LFxyXG4gICAgICBwcmljZUlucHV0OiBXZVRleHRJbnB1dCxcclxuICAgICAgdHlwZUlucHV0OiBXZVJhZGlvSW5wdXQsXHJcbiAgICAgIHRpbWVJbnB1dDogV2VUZXh0SW5wdXRcclxuICAgIH1cclxuXHJcbiAgICBkYXRhID0ge1xyXG4gICAgICBsYW5nOiAnZW4nLFxyXG4gICAgICBpZDogJzE3NjhTMTgwNjIzXzAxMDE5MDAwMDEnLFxyXG4gICAgICB0eXBlOiAncmVudC50eXBlLmRheScsXHJcbiAgICAgIHRpbWU6ICcnLFxyXG4gICAgICBwcmljZTogJzMwMCcsXHJcbiAgICAgIG5hbWU6ICcnLFxyXG4gICAgICBuYXRpb25hbGl0eTogJycsXHJcbiAgICAgIHBhc3Nwb3J0OiAnJyxcclxuICAgICAgcGhvbmU6ICcnLFxyXG4gICAgICBlbWFpbDogJydcclxuICAgIH1cclxuXHJcbiAgICBjb21wdXRlZCA9IE9iamVjdC5hc3NpZ24oe1xyXG4gICAgICBtc2c6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxhbmcgPT09ICdlbicgPyB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5lbiA6IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnpoO1xyXG4gICAgICB9LFxyXG4gICAgICB0eXBlRW51bXM6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxhbmcgJiYgW3tcclxuICAgICAgICBuYW1lOiB0aGlzLm1zZyA/IHRoaXMubXNnWydmaXgudHlwZS5kYXknXSA6ICcnLFxyXG4gICAgICAgIHZhbHVlOiAncmVudC50eXBlLmRheSdcclxuICAgICAgfSwge1xyXG4gICAgICAgIG5hbWU6IHRoaXMubXNnID8gdGhpcy5tc2dbJ2ZpeC50eXBlLmhvdXInXSA6ICcnLFxyXG4gICAgICAgIHZhbHVlOiAncmVudC50eXBlLmhvdXInXHJcbiAgICAgIH1dO1xyXG4gICAgICB9XHJcbiAgICB9LCBjb21wdXRlZEdlbignZml4JywgWydpZCcsICd0eXBlJywgJ3RpbWUnXSkpXHJcblxyXG4gICAvKiAgd3hzID0gICovLyoge1xyXG4gICAgICBvYmpcclxuICAgIH0gKi9cclxuXHJcbiAgICB3YXRjaCA9IHtcclxuICAgIH1cclxuXHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgfVxyXG5cclxuICAgIGV2ZW50cyA9IHtcclxuICAgICAgJ2xhbmctY2hhbmdlJzogZnVuY3Rpb24obmV3TGFuZykge1xyXG4gICAgICAgIHRoaXMubGFuZyA9IG5ld0xhbmdcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgdGhpcy5sYW5nID0gZ2V0TGFuZygpXHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=