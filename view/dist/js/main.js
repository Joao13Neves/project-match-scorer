/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/core/index.js":
/*!*************************************!*\
  !*** ./src/assets/js/core/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function adicionarVitoria(index) {
  listPlayer[index].vitoria++;
  listPlayer[index].pontos = listPlayer[index].pontos + 3;
  exibirNaTela();
}
function adicionarEmpate(index) {
  listPlayer[index].empate++;
  exibirNaTela();
}
function adicionarDerrota(index) {
  listPlayer[index].derrota++;
  exibirNaTela();
}
function removerVitoria(index) {
  if (listPlayer[index].vitoria > 0) {
    listPlayer[index].vitoria--;
    listPlayer[index].pontos = listPlayer[index].pontos - 3;
    exibirNaTela();
  } else {
    alert("O jogador não possui vitórias e serem removidas.");
  }
}
function removerEmpate(index) {
  if (listPlayer[index].empate > 0) {
    listPlayer[index].empate--;
    exibirNaTela();
  } else {
    alert("O jogador não possui empates a serem removidos.");
  }
}
function removerDerrota(index) {
  if (listPlayer[index].derrota > 0) {
    listPlayer[index].derrota--;
    // Supondo que remover uma derrota não altera os pontos (pode ser diferente dependendo da lógica do seu aplicativo)
    exibirNaTela();
  } else {
    alert("O jogador não possui derrotas a serem removidas.");
  }
}

function finalizarPartida() {
  listPlayer = [];
  exibirNaTela();
}

function exibirNaTela() {
  elementoTabela.innerHTML = "";
  listPlayer.forEach(function (jogador, index) {
    console.log(jogador);
    elementoTabela.innerHTML += "\n    <tr>\n        <td>".concat(jogador.name, "</td>\n        <td>").concat(jogador.vitoria, "</td>\n        <td>").concat(jogador.empate, "</td>\n        <td>").concat(jogador.derrota, "</td>\n        <td>").concat(jogador.partidas, "</td>\n        <td>").concat(jogador.pontos, "</td>\n        \n        <td>\n        <button class=\"winner\" onClick=\"adicionarVitoria(").concat(index, ")\">Vit\xF3ria</button>\n        <button class=\"remove\" onClick=\"removerVitoria(").concat(index, ")\">Remover</button>\n        </td>\n\n        <td>\n        <button class=\"aTie\" onClick=\"adicionarEmpate(").concat(index, ")\">Empate</button>\n        <button class=\"remove\" onClick=\"removerEmpate(").concat(index, ")\">Remover</button>\n        </td>\n        \n        <td>\n        <button class=\"defeat\" onClick=\"adicionarDerrota(").concat(index, ")\">Derrota</button>\n        <button class=\"remove\" onClick=\"removerDerrota(").concat(index, ")\">Remover</button>\n        </td>\n    </tr>\n");
  });
}
function addPlayer() {
  var namePlayer = document.getElementById("name").value;
  if (namePlayer.trim() === "") {
    alert("Por favor, preencha o nome do Jogador.");
    return;
  }
  listPlayer.push({
    name: namePlayer,
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
  });
  document.getElementById("name").value = "";
  exibirNaTela();
}
var listPlayer = [];
var elementoTabela = document.getElementById("tabelaJogadores");
exibirNaTela();

/***/ }),

/***/ "./src/assets/js/main.js":
/*!*******************************!*\
  !*** ./src/assets/js/main.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/index */ "./src/assets/js/core/index.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_index__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/app.scss */ "./src/assets/scss/app.scss");
/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_app_scss__WEBPACK_IMPORTED_MODULE_1__);
//scripts


//estilos


/***/ }),

/***/ "./src/assets/scss/app.scss":
/*!**********************************!*\
  !*** ./src/assets/scss/app.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=main.js.map