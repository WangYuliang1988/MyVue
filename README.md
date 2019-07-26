Vue 学习工程，参考：https://vuejs.org/v2/guide/index.html

## Vue 简介及环境搭建

### Vue 简介
Vue 是一个用于构建UI的渐进式JavaScript框架。Vue 的核心库只关注视图层，不仅易于上手，还便于同其它库或现有工程进行整合。

### Vue 环境搭建
1. 下载Vue编译好的JS文件。Vue的JS文件分为开发版和发布版两种，开发版在开发时使用，包含详细的错误信息，方便开发，下载地址： https://vuejs.org/js/vue.js ；发布版用于生产环境使用，体积更小且错误信息更精简，下载地址：https://vuejs.org/js/vue.min.js 。

### 创建并运行工程
1. 打开VS Code，新建目录，命名为：MyVue，在该目录下再新建三个子目录：css、js、html。
2. 将之前下载的Vue编译好的JS文件，拷贝到js目录下，开发版和发布版都拷贝过去。
3. 在html目录下新建一个index.html文件，输入以下内容：
    ```
    <!DOCTYPE html>

    <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <title>Vue</title>
        </head>
        <body>
        <div id="main">
            {{ message }}
        </div>

        <script src="../js/vue.js"></script>
        <script>
            var main = new Vue({
            el: "#main",
            data: {
                message: 'Hello, Vue!'
            }
            });
        </script>
        </body>
    </html>
    ```
4. 用浏览器打开index.html，页面显示 Hello, Vue! ，且控制台无错误输出，完成！