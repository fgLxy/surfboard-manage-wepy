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

var _index = require('./../lang/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/* import obj from '../wxs/obj.wxs' */


var Home = function (_wepy$page) {
  _inherits(Home, _wepy$page);

  function Home() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Home);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Home.__proto__ || Object.getPrototypeOf(Home)).call.apply(_ref, [this].concat(args))), _this), _this.components = {}, _this.data = {
      lang: 'en',
      pages: ['rent', 'return', 'sell', 'fix', 'state']
    }, _this.computed = {
      msg: function msg() {
        return this.lang === 'en' ? this.$parent.globalData.en : this.$parent.globalData.zh;
      }

      /*  wxs =  */ /* {
                    obj
                    } */

    }, _this.watch = {
      'lang': function lang(newValue) {
        (0, _index.setLang)(this.lang);
      }
    }, _this.methods = {
      islang: function islang(e) {
        this.$emit('lang-change', e.target.id);
      }
    }, _this.events = {
      'lang-change': function langChange(newLang) {
        this.lang = newLang;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Home, [{
    key: 'onLoad',
    value: function onLoad() {
      this.lang = (0, _index.getLang)();
    }
  }]);

  return Home;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Home , 'pages/home'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiXSwibmFtZXMiOlsiSG9tZSIsImNvbXBvbmVudHMiLCJkYXRhIiwibGFuZyIsInBhZ2VzIiwiY29tcHV0ZWQiLCJtc2ciLCIkcGFyZW50IiwiZ2xvYmFsRGF0YSIsImVuIiwiemgiLCJ3YXRjaCIsIm5ld1ZhbHVlIiwibWV0aG9kcyIsImlzbGFuZyIsImUiLCIkZW1pdCIsInRhcmdldCIsImlkIiwiZXZlbnRzIiwibmV3TGFuZyIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7Ozs7QUFEQTs7O0lBR3FCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFFbkJDLFUsR0FBYSxFLFFBR2JDLEksR0FBTztBQUNMQyxZQUFNLElBREQ7QUFFTEMsYUFBTyxDQUFDLE1BQUQsRUFBUyxRQUFULEVBQW1CLE1BQW5CLEVBQTJCLEtBQTNCLEVBQWtDLE9BQWxDO0FBRkYsSyxRQUtQQyxRLEdBQVc7QUFDVEMsV0FBSyxlQUFXO0FBQ2QsZUFBTyxLQUFLSCxJQUFMLEtBQWMsSUFBZCxHQUFxQixLQUFLSSxPQUFMLENBQWFDLFVBQWIsQ0FBd0JDLEVBQTdDLEdBQWtELEtBQUtGLE9BQUwsQ0FBYUMsVUFBYixDQUF3QkUsRUFBakY7QUFDRDs7QUFHSixtQkFOWSxDQU1DOzs7O0FBTkQsSyxRQVVYQyxLLEdBQVE7QUFDTixjQUFRLGNBQVNDLFFBQVQsRUFBbUI7QUFDekIsNEJBQVEsS0FBS1QsSUFBYjtBQUNEO0FBSEssSyxRQU1SVSxPLEdBQVU7QUFDUkMsWUFEUSxrQkFDREMsQ0FEQyxFQUNFO0FBQ1IsYUFBS0MsS0FBTCxDQUFXLGFBQVgsRUFBMEJELEVBQUVFLE1BQUYsQ0FBU0MsRUFBbkM7QUFDRDtBQUhPLEssUUFNVkMsTSxHQUFTO0FBQ1AscUJBQWUsb0JBQVNDLE9BQVQsRUFBa0I7QUFDL0IsYUFBS2pCLElBQUwsR0FBWWlCLE9BQVo7QUFDRDtBQUhNLEs7Ozs7OzZCQU1BO0FBQ1AsV0FBS2pCLElBQUwsR0FBWSxxQkFBWjtBQUNEOzs7O0VBeEMrQmtCLGVBQUtDLEk7O2tCQUFsQnRCLEkiLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgaW1wb3J0IGFwaSBmcm9tICcuLi9hcGkvYXBpLmpzJ1xyXG4gIGltcG9ydCB0aXAgZnJvbSAnLi4vdXRpbHMvdGlwLmpzJ1xyXG4gIC8qIGltcG9ydCBvYmogZnJvbSAnLi4vd3hzL29iai53eHMnICovXHJcbiAgaW1wb3J0IHtnZXRMYW5nLCBzZXRMYW5nfSBmcm9tICcuLi9sYW5nL2luZGV4LmpzJ1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuXHJcbiAgICBjb21wb25lbnRzID0ge1xyXG4gICAgfVxyXG5cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIGxhbmc6ICdlbicsXHJcbiAgICAgIHBhZ2VzOiBbJ3JlbnQnLCAncmV0dXJuJywgJ3NlbGwnLCAnZml4JywgJ3N0YXRlJ11cclxuICAgIH1cclxuXHJcbiAgICBjb21wdXRlZCA9IHtcclxuICAgICAgbXNnOiBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5sYW5nID09PSAnZW4nID8gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEuZW4gOiB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS56aDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgLyogIHd4cyA9ICAqLy8qIHtcclxuICAgICAgb2JqXHJcbiAgICB9ICovXHJcblxyXG4gICAgd2F0Y2ggPSB7XHJcbiAgICAgICdsYW5nJzogZnVuY3Rpb24obmV3VmFsdWUpIHtcclxuICAgICAgICBzZXRMYW5nKHRoaXMubGFuZylcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIGlzbGFuZyhlKSB7XHJcbiAgICAgICAgdGhpcy4kZW1pdCgnbGFuZy1jaGFuZ2UnLCBlLnRhcmdldC5pZCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBldmVudHMgPSB7XHJcbiAgICAgICdsYW5nLWNoYW5nZSc6IGZ1bmN0aW9uKG5ld0xhbmcpIHtcclxuICAgICAgICB0aGlzLmxhbmcgPSBuZXdMYW5nXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgIHRoaXMubGFuZyA9IGdldExhbmcoKVxyXG4gICAgfVxyXG4gIH1cclxuIl19