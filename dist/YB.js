(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["YB"] = factory();
	else
		root["YB"] = factory();
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "arraybuffer_to_blob": () => (/* binding */ arraybuffer_to_blob),
/* harmony export */   "arraybuffer_to_bytes": () => (/* binding */ arraybuffer_to_bytes),
/* harmony export */   "arraybuffer_to_dataurl": () => (/* binding */ arraybuffer_to_dataurl),
/* harmony export */   "arraybuffer_to_hexstr": () => (/* binding */ arraybuffer_to_hexstr),
/* harmony export */   "arraybuffer_to_text": () => (/* binding */ arraybuffer_to_text),
/* harmony export */   "blob_to_arraybuffer": () => (/* binding */ blob_to_arraybuffer),
/* harmony export */   "blob_to_binarystring": () => (/* binding */ blob_to_binarystring),
/* harmony export */   "blob_to_bytes": () => (/* binding */ blob_to_bytes),
/* harmony export */   "blob_to_dataurl": () => (/* binding */ blob_to_dataurl),
/* harmony export */   "blob_to_text": () => (/* binding */ blob_to_text),
/* harmony export */   "bytes_to_arraybuffer": () => (/* binding */ bytes_to_arraybuffer),
/* harmony export */   "bytes_to_blob": () => (/* binding */ bytes_to_blob),
/* harmony export */   "bytes_to_dataurl": () => (/* binding */ bytes_to_dataurl),
/* harmony export */   "bytes_to_hexstr": () => (/* binding */ bytes_to_hexstr),
/* harmony export */   "bytes_to_text": () => (/* binding */ bytes_to_text),
/* harmony export */   "dataurl_to_arraybuffer": () => (/* binding */ dataurl_to_arraybuffer),
/* harmony export */   "dataurl_to_blob": () => (/* binding */ dataurl_to_blob),
/* harmony export */   "dataurl_to_text": () => (/* binding */ dataurl_to_text),
/* harmony export */   "dataurl_to_types": () => (/* binding */ dataurl_to_types),
/* harmony export */   "hexstr_to_arraybuffer": () => (/* binding */ hexstr_to_arraybuffer),
/* harmony export */   "hexstr_to_bytes": () => (/* binding */ hexstr_to_bytes),
/* harmony export */   "text_to_arraybuffer": () => (/* binding */ text_to_arraybuffer),
/* harmony export */   "text_to_blob": () => (/* binding */ text_to_blob),
/* harmony export */   "text_to_bytes": () => (/* binding */ text_to_bytes),
/* harmony export */   "text_to_dataurl": () => (/* binding */ text_to_dataurl)
/* harmony export */ });
/**
 * blob_to_arraybuffer
 * @param {*} blob
 * @returns arraybuffer
 */
async function blob_to_arraybuffer(blob) {
  return new Promise(function (resolve, reject) {
    const fileReader = new FileReader();
    fileReader.onload = function (e) {
      resolve(e.target.result);
    };
    fileReader.onerror = function (e) {
      reject(e);
    };
    fileReader.readAsArrayBuffer(blob);
  });
}

/**
 *
 * @param {*} blob
 * @returns
 */
async function blob_to_binarystring(blob) {
  return new Promise(function (resolve, reject) {
    const fileReader = new FileReader();
    fileReader.onload = function (e) {
      resolve(e.target.result);
    };
    fileReader.onerror = function (e) {
      reject(e);
    };
    fileReader.readAsBinaryString(blob);
  });
}

/**
 * 获取base64格式
 * @param {*} blob
 * @returns
 */
async function blob_to_dataurl(blob) {
  return new Promise(function (resolve, reject) {
    const fileReader = new FileReader();
    fileReader.onload = function (e) {
      resolve(e.target.result);
    };
    fileReader.onerror = function (e) {
      reject(e);
    };
    fileReader.readAsDataURL(blob);
  });
}

/**
 * blob_to_text
 * @param {*} blob
 * @param {*} encoding
 * @returns string
 */
async function blob_to_text(blob, encoding = "utf8") {
  return new Promise(function (resolve, reject) {
    const fileReader = new FileReader();
    fileReader.onload = function (e) {
      resolve(e.target.result);
    };
    fileReader.onerror = function (e) {
      reject(e);
    };
    fileReader.readAsText(blob, encoding);
  });
}

/**
 * blob_to_bytes
 * @param {*} blob
 * @returns uint8array
 */
async function blob_to_bytes(blob) {
  const arraybuffer = await blob_to_arraybuffer(blob);
  return await arraybuffer_to_bytes(arraybuffer);
}

/**
 * arraybuffer_to_bytes
 * @param {*} arraybuffer
 * @returns uint8array
 */
async function arraybuffer_to_bytes(arraybuffer) {
  return new Promise((resolve) => {
    resolve(new Uint8Array(arraybuffer));
  });
}

/**
 * bytes_to_blob
 * @param {*} uint8array
 * @returns Blob
 */
