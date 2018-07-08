'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _util = require('./util.js');

/** 本地存储中cookie的数据格式
*   cookie：{
      key1:{
        key1:value,
        Max-Age:value,
        Expires:value,
        Path:value
      },
      key2: {
        key2: value,
        Max - Age: value,
        Expires: value,
        Path: value
      }
*   }
**/

// 序列化为浏览器端cookie,验证是否更新本地cookie，更新。空就直接存，非空就用setCookie与本地cookie对比是否有变化
// setCookieStr：res.header['set-cookie']
function setCookies(setCookieStr) {
  if (!setCookieStr) return;
  var storageCookie = (0, _util.getStorageData)('cookies');
  if (!storageCookie) storageCookie = {};
  if ((typeof setCookieStr === 'undefined' ? 'undefined' : _typeof(setCookieStr)) === String) {
    var key = setCookieStr.split('=')[0]; // setCookie在本地存储中的key,对应数据格式的key1、key2
    var setCookieObj = (0, _util.formConverttoObject)(setCookieStr); // setCookie在本地存储中的值，对应数据格式的key1、key2的值
    storageCookie[key] = setCookieObj;
  } else if ((typeof setCookieStr === 'undefined' ? 'undefined' : _typeof(setCookieStr)) === 'object') {
    var _key = Object.keys(setCookieStr)[0];
    storageCookie[_key] = setCookieStr;
  }
  (0, _util.setStorageData)('cookies', storageCookie);
}

function getCookies() {
  var cookies = '';
  var obj = (0, _util.getStorageData)('cookies');
  for (var key in obj) {
    cookies += key + '=' + obj[key][key] + ';';
  }
  return cookies;
}

function getCookie(key) {
  return (0, _util.getStorageData)('cookies')[key][key];
}

