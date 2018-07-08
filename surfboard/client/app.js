'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

var _index = require('./lang/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_wepy$app) {
  _inherits(_class, _wepy$app);

  function _class() {
    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

    _this.data = {};
    _this.globalData = {
      en: _index.en,
      zh: _index.zh
    };
    _this.config = {
      pages: ['pages/login', 'pages/home', 'pages/rent', 'pages/return', 'pages/sell', 'pages/fix', 'pages/state'],
      window: {
        backgroundTextStyle: 'light',
        navigationStyle: 'custom'
      }
    };
    _this.events = {
      'lang-chhange': function langChhange(newValue) {
        this.$broadcast('lang-change', newValue);
      }
    };

    _this.use('promisify');
    return _this;
  }

  _createClass(_class, [{
    key: 'onLaunch',
    value: function onLaunch() {
      console.log('on launch');
    }
  }]);

  return _class;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_class, {"noPromiseAPI":["createSelectorQuery"]}));
require('./_wepylogs.js')

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJkYXRhIiwiZ2xvYmFsRGF0YSIsImVuIiwiemgiLCJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uU3R5bGUiLCJldmVudHMiLCJuZXdWYWx1ZSIsIiRicm9hZGNhc3QiLCJ1c2UiLCJjb25zb2xlIiwibG9nIiwid2VweSIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7O0FBR0Usb0JBQWU7QUFBQTs7QUFBQTs7QUFBQSxVQUtmQSxJQUxlLEdBS1IsRUFMUTtBQUFBLFVBUWZDLFVBUmUsR0FRRjtBQUNYQyxVQUFJQSxTQURPO0FBRVhDLFVBQUlBO0FBRk8sS0FSRTtBQUFBLFVBY2ZDLE1BZGUsR0FjTjtBQUNQQyxhQUFPLENBQ0wsYUFESyxFQUVMLFlBRkssRUFHTCxZQUhLLEVBSUwsY0FKSyxFQUtMLFlBTEssRUFNTCxXQU5LLEVBT0wsYUFQSyxDQURBO0FBVVBDLGNBQVE7QUFDTkMsNkJBQXFCLE9BRGY7QUFFTkMseUJBQWlCO0FBRlg7QUFWRCxLQWRNO0FBQUEsVUE4QmZDLE1BOUJlLEdBOEJOO0FBQ1Asc0JBQWdCLHFCQUFTQyxRQUFULEVBQW1CO0FBQ2pDLGFBQUtDLFVBQUwsQ0FBZ0IsYUFBaEIsRUFBK0JELFFBQS9CO0FBQ0Q7QUFITSxLQTlCTTs7QUFFYixVQUFLRSxHQUFMLENBQVMsV0FBVDtBQUZhO0FBR2Q7Ozs7K0JBaUNVO0FBQ1RDLGNBQVFDLEdBQVIsQ0FBWSxXQUFaO0FBQ0Q7Ozs7RUF2QzBCQyxlQUFLQyxHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQgJ3dlcHktYXN5bmMtZnVuY3Rpb24nXHJcbmltcG9ydCB7ZW4sIHpofSBmcm9tICcuL2xhbmcvaW5kZXguanMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkuYXBwIHtcclxuICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICBzdXBlcigpXHJcbiAgICB0aGlzLnVzZSgncHJvbWlzaWZ5JylcclxuICB9XHJcblxyXG4gIGRhdGEgPSB7XHJcbiAgfVxyXG5cclxuICBnbG9iYWxEYXRhID0ge1xyXG4gICAgZW46IGVuLFxyXG4gICAgemg6IHpoLFxyXG4gIH1cclxuXHJcblxyXG4gIGNvbmZpZyA9IHtcclxuICAgIHBhZ2VzOiBbXHJcbiAgICAgICdwYWdlcy9sb2dpbicsXHJcbiAgICAgICdwYWdlcy9ob21lJyxcclxuICAgICAgJ3BhZ2VzL3JlbnQnLFxyXG4gICAgICAncGFnZXMvcmV0dXJuJyxcclxuICAgICAgJ3BhZ2VzL3NlbGwnLFxyXG4gICAgICAncGFnZXMvZml4JyxcclxuICAgICAgJ3BhZ2VzL3N0YXRlJ1xyXG4gICAgXSxcclxuICAgIHdpbmRvdzoge1xyXG4gICAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiAnbGlnaHQnLFxyXG4gICAgICBuYXZpZ2F0aW9uU3R5bGU6ICdjdXN0b20nXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBldmVudHMgPSB7XHJcbiAgICAnbGFuZy1jaGhhbmdlJzogZnVuY3Rpb24obmV3VmFsdWUpIHtcclxuICAgICAgdGhpcy4kYnJvYWRjYXN0KCdsYW5nLWNoYW5nZScsIG5ld1ZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uTGF1bmNoKCkge1xyXG4gICAgY29uc29sZS5sb2coJ29uIGxhdW5jaCcpXHJcbiAgfVxyXG59XHJcbiJdfQ==