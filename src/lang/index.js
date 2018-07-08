import { en } from './en.js'
import { zh } from './zh.js'
import { setCookies, getCookie } from '../utils/cookie'
import { getStorageData } from '../utils/util'

// 获取当前页面所需静态文字
function msg(key) {
  return getMessages()[key]
}

function getMessages() {
  let lang = getCookie('language')
  return lang === 'en' ? en : zh
}

// 设置语言
function setLang(lang) {
  let obj = {}
  obj.language = lang
  setCookies(obj)
}
function getLang() {
	return getCookie('language')
}
function computedGen(page, arr) {
	let computed = {};
	arr.forEach(item=>{
		let label = `${page}.${item}`;
		computed[`${item}Label`] = generateLabel(label);
		computed[`${item}Placeholder`] = generatePlaceholder(label)
	})
	return computed
}
function generateLabel(label) {
	return function() {
		let value = this.msg[label];
		if (!value) console.log(`cant find ${label}`);
		return value;
	}
}
function generatePlaceholder(label) {
	return function() {
		return this.msg['common.pleaseinput']+this.msg[label]
	}
}
module.exports = {
  msg,
  setLang,
  getLang,
  getMessages,
  en,
  zh,
  computedGen
}