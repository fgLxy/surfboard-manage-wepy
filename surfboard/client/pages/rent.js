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


var Rent = function (_wepy$page) {
  _inherits(Rent, _wepy$page);

  function Rent() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Rent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Rent.__proto__ || Object.getPrototypeOf(Rent)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "idInput": { "xmlns:v-bind": "", "v-bind:label.sync": "idLabel", "v-bind:value.sync": "id", "disabled": "true" }, "priceInput": { "v-bind:label.sync": "priceLabel", "v-bind:placeholder.sync": "pricePlaceholder", "v-bind:value.sync": "price", "disabled": "true" }, "typeInput": { "v-bind:label.sync": "typeLabel", "v-bind:placeholder.sync": "typePlaceholder", "v-bind:radioItems.sync": "typeEnums", "v-bind:value.sync": "type" }, "timeInput": { "type": "number", "v-bind:label.sync": "timeLabel", "v-bind:placeholder.sync": "timePlaceholder", "v-bind:value.sync": "time" }, "nameInput": { "v-bind:label.sync": "nameLabel", "v-bind:placeholder.sync": "namePlaceholder", "v-bind:value.sync": "name" }, "nationalityInput": { "v-bind:label.sync": "nationalityLabel", "v-bind:placeholder.sync": "nationalityPlaceholder", "v-bind:value.sync": "nationality" }, "passportInput": { "v-bind:label.sync": "passportLabel", "v-bind:placeholder.sync": "passportPlaceholder", "v-bind:value.sync": "passport" }, "phoneInput": { "v-bind:label.sync": "phoneLabel", "v-bind:placeholder.sync": "phonePlaceholder", "v-bind:value.sync": "phone" }, "emailInput": { "v-bind:label.sync": "emailLabel", "v-bind:placeholder.sync": "emailPlaceholder", "v-bind:value.sync": "email" } }, _this.$events = {}, _this.components = {
      idInput: _weTextInput2.default,
      priceInput: _weTextInput2.default,
      typeInput: _weRadioInput2.default,
      timeInput: _weTextInput2.default,
      nameInput: _weTextInput2.default,
      nationalityInput: _weTextInput2.default,
      passportInput: _weTextInput2.default,
      phoneInput: _weTextInput2.default,
      emailInput: _weTextInput2.default
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
          name: this.msg ? this.msg['rent.type.day'] : '',
          value: 'rent.type.day'
        }, {
          name: this.msg ? this.msg['rent.type.hour'] : '',
          value: 'rent.type.hour'
        }];
      }
    }, (0, _index.computedGen)('rent', ['id', 'price', 'type', 'time', 'name', 'nationality', 'passport', 'phone', 'email'])), _this.watch = {}, _this.methods = {}, _this.events = {
      'lang-change': function langChange(newLang) {
        this.lang = newLang;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  /*  wxs =  */ /* {
                obj
                } */

  _createClass(Rent, [{
    key: 'onLoad',
    value: function onLoad() {
      this.lang = (0, _index.getLang)();
    }
  }]);

  return Rent;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Rent , 'pages/rent'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbnQuanMiXSwibmFtZXMiOlsiUmVudCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImlkSW5wdXQiLCJXZVRleHRJbnB1dCIsInByaWNlSW5wdXQiLCJ0eXBlSW5wdXQiLCJXZVJhZGlvSW5wdXQiLCJ0aW1lSW5wdXQiLCJuYW1lSW5wdXQiLCJuYXRpb25hbGl0eUlucHV0IiwicGFzc3BvcnRJbnB1dCIsInBob25lSW5wdXQiLCJlbWFpbElucHV0IiwiZGF0YSIsImxhbmciLCJpZCIsInR5cGUiLCJ0aW1lIiwicHJpY2UiLCJuYW1lIiwibmF0aW9uYWxpdHkiLCJwYXNzcG9ydCIsInBob25lIiwiZW1haWwiLCJjb21wdXRlZCIsIk9iamVjdCIsImFzc2lnbiIsIm1zZyIsIiRwYXJlbnQiLCJnbG9iYWxEYXRhIiwiZW4iLCJ6aCIsInR5cGVFbnVtcyIsInZhbHVlIiwid2F0Y2giLCJtZXRob2RzIiwiZXZlbnRzIiwibmV3TGFuZyIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7Ozs7Ozs7O0FBREE7OztJQUdxQkEsSTs7Ozs7Ozs7Ozs7Ozs7a0xBQ3BCQyxPLEdBQVUsRSxRQUNiQyxNLEdBQVMsRUFBQyxXQUFVLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIscUJBQW9CLFNBQXZDLEVBQWlELHFCQUFvQixJQUFyRSxFQUEwRSxZQUFXLE1BQXJGLEVBQVgsRUFBd0csY0FBYSxFQUFDLHFCQUFvQixZQUFyQixFQUFrQywyQkFBMEIsa0JBQTVELEVBQStFLHFCQUFvQixPQUFuRyxFQUEyRyxZQUFXLE1BQXRILEVBQXJILEVBQW1QLGFBQVksRUFBQyxxQkFBb0IsV0FBckIsRUFBaUMsMkJBQTBCLGlCQUEzRCxFQUE2RSwwQkFBeUIsV0FBdEcsRUFBa0gscUJBQW9CLE1BQXRJLEVBQS9QLEVBQTZZLGFBQVksRUFBQyxRQUFPLFFBQVIsRUFBaUIscUJBQW9CLFdBQXJDLEVBQWlELDJCQUEwQixpQkFBM0UsRUFBNkYscUJBQW9CLE1BQWpILEVBQXpaLEVBQWtoQixhQUFZLEVBQUMscUJBQW9CLFdBQXJCLEVBQWlDLDJCQUEwQixpQkFBM0QsRUFBNkUscUJBQW9CLE1BQWpHLEVBQTloQixFQUF1b0Isb0JBQW1CLEVBQUMscUJBQW9CLGtCQUFyQixFQUF3QywyQkFBMEIsd0JBQWxFLEVBQTJGLHFCQUFvQixhQUEvRyxFQUExcEIsRUFBd3hCLGlCQUFnQixFQUFDLHFCQUFvQixlQUFyQixFQUFxQywyQkFBMEIscUJBQS9ELEVBQXFGLHFCQUFvQixVQUF6RyxFQUF4eUIsRUFBNjVCLGNBQWEsRUFBQyxxQkFBb0IsWUFBckIsRUFBa0MsMkJBQTBCLGtCQUE1RCxFQUErRSxxQkFBb0IsT0FBbkcsRUFBMTZCLEVBQXNoQyxjQUFhLEVBQUMscUJBQW9CLFlBQXJCLEVBQWtDLDJCQUEwQixrQkFBNUQsRUFBK0UscUJBQW9CLE9BQW5HLEVBQW5pQyxFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNSQyxlQUFTQyxxQkFERDtBQUVSQyxrQkFBWUQscUJBRko7QUFHUkUsaUJBQVdDLHNCQUhIO0FBSVJDLGlCQUFXSixxQkFKSDtBQUtSSyxpQkFBV0wscUJBTEg7QUFNUk0sd0JBQWtCTixxQkFOVjtBQU9STyxxQkFBZVAscUJBUFA7QUFRUlEsa0JBQVlSLHFCQVJKO0FBU1JTLGtCQUFZVDtBQVRKLEssUUFZVlUsSSxHQUFPO0FBQ0xDLFlBQU0sSUFERDtBQUVMQyxVQUFJLHdCQUZDO0FBR0xDLFlBQU0sZUFIRDtBQUlMQyxZQUFNLEVBSkQ7QUFLTEMsYUFBTyxLQUxGO0FBTUxDLFlBQU0sRUFORDtBQU9MQyxtQkFBYSxFQVBSO0FBUUxDLGdCQUFVLEVBUkw7QUFTTEMsYUFBTyxFQVRGO0FBVUxDLGFBQU87QUFWRixLLFFBYVBDLFEsR0FBV0MsT0FBT0MsTUFBUCxDQUFjO0FBQ3ZCQyxXQUFLLGVBQVc7QUFDZCxlQUFPLEtBQUtiLElBQUwsS0FBYyxJQUFkLEdBQXFCLEtBQUtjLE9BQUwsQ0FBYUMsVUFBYixDQUF3QkMsRUFBN0MsR0FBa0QsS0FBS0YsT0FBTCxDQUFhQyxVQUFiLENBQXdCRSxFQUFqRjtBQUNELE9BSHNCO0FBSXZCQyxpQkFBVyxxQkFBVztBQUNwQixlQUFPLEtBQUtsQixJQUFMLElBQWEsQ0FBQztBQUNyQkssZ0JBQU0sS0FBS1EsR0FBTCxHQUFXLEtBQUtBLEdBQUwsQ0FBUyxlQUFULENBQVgsR0FBdUMsRUFEeEI7QUFFckJNLGlCQUFPO0FBRmMsU0FBRCxFQUduQjtBQUNEZCxnQkFBTSxLQUFLUSxHQUFMLEdBQVcsS0FBS0EsR0FBTCxDQUFTLGdCQUFULENBQVgsR0FBd0MsRUFEN0M7QUFFRE0saUJBQU87QUFGTixTQUhtQixDQUFwQjtBQU9EO0FBWnNCLEtBQWQsRUFhUix3QkFBWSxNQUFaLEVBQW9CLENBQUMsSUFBRCxFQUFPLE9BQVAsRUFBZ0IsTUFBaEIsRUFBd0IsTUFBeEIsRUFBZ0MsTUFBaEMsRUFBd0MsYUFBeEMsRUFBdUQsVUFBdkQsRUFBbUUsT0FBbkUsRUFBNEUsT0FBNUUsQ0FBcEIsQ0FiUSxDLFFBbUJYQyxLLEdBQVEsRSxRQUdSQyxPLEdBQVUsRSxRQUdWQyxNLEdBQVM7QUFDUCxxQkFBZSxvQkFBU0MsT0FBVCxFQUFrQjtBQUMvQixhQUFLdkIsSUFBTCxHQUFZdUIsT0FBWjtBQUNEO0FBSE0sSzs7O0FBVlYsZSxDQUFhOzs7Ozs7NkJBZ0JIO0FBQ1AsV0FBS3ZCLElBQUwsR0FBWSxxQkFBWjtBQUNEOzs7O0VBOUQrQndCLGVBQUtDLEk7O2tCQUFsQjFDLEkiLCJmaWxlIjoicmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgaW1wb3J0IGFwaSBmcm9tICcuLi9hcGkvYXBpLmpzJ1xyXG4gIGltcG9ydCB0aXAgZnJvbSAnLi4vdXRpbHMvdGlwLmpzJ1xyXG4gIGltcG9ydCBXZVRleHRJbnB1dCBmcm9tICcuLi9jb21wb25lbnRzL3dlVGV4dElucHV0J1xyXG4gIGltcG9ydCBXZVJhZGlvSW5wdXQgZnJvbSAnLi4vY29tcG9uZW50cy93ZVJhZGlvSW5wdXQnXHJcbiAgLyogaW1wb3J0IG9iaiBmcm9tICcuLi93eHMvb2JqLnd4cycgKi9cclxuICBpbXBvcnQge2dldExhbmcsIHNldExhbmcsIGNvbXB1dGVkR2VufSBmcm9tICcuLi9sYW5nL2luZGV4LmpzJ1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBSZW50IGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJpZElucHV0XCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpsYWJlbC5zeW5jXCI6XCJpZExhYmVsXCIsXCJ2LWJpbmQ6dmFsdWUuc3luY1wiOlwiaWRcIixcImRpc2FibGVkXCI6XCJ0cnVlXCJ9LFwicHJpY2VJbnB1dFwiOntcInYtYmluZDpsYWJlbC5zeW5jXCI6XCJwcmljZUxhYmVsXCIsXCJ2LWJpbmQ6cGxhY2Vob2xkZXIuc3luY1wiOlwicHJpY2VQbGFjZWhvbGRlclwiLFwidi1iaW5kOnZhbHVlLnN5bmNcIjpcInByaWNlXCIsXCJkaXNhYmxlZFwiOlwidHJ1ZVwifSxcInR5cGVJbnB1dFwiOntcInYtYmluZDpsYWJlbC5zeW5jXCI6XCJ0eXBlTGFiZWxcIixcInYtYmluZDpwbGFjZWhvbGRlci5zeW5jXCI6XCJ0eXBlUGxhY2Vob2xkZXJcIixcInYtYmluZDpyYWRpb0l0ZW1zLnN5bmNcIjpcInR5cGVFbnVtc1wiLFwidi1iaW5kOnZhbHVlLnN5bmNcIjpcInR5cGVcIn0sXCJ0aW1lSW5wdXRcIjp7XCJ0eXBlXCI6XCJudW1iZXJcIixcInYtYmluZDpsYWJlbC5zeW5jXCI6XCJ0aW1lTGFiZWxcIixcInYtYmluZDpwbGFjZWhvbGRlci5zeW5jXCI6XCJ0aW1lUGxhY2Vob2xkZXJcIixcInYtYmluZDp2YWx1ZS5zeW5jXCI6XCJ0aW1lXCJ9LFwibmFtZUlucHV0XCI6e1widi1iaW5kOmxhYmVsLnN5bmNcIjpcIm5hbWVMYWJlbFwiLFwidi1iaW5kOnBsYWNlaG9sZGVyLnN5bmNcIjpcIm5hbWVQbGFjZWhvbGRlclwiLFwidi1iaW5kOnZhbHVlLnN5bmNcIjpcIm5hbWVcIn0sXCJuYXRpb25hbGl0eUlucHV0XCI6e1widi1iaW5kOmxhYmVsLnN5bmNcIjpcIm5hdGlvbmFsaXR5TGFiZWxcIixcInYtYmluZDpwbGFjZWhvbGRlci5zeW5jXCI6XCJuYXRpb25hbGl0eVBsYWNlaG9sZGVyXCIsXCJ2LWJpbmQ6dmFsdWUuc3luY1wiOlwibmF0aW9uYWxpdHlcIn0sXCJwYXNzcG9ydElucHV0XCI6e1widi1iaW5kOmxhYmVsLnN5bmNcIjpcInBhc3Nwb3J0TGFiZWxcIixcInYtYmluZDpwbGFjZWhvbGRlci5zeW5jXCI6XCJwYXNzcG9ydFBsYWNlaG9sZGVyXCIsXCJ2LWJpbmQ6dmFsdWUuc3luY1wiOlwicGFzc3BvcnRcIn0sXCJwaG9uZUlucHV0XCI6e1widi1iaW5kOmxhYmVsLnN5bmNcIjpcInBob25lTGFiZWxcIixcInYtYmluZDpwbGFjZWhvbGRlci5zeW5jXCI6XCJwaG9uZVBsYWNlaG9sZGVyXCIsXCJ2LWJpbmQ6dmFsdWUuc3luY1wiOlwicGhvbmVcIn0sXCJlbWFpbElucHV0XCI6e1widi1iaW5kOmxhYmVsLnN5bmNcIjpcImVtYWlsTGFiZWxcIixcInYtYmluZDpwbGFjZWhvbGRlci5zeW5jXCI6XCJlbWFpbFBsYWNlaG9sZGVyXCIsXCJ2LWJpbmQ6dmFsdWUuc3luY1wiOlwiZW1haWxcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xyXG4gICAgICBpZElucHV0OiBXZVRleHRJbnB1dCxcclxuICAgICAgcHJpY2VJbnB1dDogV2VUZXh0SW5wdXQsXHJcbiAgICAgIHR5cGVJbnB1dDogV2VSYWRpb0lucHV0LFxyXG4gICAgICB0aW1lSW5wdXQ6IFdlVGV4dElucHV0LFxyXG4gICAgICBuYW1lSW5wdXQ6IFdlVGV4dElucHV0LFxyXG4gICAgICBuYXRpb25hbGl0eUlucHV0OiBXZVRleHRJbnB1dCxcclxuICAgICAgcGFzc3BvcnRJbnB1dDogV2VUZXh0SW5wdXQsXHJcbiAgICAgIHBob25lSW5wdXQ6IFdlVGV4dElucHV0LFxyXG4gICAgICBlbWFpbElucHV0OiBXZVRleHRJbnB1dCxcclxuICAgIH1cclxuXHJcbiAgICBkYXRhID0ge1xyXG4gICAgICBsYW5nOiAnZW4nLFxyXG4gICAgICBpZDogJzE3NjhTMTgwNjIzXzAxMDE5MDAwMDEnLFxyXG4gICAgICB0eXBlOiAncmVudC50eXBlLmRheScsXHJcbiAgICAgIHRpbWU6ICcnLFxyXG4gICAgICBwcmljZTogJzMwMCcsXHJcbiAgICAgIG5hbWU6ICcnLFxyXG4gICAgICBuYXRpb25hbGl0eTogJycsXHJcbiAgICAgIHBhc3Nwb3J0OiAnJyxcclxuICAgICAgcGhvbmU6ICcnLFxyXG4gICAgICBlbWFpbDogJydcclxuICAgIH1cclxuXHJcbiAgICBjb21wdXRlZCA9IE9iamVjdC5hc3NpZ24oe1xyXG4gICAgICBtc2c6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxhbmcgPT09ICdlbicgPyB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5lbiA6IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnpoO1xyXG4gICAgICB9LFxyXG4gICAgICB0eXBlRW51bXM6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxhbmcgJiYgW3tcclxuICAgICAgICBuYW1lOiB0aGlzLm1zZyA/IHRoaXMubXNnWydyZW50LnR5cGUuZGF5J10gOiAnJyxcclxuICAgICAgICB2YWx1ZTogJ3JlbnQudHlwZS5kYXknXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBuYW1lOiB0aGlzLm1zZyA/IHRoaXMubXNnWydyZW50LnR5cGUuaG91ciddIDogJycsXHJcbiAgICAgICAgdmFsdWU6ICdyZW50LnR5cGUuaG91cidcclxuICAgICAgfV07XHJcbiAgICAgIH1cclxuICAgIH0sIGNvbXB1dGVkR2VuKCdyZW50JywgWydpZCcsICdwcmljZScsICd0eXBlJywgJ3RpbWUnLCAnbmFtZScsICduYXRpb25hbGl0eScsICdwYXNzcG9ydCcsICdwaG9uZScsICdlbWFpbCddKSlcclxuXHJcbiAgIC8qICB3eHMgPSAgKi8vKiB7XHJcbiAgICAgIG9ialxyXG4gICAgfSAqL1xyXG5cclxuICAgIHdhdGNoID0ge1xyXG4gICAgfVxyXG5cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICB9XHJcblxyXG4gICAgZXZlbnRzID0ge1xyXG4gICAgICAnbGFuZy1jaGFuZ2UnOiBmdW5jdGlvbihuZXdMYW5nKSB7XHJcbiAgICAgICAgdGhpcy5sYW5nID0gbmV3TGFuZ1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICB0aGlzLmxhbmcgPSBnZXRMYW5nKClcclxuICAgIH1cclxuICB9XHJcbiJdfQ==