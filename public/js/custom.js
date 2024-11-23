// 这里编写自定义js脚本；将被静态引入到页面中
// 创建一个新的 <script> 元素
var script = document.createElement('script');

// 设置属性
script.async = true;
script.defer = true;
script.src = "https://umami.analyze.ng/script.js";
script.setAttribute('data-website-id', 'ff0c7858-3a58-4399-ab3a-0e652609cd63');

// 将 <script> 元素添加到 <head> 或 <body> 中
document.head.appendChild(script);
// 或者使用 document.body.appendChild(script);