async function bytes_to_blob(uint8array) {
  return new Promise((resolve) => {
    resolve(new Blob([uint8array]));
  });
}

/**
 * bytes_to_arraybuffer
 * @param {*} uint8array
 * @returns arraybuffer
 */
async function bytes_to_arraybuffer(uint8array) {
  const blob = await bytes_to_blob(uint8array);
  return blob_to_arraybuffer(blob);
}

/**
 * bytes_to_dataurl
 * @param {*} uint8array
 * @returns base64
 */
async function bytes_to_dataurl(uint8array) {
  const blob = await bytes_to_blob(uint8array);
  return await blob_to_dataurl(blob);
}

/**
 * bytes_to_text
 * @param {*} uint8array
 * @returns base64
 */
async function bytes_to_text(uint8array) {
  const blob = await bytes_to_blob(uint8array);
  return await blob_to_text(blob);
}

/**
 * arraybuffer_to_blob
 * @param {*} arraybuffer
 * @returns blob
 */
async function arraybuffer_to_blob(arraybuffer) {
  const bytes = await arraybuffer_to_bytes(arraybuffer);
  return await bytes_to_blob(bytes);
}

/**
 * arraybuffer_to_text
 * @param {*} arraybuffer
 * @returns string
 */
async function arraybuffer_to_text(arraybuffer) {
  const blob = await arraybuffer_to_blob(arraybuffer);
  return await blob_to_text(blob);
}

/**
 * arraybuffer_to_dataurl
 * @param {*} arraybuffer
 * @returns base64
 */
async function arraybuffer_to_dataurl(arraybuffer) {
  const blob = await arraybuffer_to_blob(arraybuffer);
  return await blob_to_dataurl(blob);
}

/**
 * text_to_blob
 * @param {*} str
 * @returns blob
 */
async function text_to_blob(str) {
  return new Promise((resolve) => {
    resolve(
      new Blob([str], {
        type: "text/plain",
      })
    );
  });
}

/**
 * text_to_dataurl
 * @param {*} str
 * @returns base64
 */
async function text_to_dataurl(str) {
  const blob = await text_to_blob(str);
  return await blob_to_dataurl(blob);
}

/**
 * text_to_bytes
 * @param {*} str
 * @returns uint8Array
 */
async function text_to_bytes(str) {
  const blob = await text_to_blob(str);
  return await blob_to_bytes(blob);
}

/**
 * text_to_arraybuffer
 * @param {*} str
 * @returns arraybuffer
 */
async function text_to_arraybuffer(str) {
  const blob = await text_to_blob(str);
  return await blob_to_arraybuffer(blob);
}

/**
 * dataurl_to_blob
 * @param {*} base64
 * @returns blob
 */
async function dataurl_to_blob(base64) {
  return new Promise((resolve) => {
    var arr = base64.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    resolve(new Blob([u8arr], { type: mime }));
  });
}

/**
 * dataurl_to_text
 * @param {*} base64
 * @returns string
 */
async function dataurl_to_text(base64) {
  const blob = await dataurl_to_blob(base64);
  return await blob_to_text(blob);
}

/**
 * dataurl_to_types
 * @param {*} base64
 * @returns string
 */
async function dataurl_to_types(base64) {
  const blob = await dataurl_to_blob(base64);
  return await blob_to_bytes(blob);
}

/**
 * dataurl_to_arraybuffer
 * @param {*} base64
 * @returns string
 */
async function dataurl_to_arraybuffer(base64) {
  const blob = await dataurl_to_blob(base64);
  return await blob_to_arraybuffer(blob);
}

/**
 * hexstr_to_bytes
 * @param {*} hexStr  ab132cdef212gsd  十六进制字符串 0-9a-f
 * @returns uint8array
 */
async function hexstr_to_bytes(hexStr) {
  return new Promise((resolve) => {
    const bytes = [];
    for (let c = 0; c < hexStr.length; c += 2) {
      bytes.push(parseInt(hexStr.substr(c, 2), 16));
    }
    resolve(Uint8Array.from(bytes));
  });
}

/**
 * bytes_to_hexstr
 * @param {*} uint8Array
 * @returns hexstr 16进制字符串
 */
async function bytes_to_hexstr(uint8Array) {
  const arraybuffer = await bytes_to_arraybuffer(uint8Array);
  return await arraybuffer_to_hexstr(arraybuffer);
}

/**
 * arraybuffer_to_hexstr
 * @param {*} arraybuffer
 * @returns hexstr
 */
async function arraybuffer_to_hexstr(arraybuffer) {
  const bytes = await arraybuffer_to_bytes(arraybuffer);
  return await bytes_to_hexstr(bytes);
}

/**
 * hexstr_to_arraybuffer
 * @param {*} hexstr
 * @returns arraybuffer
 */
async function hexstr_to_arraybuffer(hexstr) {
  const bytes = await hexstr_to_bytes(hexstr);
  return await bytes_to_arraybuffer(bytes);
}


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _packages_encode_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_packages_encode_js__WEBPACK_IMPORTED_MODULE_0__);

})();

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});