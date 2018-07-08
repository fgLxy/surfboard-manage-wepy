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

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = function (_wepy$page) {
  _inherits(Login, _wepy$page);

  function Login() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Login);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Login.__proto__ || Object.getPrototypeOf(Login)).call.apply(_ref, [this].concat(args))), _this), _this.components = {}, _this.data = {
      // 语种
      language: '',
      // 静态文字
      m: {},
      enbtnBg: '',
      zhbtnBg: '',
      // 全局装填登录验证返回值
      json: {},
      isHidden: false,
      rawData: null,
      encryptedData: null

      //监听请求返回状态码，继而判断下一步做什么
    }, _this.watch = {
      json: function json(newValue, oldValue) {
        switch (newValue.code) {
          // 登陆成功
          case 0:
            _tip2.default.success('Login success！', 1000);
            _wepy2.default.redirectTo({ url: './home' });
            break;
          // 需通过userInfo验证登录
          case 10000:
            this.queryAuthorizationInformation();
            this.json = null;
            break;
          // 需通过phone验证登录
          case 10003:
          case 10004:
            this.isHidden = true;
            this.json = null;
            break;
          // 无权限登录
          case 10006:
            _tip2.default.error(newValue.data, function () {
              _wepy2.default.navigateBack(-1);
            });
            break;
          // 微信接口请求错误
          case -500:
          case 10001:
          case 10002:
          case 10005:
            _tip2.default.error('error：' + newValue.errno);
            console.log('status:' + newValue.errno + '，' + newValue.data);
            this.json = null;
            break;
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Login, [{
    key: 'getUnionidByCode',


    // 通过code获取unionId验证用户身份
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var res, data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _wepy2.default.login();

              case 2:
                res = _context.sent;
                _context.next = 5;
                return _api2.default.getIsRegisteredusersByCodeid({
                  query: {
                    code: res.code
                  }
                });

              case 5:
                data = _context.sent;

                this.json = data.data;
                if (data.statusCode >= 400) {
                  _tip2.default.error('error!' + data.statusCode);
                }
                this.$apply();

              case 9:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getUnionidByCode() {
        return _ref2.apply(this, arguments);
      }

      return getUnionidByCode;
    }()

    // 通过userInfo获取unionId验证用户身份

  }, {
    key: 'getUnionidByUserinfo',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(info) {
        var data;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _api2.default.getIsRegisteredusersByUserinfo({
                  query: info
                });

              case 2:
                data = _context2.sent;

                this.json = data.data;
                if (data.statusCode >= 400) {
                  _tip2.default.error('error!' + data.statusCode);
                }
                this.$apply();

              case 6:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getUnionidByUserinfo(_x) {
        return _ref3.apply(this, arguments);
      }

      return getUnionidByUserinfo;
    }()

    // 通过phone验证登录

  }, {
    key: 'getUnionidByPhone',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(phone) {
        var data;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _api2.default.getIsRegisteredusersByPhone({
                  query: {
                    iv: phone.iv,
                    encryptedData: phone.encryptedData
                  }
                });

              case 2:
                data = _context3.sent;

                this.json = data.data;
                if (data.statusCode >= 400) {
                  _tip2.default.error('error！' + data.statusCode);
                }
                this.$apply();

              case 6:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getUnionidByPhone(_x2) {
        return _ref4.apply(this, arguments);
      }

      return getUnionidByPhone;
    }()

    // 查询授权信息

  }, {
    key: 'queryAuthorizationInformation',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var res, infoRes;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _wepy2.default.getSetting();

              case 2:
                res = _context4.sent;

                if (!res.authSetting['scope.userInfo']) {
                  _context4.next = 14;
                  break;
                }

                this.isHidden = true;
                this.$apply();
                _context4.next = 8;
                return _wepy2.default.getUserInfo();

              case 8:
                infoRes = _context4.sent;

                this.rawData = infoRes.rawData;
                this.encryptedData = infoRes.encryptedData;
                this.getUnionidByUserinfo(infoRes);
                _context4.next = 15;
                break;

              case 14:
                console.log('没有授权，请点击按钮授权');

              case 15:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function queryAuthorizationInformation() {
        return _ref5.apply(this, arguments);
      }

      return queryAuthorizationInformation;
    }()

    // 点击按钮，授权并获取userInfo，再进行处理

  }, {
    key: 'bindGetUserInfo',
    value: function bindGetUserInfo(e) {
      this.rawData = e.detail.rawData;
      this.encryptedData = e.detail.encryptedData;
      this.getUnionidByUserinfo(e.detail);
    }

    // 点击按钮，授权并获取phone，再进行处理

  }, {
    key: 'bindgetphonenumber',
    value: function bindgetphonenumber(e) {
      var data = e.detail;
      data.rawData = this.rawData;
      data.encryptedData2 = this.encryptedData;
      this.getUnionidByPhone(data);
    }
  }, {
    key: 'islang',
    value: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(e) {
        var target, lang;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                target = e.target.id;
                lang = target === 'en' ? 'en' : 'zh';
                _context5.next = 4;
                return (0, _index.setLang)(lang);

              case 4:
                _context5.next = 6;
                return getLang('login', this);

              case 6:
                this.langbtnbgChange(target);

              case 7:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function islang(_x3) {
        return _ref6.apply(this, arguments);
      }

      return islang;
    }()
  }, {
    key: 'langbtnbgChange',
    value: function langbtnbgChange(target) {
      if (target === 'en') {
        this.enbtnBg = 'langBtn-tap';
        this.zhbtnBg = '';
      } else {
        this.zhbtnBg = 'langBtn-tap';
        this.enbtnBg = '';
      }
      this.$apply();
    }
  }, {
    key: 'onLoad',
    value: function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _wepy2.default.redirectTo({ url: './home' });
                this.language === 'en' ? this.enbtnBg = 'langBtn-tap' : this.zhbtnBg = 'langBtn-tap';
                // 解开下行注释，便能开启登录验证
                // await this.getUnionidByCode()

              case 2:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function onLoad() {
        return _ref7.apply(this, arguments);
      }

      return onLoad;
    }()
  }]);

  return Login;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Login , 'pages/login'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbIkxvZ2luIiwiY29tcG9uZW50cyIsImRhdGEiLCJsYW5ndWFnZSIsIm0iLCJlbmJ0bkJnIiwiemhidG5CZyIsImpzb24iLCJpc0hpZGRlbiIsInJhd0RhdGEiLCJlbmNyeXB0ZWREYXRhIiwid2F0Y2giLCJuZXdWYWx1ZSIsIm9sZFZhbHVlIiwiY29kZSIsInRpcCIsInN1Y2Nlc3MiLCJ3ZXB5IiwicmVkaXJlY3RUbyIsInVybCIsInF1ZXJ5QXV0aG9yaXphdGlvbkluZm9ybWF0aW9uIiwiZXJyb3IiLCJuYXZpZ2F0ZUJhY2siLCJlcnJubyIsImNvbnNvbGUiLCJsb2ciLCJsb2dpbiIsInJlcyIsImFwaSIsImdldElzUmVnaXN0ZXJlZHVzZXJzQnlDb2RlaWQiLCJxdWVyeSIsInN0YXR1c0NvZGUiLCIkYXBwbHkiLCJpbmZvIiwiZ2V0SXNSZWdpc3RlcmVkdXNlcnNCeVVzZXJpbmZvIiwicGhvbmUiLCJnZXRJc1JlZ2lzdGVyZWR1c2Vyc0J5UGhvbmUiLCJpdiIsImdldFNldHRpbmciLCJhdXRoU2V0dGluZyIsImdldFVzZXJJbmZvIiwiaW5mb1JlcyIsImdldFVuaW9uaWRCeVVzZXJpbmZvIiwiZSIsImRldGFpbCIsImVuY3J5cHRlZERhdGEyIiwiZ2V0VW5pb25pZEJ5UGhvbmUiLCJ0YXJnZXQiLCJpZCIsImxhbmciLCJnZXRMYW5nIiwibGFuZ2J0bmJnQ2hhbmdlIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLFUsR0FBYSxFLFFBR2JDLEksR0FBTztBQUNMO0FBQ0FDLGdCQUFVLEVBRkw7QUFHTDtBQUNBQyxTQUFHLEVBSkU7QUFLTEMsZUFBUyxFQUxKO0FBTUxDLGVBQVMsRUFOSjtBQU9MO0FBQ0FDLFlBQU0sRUFSRDtBQVNMQyxnQkFBVSxLQVRMO0FBVUxDLGVBQVMsSUFWSjtBQVdM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S2hCLFFBQUwsS0FBa0IsSUFBbEIsR0FBeUIsS0FBS0UsT0FBTCxHQUFlLGFBQXhDLEdBQXdELEtBQUtDLE9BQUwsR0FBZSxhQUF2RTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUF0SitCVyxlQUFLbUMsSTs7a0JBQW5CcEQsSyIsImZpbGUiOiJsb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgaW1wb3J0IGFwaSBmcm9tICcuLi9hcGkvYXBpLmpzJ1xyXG4gIGltcG9ydCB0aXAgZnJvbSAnLi4vdXRpbHMvdGlwLmpzJ1xyXG4gIGltcG9ydCB7bXNnLCBzZXRMYW5nfSBmcm9tICcuLi9sYW5nL2luZGV4LmpzJ1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dpbiBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb21wb25lbnRzID0ge1xyXG4gICAgfVxyXG5cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIC8vIOivreenjVxyXG4gICAgICBsYW5ndWFnZTogJycsXHJcbiAgICAgIC8vIOmdmeaAgeaWh+Wtl1xyXG4gICAgICBtOiB7fSxcclxuICAgICAgZW5idG5CZzogJycsXHJcbiAgICAgIHpoYnRuQmc6ICcnLFxyXG4gICAgICAvLyDlhajlsYDoo4XloavnmbvlvZXpqozor4Hov5Tlm57lgLxcclxuICAgICAganNvbjoge30sXHJcbiAgICAgIGlzSGlkZGVuOiBmYWxzZSxcclxuICAgICAgcmF3RGF0YTogbnVsbCxcclxuICAgICAgZW5jcnlwdGVkRGF0YTogbnVsbFxyXG4gICAgfVxyXG5cclxuICAgIC8v55uR5ZCs6K+35rGC6L+U5Zue54q25oCB56CB77yM57un6ICM5Yik5pat5LiL5LiA5q2l5YGa5LuA5LmIXHJcbiAgICB3YXRjaCA9IHtcclxuICAgICAganNvbiAobmV3VmFsdWUsIG9sZFZhbHVlKSB7XHJcbiAgICAgICAgc3dpdGNoKG5ld1ZhbHVlLmNvZGUpIHtcclxuICAgICAgICAgIC8vIOeZu+mZhuaIkOWKn1xyXG4gICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICB0aXAuc3VjY2VzcygnTG9naW4gc3VjY2Vzc++8gScsIDEwMDApXHJcbiAgICAgICAgICAgIHdlcHkucmVkaXJlY3RUbyh7dXJsOiAnLi9ob21lJ30pXHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAvLyDpnIDpgJrov4d1c2VySW5mb+mqjOivgeeZu+W9lVxyXG4gICAgICAgICAgY2FzZSAxMDAwMDpcclxuICAgICAgICAgICAgdGhpcy5xdWVyeUF1dGhvcml6YXRpb25JbmZvcm1hdGlvbigpXHJcbiAgICAgICAgICAgIHRoaXMuanNvbiA9IG51bGxcclxuICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgIC8vIOmcgOmAmui/h3Bob25l6aqM6K+B55m75b2VXHJcbiAgICAgICAgICBjYXNlIDEwMDAzOlxyXG4gICAgICAgICAgY2FzZSAxMDAwNDpcclxuICAgICAgICAgICAgdGhpcy5pc0hpZGRlbiA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5qc29uID0gbnVsbFxyXG4gICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgLy8g5peg5p2D6ZmQ55m75b2VXHJcbiAgICAgICAgICBjYXNlIDEwMDA2OlxyXG4gICAgICAgICAgICB0aXAuZXJyb3IobmV3VmFsdWUuZGF0YSwgKCkgPT4ge3dlcHkubmF2aWdhdGVCYWNrKC0xKX0pXHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAvLyDlvq7kv6HmjqXlj6Por7fmsYLplJnor69cclxuICAgICAgICAgIGNhc2UgLTUwMDpcclxuICAgICAgICAgIGNhc2UgMTAwMDE6XHJcbiAgICAgICAgICBjYXNlIDEwMDAyOlxyXG4gICAgICAgICAgY2FzZSAxMDAwNTpcclxuICAgICAgICAgICAgdGlwLmVycm9yKCdlcnJvcu+8micrIG5ld1ZhbHVlLmVycm5vKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc3RhdHVzOicgKyBuZXdWYWx1ZS5lcnJubyArJ++8jCcrbmV3VmFsdWUuZGF0YSlcclxuICAgICAgICAgICAgdGhpcy5qc29uID0gbnVsbFxyXG4gICAgICAgICAgICBicmVha1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOmAmui/h2NvZGXojrflj5Z1bmlvbklk6aqM6K+B55So5oi36Lqr5Lu9XHJcbiAgICBhc3luYyBnZXRVbmlvbmlkQnlDb2RlKCkge1xyXG4gICAgICBsZXQgcmVzID0gYXdhaXQgd2VweS5sb2dpbigpXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBhcGkuZ2V0SXNSZWdpc3RlcmVkdXNlcnNCeUNvZGVpZCh7XHJcbiAgICAgICAgcXVlcnk6e1xyXG4gICAgICAgICAgY29kZTogcmVzLmNvZGVcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMuanNvbiA9IGRhdGEuZGF0YVxyXG4gICAgICBpZihkYXRhLnN0YXR1c0NvZGUgPj0gNDAwKXtcclxuICAgICAgICB0aXAuZXJyb3IoJ2Vycm9yIScgKyBkYXRhLnN0YXR1c0NvZGUpXHJcbiAgICAgIH1cclxuICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOmAmui/h3VzZXJJbmZv6I635Y+WdW5pb25JZOmqjOivgeeUqOaIt+i6q+S7vVxyXG4gICAgYXN5bmMgZ2V0VW5pb25pZEJ5VXNlcmluZm8oaW5mbykge1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgYXBpLmdldElzUmVnaXN0ZXJlZHVzZXJzQnlVc2VyaW5mbyh7XHJcbiAgICAgICAgcXVlcnk6aW5mb1xyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLmpzb24gPSBkYXRhLmRhdGFcclxuICAgICAgaWYoZGF0YS5zdGF0dXNDb2RlID49IDQwMCl7XHJcbiAgICAgICAgdGlwLmVycm9yKCdlcnJvciEnICsgZGF0YS5zdGF0dXNDb2RlKVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgIH1cclxuXHJcbiAgICAvLyDpgJrov4dwaG9uZemqjOivgeeZu+W9lVxyXG4gICAgYXN5bmMgZ2V0VW5pb25pZEJ5UGhvbmUocGhvbmUpe1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgYXBpLmdldElzUmVnaXN0ZXJlZHVzZXJzQnlQaG9uZSh7XHJcbiAgICAgICAgcXVlcnk6e1xyXG4gICAgICAgICAgaXY6IHBob25lLml2LFxyXG4gICAgICAgICAgZW5jcnlwdGVkRGF0YTogcGhvbmUuZW5jcnlwdGVkRGF0YVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgdGhpcy5qc29uID0gZGF0YS5kYXRhXHJcbiAgICAgIGlmKGRhdGEuc3RhdHVzQ29kZSA+PSA0MDApe1xyXG4gICAgICAgIHRpcC5lcnJvcignZXJyb3LvvIEnICsgZGF0YS5zdGF0dXNDb2RlKVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgIH1cclxuXHJcbiAgICAvLyDmn6Xor6LmjojmnYPkv6Hmga9cclxuICAgIGFzeW5jIHF1ZXJ5QXV0aG9yaXphdGlvbkluZm9ybWF0aW9uKCkge1xyXG4gICAgICBsZXQgcmVzID0gYXdhaXQgd2VweS5nZXRTZXR0aW5nKClcclxuICAgICAgaWYgKChyZXMuYXV0aFNldHRpbmcpWydzY29wZS51c2VySW5mbyddKSB7XHJcbiAgICAgICAgdGhpcy5pc0hpZGRlbiA9IHRydWVcclxuICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgICAgbGV0IGluZm9SZXMgPSBhd2FpdCB3ZXB5LmdldFVzZXJJbmZvKClcclxuICAgICAgICB0aGlzLnJhd0RhdGEgPSBpbmZvUmVzLnJhd0RhdGFcclxuICAgICAgICB0aGlzLmVuY3J5cHRlZERhdGEgPSBpbmZvUmVzLmVuY3J5cHRlZERhdGFcclxuICAgICAgICB0aGlzLmdldFVuaW9uaWRCeVVzZXJpbmZvKGluZm9SZXMpXHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfmsqHmnInmjojmnYPvvIzor7fngrnlh7vmjInpkq7mjojmnYMnKVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g54K55Ye75oyJ6ZKu77yM5o6I5p2D5bm26I635Y+WdXNlckluZm/vvIzlho3ov5vooYzlpITnkIZcclxuICAgIGJpbmRHZXRVc2VySW5mbyhlKSB7XHJcbiAgICAgIHRoaXMucmF3RGF0YSA9IGUuZGV0YWlsLnJhd0RhdGFcclxuICAgICAgdGhpcy5lbmNyeXB0ZWREYXRhID0gZS5kZXRhaWwuZW5jcnlwdGVkRGF0YVxyXG4gICAgICB0aGlzLmdldFVuaW9uaWRCeVVzZXJpbmZvKGUuZGV0YWlsKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOeCueWHu+aMiemSru+8jOaOiOadg+W5tuiOt+WPlnBob25l77yM5YaN6L+b6KGM5aSE55CGXHJcbiAgICBiaW5kZ2V0cGhvbmVudW1iZXIoZSkge1xyXG4gICAgICBsZXQgZGF0YSA9IGUuZGV0YWlsXHJcbiAgICAgIGRhdGEucmF3RGF0YSA9IHRoaXMucmF3RGF0YVxyXG4gICAgICBkYXRhLmVuY3J5cHRlZERhdGEyID0gdGhpcy5lbmNyeXB0ZWREYXRhXHJcbiAgICAgIHRoaXMuZ2V0VW5pb25pZEJ5UGhvbmUoZGF0YSlcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBpc2xhbmcoZSkge1xyXG4gICAgICBsZXQgdGFyZ2V0ID0gZS50YXJnZXQuaWRcclxuICAgICAgbGV0IGxhbmcgPSB0YXJnZXQgPT09ICdlbicgPyAnZW4nIDogJ3poJ1xyXG4gICAgICBhd2FpdCBzZXRMYW5nKGxhbmcpXHJcbiAgICAgIGF3YWl0IGdldExhbmcoJ2xvZ2luJywgdGhpcylcclxuICAgICAgdGhpcy5sYW5nYnRuYmdDaGFuZ2UodGFyZ2V0KVxyXG4gICAgfVxyXG5cclxuICAgIGxhbmdidG5iZ0NoYW5nZSh0YXJnZXQpIHtcclxuICAgICAgaWYodGFyZ2V0ID09PSAnZW4nKXtcclxuICAgICAgICB0aGlzLmVuYnRuQmcgPSAnbGFuZ0J0bi10YXAnXHJcbiAgICAgICAgdGhpcy56aGJ0bkJnID0gJydcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgdGhpcy56aGJ0bkJnID0gJ2xhbmdCdG4tdGFwJ1xyXG4gICAgICAgIHRoaXMuZW5idG5CZyA9ICcnXHJcbiAgICAgIH1cclxuICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIG9uTG9hZCgpIHtcclxuICAgICAgd2VweS5yZWRpcmVjdFRvKHt1cmw6ICcuL2hvbWUnfSlcclxuICAgICAgdGhpcy5sYW5ndWFnZSA9PT0gJ2VuJyA/IHRoaXMuZW5idG5CZyA9ICdsYW5nQnRuLXRhcCcgOiB0aGlzLnpoYnRuQmcgPSAnbGFuZ0J0bi10YXAnXHJcbiAgICAgIC8vIOino+W8gOS4i+ihjOazqOmHiu+8jOS+v+iDveW8gOWQr+eZu+W9lemqjOivgVxyXG4gICAgICAvLyBhd2FpdCB0aGlzLmdldFVuaW9uaWRCeUNvZGUoKVxyXG4gICAgfVxyXG4gIH1cclxuIl19