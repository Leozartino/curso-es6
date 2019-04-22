"use strict";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

//REST: serve para pegar o resto das propriedades
var usuario = {
  nome: 'Leonardo',
  idade: 22,
  empresa: 'Uirapuru'
};

var nome = usuario.nome,
    resto = _objectWithoutProperties(usuario, ["nome"]);

console.log(nome);
console.log(resto);
var arr = [1, 2, 3, 4];
var a = arr[0],
    b = arr[1],
    c = arr.slice(2);
console.log(a, b, c);

function soma(a, b) {
  for (var _len = arguments.length, parms = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    parms[_key - 2] = arguments[_key];
  }

  return parms.reduce(function (valorAcumulado, currentValue) {
    return valorAcumulado + currentValue;
  }) + a + b;
}

console.log(soma(3, 2, 5, 6)); //Spreand -> propagar, repassar informações de um array e copiar ao source.

var arr1 = [2, 3, 6, 7];
var arr2 = [0, 5, 9];
var arr3 = [].concat(arr1, arr2);
console.log(arr3);
var usuario01 = {
  nome: 'Qualuqr',
  idade: 52,
  cpf: '078.356.987 - 20'
};

var novoUser = _objectSpread({}, usuario01, {
  nome: 'Luís'
});

console.log(novoUser);
