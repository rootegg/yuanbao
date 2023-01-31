/**
 * blob_to_arraybuffer
 * @param {*} blob
 * @returns arraybuffer
 */
export async function blob_to_arraybuffer(blob) {
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
export async function blob_to_binarystring(blob) {
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
export async function blob_to_dataurl(blob) {
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
export async function blob_to_text(blob, encoding = "utf8") {
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
export async function blob_to_bytes(blob) {
  const arraybuffer = await blob_to_arraybuffer(blob);
  return await arraybuffer_to_bytes(arraybuffer);
}

/**
 * arraybuffer_to_bytes
 * @param {*} arraybuffer
 * @returns uint8array
 */
export async function arraybuffer_to_bytes(arraybuffer) {
  return new Promise((resolve) => {
    resolve(new Uint8Array(arraybuffer));
  });
}

/**
 * bytes_to_blob
 * @param {*} uint8array
 * @returns Blob
 */
export async function bytes_to_blob(uint8array) {
  return new Promise((resolve) => {
    resolve(new Blob([uint8array]));
  });
}

/**
 * bytes_to_arraybuffer
 * @param {*} uint8array
 * @returns arraybuffer
 */
export async function bytes_to_arraybuffer(uint8array) {
  const blob = await bytes_to_blob(uint8array);
  return blob_to_arraybuffer(blob);
}

/**
 * bytes_to_dataurl
 * @param {*} uint8array
 * @returns base64
 */
export async function bytes_to_dataurl(uint8array) {
  const blob = await bytes_to_blob(uint8array);
  return await blob_to_dataurl(blob);
}

/**
 * bytes_to_text
 * @param {*} uint8array
 * @returns base64
 */
export async function bytes_to_text(uint8array) {
  const blob = await bytes_to_blob(uint8array);
  return await blob_to_text(blob);
}

/**
 * arraybuffer_to_blob
 * @param {*} arraybuffer
 * @returns blob
 */
export async function arraybuffer_to_blob(arraybuffer) {
  const bytes = await arraybuffer_to_bytes(arraybuffer);
  return await bytes_to_blob(bytes);
}

/**
 * arraybuffer_to_text
 * @param {*} arraybuffer
 * @returns string
 */
export async function arraybuffer_to_text(arraybuffer) {
  const blob = await arraybuffer_to_blob(arraybuffer);
  return await blob_to_text(blob);
}

/**
 * arraybuffer_to_dataurl
 * @param {*} arraybuffer
 * @returns base64
 */
export async function arraybuffer_to_dataurl(arraybuffer) {
  const blob = await arraybuffer_to_blob(arraybuffer);
  return await blob_to_dataurl(blob);
}

/**
 * text_to_blob
 * @param {*} str
 * @returns blob
 */
export async function text_to_blob(str) {
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
export async function text_to_dataurl(str) {
  const blob = await text_to_blob(str);
  return await blob_to_dataurl(blob);
}

/**
 * text_to_bytes
 * @param {*} str
 * @returns uint8Array
 */
export async function text_to_bytes(str) {
  const blob = await text_to_blob(str);
  return await blob_to_bytes(blob);
}

/**
 * text_to_arraybuffer
 * @param {*} str
 * @returns arraybuffer
 */
export async function text_to_arraybuffer(str) {
  const blob = await text_to_blob(str);
  return await blob_to_arraybuffer(blob);
}

/**
 * dataurl_to_blob
 * @param {*} base64
 * @returns blob
 */
export async function dataurl_to_blob(base64) {
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
export async function dataurl_to_text(base64) {
  const blob = await dataurl_to_blob(base64);
  return await blob_to_text(blob);
}

/**
 * dataurl_to_types
 * @param {*} base64
 * @returns string
 */
export async function dataurl_to_types(base64) {
  const blob = await dataurl_to_blob(base64);
  return await blob_to_bytes(blob);
}

/**
 * dataurl_to_arraybuffer
 * @param {*} base64
 * @returns string
 */
export async function dataurl_to_arraybuffer(base64) {
  const blob = await dataurl_to_blob(base64);
  return await blob_to_arraybuffer(blob);
}

/**
 * hexstr_to_bytes
 * @param {*} hexStr  ab132cdef212gsd  十六进制字符串 0-9a-f
 * @returns uint8array
 */
export async function hexstr_to_bytes(hexStr) {
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
export async function bytes_to_hexstr(uint8Array) {
  const arraybuffer = await bytes_to_arraybuffer(uint8Array);
  return await arraybuffer_to_hexstr(arraybuffer);
}

/**
 * arraybuffer_to_hexstr
 * @param {*} arraybuffer
 * @returns hexstr
 */
export async function arraybuffer_to_hexstr(arraybuffer) {
  const bytes = await arraybuffer_to_bytes(arraybuffer);
  return await bytes_to_hexstr(bytes);
}

/**
 * hexstr_to_arraybuffer
 * @param {*} hexstr
 * @returns arraybuffer
 */
export async function hexstr_to_arraybuffer(hexstr) {
  const bytes = await hexstr_to_bytes(hexstr);
  return await bytes_to_arraybuffer(bytes);
}
