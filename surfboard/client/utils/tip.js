"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// 提示与加载工具类
var Tips = function () {
  function Tips() {
    _classCallCheck(this, Tips);

    this.isLoading = false;
  }

  // 弹出提示框


  _createClass(Tips, null, [{
    key: "success",
    value: function success(title) {
      var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;

      setTimeout(function () {
        wx.showToast({
          title: title,
          icon: "success",
          mask: true,
          duration: duration
        });
      }, 300);
      if (duration > 0) {
        return new Promise(function (resolve, reject) {
          setTimeout(function () {
            resolve();
          }, duration);
        });
      }
    }

    // 弹出确认窗口

  }, {
    key: "confirm",
    value: function confirm(text) {
      var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var title = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "提示";

      return new Promise(function (resolve, reject) {
        wx.showModal({
          title: title,
          content: text,
          showCancel: true,
          success: function success(res) {
            if (res.confirm) {
              resolve(payload);
            } else if (res.cancel) {
              reject(payload);
            }
          },
          fail: function fail(res) {
            reject(payload);
          }
        });
      });
    }
  }, {
    key: "toast",
    value: function toast(title, onHide) {
      var icon = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "success";

      setTimeout(function () {
        wx.showToast({
          title: title,
          icon: icon,
          mask: true,
          duration: 500
        });
      }, 300);

      // 隐藏结束回调
      if (onHide) {
        setTimeout(function () {
          onHide();
        }, 500);
      }
    }

    // 警告框

  }, {
    key: "alert",
    value: function alert(title) {
      wx.showToast({
        title: title,
        image: "../images/alert.png",
        mask: true,
        duration: 1500
      });
    }

    // 错误框

  }, {
    key: "error",
    value: function error(title, onHide) {
      wx.showToast({
        title: title,
        image: "../images/error.png",
        mask: true
      });
      // 隐藏结束回调
      if (onHide) {
        setTimeout(function () {
          onHide();
        }, 1500);
      }
    }

    // 弹出加载提示

  }, {
    key: "loading",
    value: function loading() {
      var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "加载中";

      if (Tips.isLoading) {
        return;
      }
      Tips.isLoading = true;
      wx.showLoading({
        title: title,
        mask: true
      });
    }

    // 加载完毕

  }, {
    key: "loaded",
    value: function loaded() {
      if (Tips.isLoading) {
        Tips.isLoading = false;
        wx.hideLoading();
      }
    }
  }, {
    key: "share",
    value: function share(title, url, desc) {
      return {
        title: title,
        path: url,
        desc: desc,
        success: function success(res) {
          Tips.toast("分享成功");
        }
      };
    }
  }]);

  return Tips;
}();

// 静态变量，是否加载中


