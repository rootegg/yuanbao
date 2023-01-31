# yuanbao

```code
npm i yuanbao
```

## 提供 arraybuffer、blob、text、uint8array、hex 相互转换，都是返回 promise

```code
import { blob_to_dataurl } from "yuanbao";
console.log(blob_to_dataurl);
```

## 例子

```code
import { blob_to_arraybuffer } from "yuanbao";
var xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  "https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg",
  true
);
xhr.responseType = "blob";
xhr.onload = async function () {
  console.log(await blob_to_arraybuffer(xhr.response));
};
xhr.send();
```

## 编码

- arraybuffer_to_blob
- arraybuffer_to_bytes
- arraybuffer_to_dataurl
- arraybuffer_to_hexstr
- arraybuffer_to_text
- blob_to_arraybuffer
- blob_to_binarystring
- blob_to_bytes
- blob_to_dataurl
- blob_to_text
- bytes_to_arraybuffer
- bytes_to_blob
- bytes_to_dataurl
- bytes_to_hexstr
- bytes_to_text
- dataurl_to_arraybuffer
- dataurl_to_blob
- dataurl_to_text
- dataurl_to_types
- hexstr_to_arraybuffer
- hexstr_to_bytes
- text_to_arraybuffer
- text_to_blob
- text_to_bytes
- text_to_dataurl