module.exports = {
  setCookies: setCookies,
  getCookies: getCookies,
  getCookie: getCookie
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvb2tpZS5qcyJdLCJuYW1lcyI6WyJzZXRDb29raWVzIiwic2V0Q29va2llU3RyIiwic3RvcmFnZUNvb2tpZSIsIlN0cmluZyIsImtleSIsInNwbGl0Iiwic2V0Q29va2llT2JqIiwiT2JqZWN0Iiwia2V5cyIsImdldENvb2tpZXMiLCJjb29raWVzIiwib2JqIiwiZ2V0Q29va2llIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztBQU1BOzs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQTtBQUNBO0FBQ0EsU0FBU0EsVUFBVCxDQUFvQkMsWUFBcEIsRUFBa0M7QUFDaEMsTUFBSSxDQUFDQSxZQUFMLEVBQW1CO0FBQ25CLE1BQUlDLGdCQUFnQiwwQkFBZSxTQUFmLENBQXBCO0FBQ0EsTUFBSSxDQUFDQSxhQUFMLEVBQW9CQSxnQkFBZ0IsRUFBaEI7QUFDcEIsTUFBSSxRQUFRRCxZQUFSLHlDQUFRQSxZQUFSLE9BQTBCRSxNQUE5QixFQUFzQztBQUNwQyxRQUFJQyxNQUFNSCxhQUFhSSxLQUFiLENBQW1CLEdBQW5CLEVBQXdCLENBQXhCLENBQVYsQ0FEb0MsQ0FDQztBQUNyQyxRQUFJQyxlQUFlLCtCQUFvQkwsWUFBcEIsQ0FBbkIsQ0FGb0MsQ0FFaUI7QUFDckRDLGtCQUFjRSxHQUFkLElBQXFCRSxZQUFyQjtBQUNELEdBSkQsTUFJTyxJQUFJLFFBQVFMLFlBQVIseUNBQVFBLFlBQVIsT0FBMEIsUUFBOUIsRUFBd0M7QUFDN0MsUUFBSUcsT0FBTUcsT0FBT0MsSUFBUCxDQUFZUCxZQUFaLEVBQTBCLENBQTFCLENBQVY7QUFDQUMsa0JBQWNFLElBQWQsSUFBcUJILFlBQXJCO0FBQ0Q7QUFDRCw0QkFBZSxTQUFmLEVBQTBCQyxhQUExQjtBQUNEOztBQUVELFNBQVNPLFVBQVQsR0FBc0I7QUFDcEIsTUFBSUMsVUFBVSxFQUFkO0FBQ0EsTUFBSUMsTUFBTSwwQkFBZSxTQUFmLENBQVY7QUFDQSxPQUFLLElBQUlQLEdBQVQsSUFBZ0JPLEdBQWhCLEVBQXFCO0FBQ25CRCxlQUFjTixHQUFkLFNBQXFCTyxJQUFJUCxHQUFKLEVBQVNBLEdBQVQsQ0FBckI7QUFDRDtBQUNELFNBQU9NLE9BQVA7QUFDRDs7QUFFRCxTQUFTRSxTQUFULENBQW1CUixHQUFuQixFQUF3QjtBQUN0QixTQUFRLDBCQUFlLFNBQWYsRUFBMEJBLEdBQTFCLEVBQStCQSxHQUEvQixDQUFSO0FBQ0Q7O0FBRURTLE9BQU9DLE9BQVAsR0FBaUI7QUFDZmQsd0JBRGU7QUFFZlMsd0JBRmU7QUFHZkc7QUFIZSxDQUFqQiIsImZpbGUiOiJjb29raWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIGZvcm1Db252ZXJ0dG9PYmplY3QsXHJcbiAgZ2V0U3RvcmFnZURhdGEsXHJcbiAgc2V0U3RvcmFnZURhdGEsXHJcbiAgaXNFcXVhbFxyXG59IGZyb20gJy4vdXRpbCdcclxuLyoqIOacrOWcsOWtmOWCqOS4rWNvb2tpZeeahOaVsOaNruagvOW8j1xyXG4qICAgY29va2ll77yae1xyXG4gICAgICBrZXkxOntcclxuICAgICAgICBrZXkxOnZhbHVlLFxyXG4gICAgICAgIE1heC1BZ2U6dmFsdWUsXHJcbiAgICAgICAgRXhwaXJlczp2YWx1ZSxcclxuICAgICAgICBQYXRoOnZhbHVlXHJcbiAgICAgIH0sXHJcbiAgICAgIGtleTI6IHtcclxuICAgICAgICBrZXkyOiB2YWx1ZSxcclxuICAgICAgICBNYXggLSBBZ2U6IHZhbHVlLFxyXG4gICAgICAgIEV4cGlyZXM6IHZhbHVlLFxyXG4gICAgICAgIFBhdGg6IHZhbHVlXHJcbiAgICAgIH1cclxuKiAgIH1cclxuKiovXHJcblxyXG4vLyDluo/liJfljJbkuLrmtY/op4jlmajnq69jb29raWUs6aqM6K+B5piv5ZCm5pu05paw5pys5ZywY29va2ll77yM5pu05paw44CC56m65bCx55u05o6l5a2Y77yM6Z2e56m65bCx55Soc2V0Q29va2ll5LiO5pys5ZywY29va2ll5a+55q+U5piv5ZCm5pyJ5Y+Y5YyWXHJcbi8vIHNldENvb2tpZVN0cu+8mnJlcy5oZWFkZXJbJ3NldC1jb29raWUnXVxyXG5mdW5jdGlvbiBzZXRDb29raWVzKHNldENvb2tpZVN0cikge1xyXG4gIGlmICghc2V0Q29va2llU3RyKSByZXR1cm5cclxuICBsZXQgc3RvcmFnZUNvb2tpZSA9IGdldFN0b3JhZ2VEYXRhKCdjb29raWVzJylcclxuICBpZiAoIXN0b3JhZ2VDb29raWUpIHN0b3JhZ2VDb29raWUgPSB7fVxyXG4gIGlmICh0eXBlb2YgKHNldENvb2tpZVN0cikgPT09IFN0cmluZykge1xyXG4gICAgbGV0IGtleSA9IHNldENvb2tpZVN0ci5zcGxpdCgnPScpWzBdIC8vIHNldENvb2tpZeWcqOacrOWcsOWtmOWCqOS4reeahGtleSzlr7nlupTmlbDmja7moLzlvI/nmoRrZXkx44CBa2V5MlxyXG4gICAgbGV0IHNldENvb2tpZU9iaiA9IGZvcm1Db252ZXJ0dG9PYmplY3Qoc2V0Q29va2llU3RyKSAvLyBzZXRDb29raWXlnKjmnKzlnLDlrZjlgqjkuK3nmoTlgLzvvIzlr7nlupTmlbDmja7moLzlvI/nmoRrZXkx44CBa2V5MueahOWAvFxyXG4gICAgc3RvcmFnZUNvb2tpZVtrZXldID0gc2V0Q29va2llT2JqXHJcbiAgfSBlbHNlIGlmICh0eXBlb2YgKHNldENvb2tpZVN0cikgPT09ICdvYmplY3QnKSB7XHJcbiAgICBsZXQga2V5ID0gT2JqZWN0LmtleXMoc2V0Q29va2llU3RyKVswXVxyXG4gICAgc3RvcmFnZUNvb2tpZVtrZXldID0gc2V0Q29va2llU3RyXHJcbiAgfVxyXG4gIHNldFN0b3JhZ2VEYXRhKCdjb29raWVzJywgc3RvcmFnZUNvb2tpZSlcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Q29va2llcygpIHtcclxuICBsZXQgY29va2llcyA9ICcnXHJcbiAgbGV0IG9iaiA9IGdldFN0b3JhZ2VEYXRhKCdjb29raWVzJylcclxuICBmb3IgKGxldCBrZXkgaW4gb2JqKSB7XHJcbiAgICBjb29raWVzICs9IGAke2tleX09JHtvYmpba2V5XVtrZXldfTtgXHJcbiAgfVxyXG4gIHJldHVybiBjb29raWVzXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldENvb2tpZShrZXkpIHtcclxuICByZXR1cm4gIGdldFN0b3JhZ2VEYXRhKCdjb29raWVzJylba2V5XVtrZXldO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICBzZXRDb29raWVzLFxyXG4gIGdldENvb2tpZXMsXHJcbiAgZ2V0Q29va2llXHJcbn0iXX0=