exports.default = Tips;
Tips.isLoading = false;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpcC5qcyJdLCJuYW1lcyI6WyJUaXBzIiwiaXNMb2FkaW5nIiwidGl0bGUiLCJkdXJhdGlvbiIsInNldFRpbWVvdXQiLCJ3eCIsInNob3dUb2FzdCIsImljb24iLCJtYXNrIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ0ZXh0IiwicGF5bG9hZCIsInNob3dNb2RhbCIsImNvbnRlbnQiLCJzaG93Q2FuY2VsIiwic3VjY2VzcyIsInJlcyIsImNvbmZpcm0iLCJjYW5jZWwiLCJmYWlsIiwib25IaWRlIiwiaW1hZ2UiLCJzaG93TG9hZGluZyIsImhpZGVMb2FkaW5nIiwidXJsIiwiZGVzYyIsInBhdGgiLCJ0b2FzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBO0lBQ3FCQSxJO0FBQ25CLGtCQUFjO0FBQUE7O0FBQ1osU0FBS0MsU0FBTCxHQUFpQixLQUFqQjtBQUNEOztBQUVEOzs7Ozs0QkFDZUMsSyxFQUF1QjtBQUFBLFVBQWhCQyxRQUFnQix1RUFBTCxHQUFLOztBQUNwQ0MsaUJBQVcsWUFBTTtBQUNmQyxXQUFHQyxTQUFILENBQWE7QUFDWEosaUJBQU9BLEtBREk7QUFFWEssZ0JBQU0sU0FGSztBQUdYQyxnQkFBTSxJQUhLO0FBSVhMLG9CQUFVQTtBQUpDLFNBQWI7QUFNRCxPQVBELEVBT0csR0FQSDtBQVFBLFVBQUlBLFdBQVcsQ0FBZixFQUFrQjtBQUNoQixlQUFPLElBQUlNLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdENQLHFCQUFXLFlBQU07QUFDZk07QUFDRCxXQUZELEVBRUdQLFFBRkg7QUFHRCxTQUpNLENBQVA7QUFLRDtBQUNGOztBQUVEOzs7OzRCQUNlUyxJLEVBQWtDO0FBQUEsVUFBNUJDLE9BQTRCLHVFQUFsQixFQUFrQjtBQUFBLFVBQWRYLEtBQWMsdUVBQU4sSUFBTTs7QUFDL0MsYUFBTyxJQUFJTyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDTixXQUFHUyxTQUFILENBQWE7QUFDWFosaUJBQU9BLEtBREk7QUFFWGEsbUJBQVNILElBRkU7QUFHWEksc0JBQVksSUFIRDtBQUlYQyxtQkFBUyxzQkFBTztBQUNkLGdCQUFJQyxJQUFJQyxPQUFSLEVBQWlCO0FBQ2ZULHNCQUFRRyxPQUFSO0FBQ0QsYUFGRCxNQUVPLElBQUlLLElBQUlFLE1BQVIsRUFBZ0I7QUFDckJULHFCQUFPRSxPQUFQO0FBQ0Q7QUFDRixXQVZVO0FBV1hRLGdCQUFNLG1CQUFPO0FBQ1hWLG1CQUFPRSxPQUFQO0FBQ0Q7QUFiVSxTQUFiO0FBZUQsT0FoQk0sQ0FBUDtBQWlCRDs7OzBCQUVZWCxLLEVBQU9vQixNLEVBQTBCO0FBQUEsVUFBbEJmLElBQWtCLHVFQUFYLFNBQVc7O0FBQzVDSCxpQkFBVyxZQUFNO0FBQ2ZDLFdBQUdDLFNBQUgsQ0FBYTtBQUNYSixpQkFBT0EsS0FESTtBQUVYSyxnQkFBTUEsSUFGSztBQUdYQyxnQkFBTSxJQUhLO0FBSVhMLG9CQUFVO0FBSkMsU0FBYjtBQU1ELE9BUEQsRUFPRyxHQVBIOztBQVNBO0FBQ0EsVUFBSW1CLE1BQUosRUFBWTtBQUNWbEIsbUJBQVcsWUFBTTtBQUNma0I7QUFDRCxTQUZELEVBRUcsR0FGSDtBQUdEO0FBQ0Y7O0FBRUQ7Ozs7MEJBQ2FwQixLLEVBQU87QUFDbEJHLFNBQUdDLFNBQUgsQ0FBYTtBQUNYSixlQUFPQSxLQURJO0FBRVhxQixlQUFPLHFCQUZJO0FBR1hmLGNBQU0sSUFISztBQUlYTCxrQkFBVTtBQUpDLE9BQWI7QUFNRDs7QUFFRDs7OzswQkFDYUQsSyxFQUFPb0IsTSxFQUFRO0FBQzFCakIsU0FBR0MsU0FBSCxDQUFhO0FBQ1hKLGVBQU9BLEtBREk7QUFFWHFCLGVBQU8scUJBRkk7QUFHWGYsY0FBTTtBQUhLLE9BQWI7QUFLQTtBQUNBLFVBQUljLE1BQUosRUFBWTtBQUNWbEIsbUJBQVcsWUFBTTtBQUNma0I7QUFDRCxTQUZELEVBRUcsSUFGSDtBQUdEO0FBQ0Y7O0FBRUQ7Ozs7OEJBQzhCO0FBQUEsVUFBZnBCLEtBQWUsdUVBQVAsS0FBTzs7QUFDNUIsVUFBSUYsS0FBS0MsU0FBVCxFQUFvQjtBQUNsQjtBQUNEO0FBQ0RELFdBQUtDLFNBQUwsR0FBaUIsSUFBakI7QUFDQUksU0FBR21CLFdBQUgsQ0FBZTtBQUNidEIsZUFBT0EsS0FETTtBQUViTSxjQUFNO0FBRk8sT0FBZjtBQUlEOztBQUVEOzs7OzZCQUNnQjtBQUNkLFVBQUlSLEtBQUtDLFNBQVQsRUFBb0I7QUFDbEJELGFBQUtDLFNBQUwsR0FBaUIsS0FBakI7QUFDQUksV0FBR29CLFdBQUg7QUFDRDtBQUNGOzs7MEJBRVl2QixLLEVBQU93QixHLEVBQUtDLEksRUFBTTtBQUM3QixhQUFPO0FBQ0x6QixlQUFPQSxLQURGO0FBRUwwQixjQUFNRixHQUZEO0FBR0xDLGNBQU1BLElBSEQ7QUFJTFYsaUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQmxCLGVBQUs2QixLQUFMLENBQVcsTUFBWDtBQUNEO0FBTkksT0FBUDtBQVFEOzs7Ozs7QUFHSDs7O2tCQXhIcUI3QixJO0FBeUhyQkEsS0FBS0MsU0FBTCxHQUFpQixLQUFqQiIsImZpbGUiOiJ0aXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLy8g5o+Q56S65LiO5Yqg6L295bel5YW357G7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpcHMge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZVxyXG4gIH1cclxuXHJcbiAgLy8g5by55Ye65o+Q56S65qGGXHJcbiAgc3RhdGljIHN1Y2Nlc3ModGl0bGUsIGR1cmF0aW9uID0gNTAwKSB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICB0aXRsZTogdGl0bGUsXHJcbiAgICAgICAgaWNvbjogXCJzdWNjZXNzXCIsXHJcbiAgICAgICAgbWFzazogdHJ1ZSxcclxuICAgICAgICBkdXJhdGlvbjogZHVyYXRpb25cclxuICAgICAgfSlcclxuICAgIH0sIDMwMClcclxuICAgIGlmIChkdXJhdGlvbiA+IDApIHtcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIHJlc29sdmUoKVxyXG4gICAgICAgIH0sIGR1cmF0aW9uKVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8g5by55Ye656Gu6K6k56qX5Y+jXHJcbiAgc3RhdGljIGNvbmZpcm0odGV4dCwgcGF5bG9hZCA9IHt9LCB0aXRsZSA9IFwi5o+Q56S6XCIpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHd4LnNob3dNb2RhbCh7XHJcbiAgICAgICAgdGl0bGU6IHRpdGxlLFxyXG4gICAgICAgIGNvbnRlbnQ6IHRleHQsXHJcbiAgICAgICAgc2hvd0NhbmNlbDogdHJ1ZSxcclxuICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xyXG4gICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XHJcbiAgICAgICAgICAgIHJlc29sdmUocGF5bG9hZClcclxuICAgICAgICAgIH0gZWxzZSBpZiAocmVzLmNhbmNlbCkge1xyXG4gICAgICAgICAgICByZWplY3QocGF5bG9hZClcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGZhaWw6IHJlcyA9PiB7XHJcbiAgICAgICAgICByZWplY3QocGF5bG9hZClcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIHRvYXN0KHRpdGxlLCBvbkhpZGUsIGljb24gPSBcInN1Y2Nlc3NcIikge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgdGl0bGU6IHRpdGxlLFxyXG4gICAgICAgIGljb246IGljb24sXHJcbiAgICAgICAgbWFzazogdHJ1ZSxcclxuICAgICAgICBkdXJhdGlvbjogNTAwXHJcbiAgICAgIH0pXHJcbiAgICB9LCAzMDApXHJcblxyXG4gICAgLy8g6ZqQ6JeP57uT5p2f5Zue6LCDXHJcbiAgICBpZiAob25IaWRlKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIG9uSGlkZSgpXHJcbiAgICAgIH0sIDUwMClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIOitpuWRiuahhlxyXG4gIHN0YXRpYyBhbGVydCh0aXRsZSkge1xyXG4gICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgdGl0bGU6IHRpdGxlLFxyXG4gICAgICBpbWFnZTogXCIuLi9pbWFnZXMvYWxlcnQucG5nXCIsXHJcbiAgICAgIG1hc2s6IHRydWUsXHJcbiAgICAgIGR1cmF0aW9uOiAxNTAwXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgLy8g6ZSZ6K+v5qGGXHJcbiAgc3RhdGljIGVycm9yKHRpdGxlLCBvbkhpZGUpIHtcclxuICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAgICAgaW1hZ2U6IFwiLi4vaW1hZ2VzL2Vycm9yLnBuZ1wiLFxyXG4gICAgICBtYXNrOiB0cnVlXHJcbiAgICB9KVxyXG4gICAgLy8g6ZqQ6JeP57uT5p2f5Zue6LCDXHJcbiAgICBpZiAob25IaWRlKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIG9uSGlkZSgpXHJcbiAgICAgIH0sIDE1MDApXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyDlvLnlh7rliqDovb3mj5DnpLpcclxuICBzdGF0aWMgbG9hZGluZyh0aXRsZSA9IFwi5Yqg6L295LitXCIpIHtcclxuICAgIGlmIChUaXBzLmlzTG9hZGluZykge1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIFRpcHMuaXNMb2FkaW5nID0gdHJ1ZVxyXG4gICAgd3guc2hvd0xvYWRpbmcoe1xyXG4gICAgICB0aXRsZTogdGl0bGUsXHJcbiAgICAgIG1hc2s6IHRydWVcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICAvLyDliqDovb3lrozmr5VcclxuICBzdGF0aWMgbG9hZGVkKCkge1xyXG4gICAgaWYgKFRpcHMuaXNMb2FkaW5nKSB7XHJcbiAgICAgIFRpcHMuaXNMb2FkaW5nID0gZmFsc2VcclxuICAgICAgd3guaGlkZUxvYWRpbmcoKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIHNoYXJlKHRpdGxlLCB1cmwsIGRlc2MpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAgICAgcGF0aDogdXJsLFxyXG4gICAgICBkZXNjOiBkZXNjLFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICBUaXBzLnRvYXN0KFwi5YiG5Lqr5oiQ5YqfXCIpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIOmdmeaAgeWPmOmHj++8jOaYr+WQpuWKoOi9veS4rVxyXG5UaXBzLmlzTG9hZGluZyA9IGZhbHNlXHJcbiJdfQ==