### npm 常用指令
----
```js
npm -v                  //查看版本号
npm list -l             //本地依赖版本清单
npm config set  <key>=<value>  // 设置别名，镜像，源地址
    |----常用配置镜像   registry
npm config get  <key>          // 依据key 获取依赖
npm info <package>      // 查看依赖具体详情信息
npm search <package>    // 模糊查询包，支持正则
npm i <package>         // 本地下载依赖
npm i <package> --force       // 本地强制更新下载依赖
npm i <package> -D         // 本地开发模式下载依赖
npm i -g <package>         // 本地全局下载依赖
npm i <package>@num         // 本地下载指定版本依赖
npm uninstall <package>         // 卸载本地安装的依赖
npm update <package>         // 更新本地安装的依赖
npm run <script>            //运行脚本
    |------钩子：pre-
    |------钩子：post-
    |------for example: 
            1.运行 npm run lint;
            2.检测是否存在prelint;postlint指令；
            3.依据 prelint , lint , postlint ,顺序依次执行存在的脚本
npx                  // 直接执行node_modules中工具包的命令
```
### npm包管理

``` bash
# 需要向npmjs.com申请用户名
$ npm adduser

# 登录
$ npm login

# 发布
$ npm publish

# 如果当前模块是一个beta版，比如1.3.1-beta.3，那么发布的时候需要使用tag参数，将其发布到指定标签，默认的发布标签是latest
$ npm publish --tag beta

# 如果发布私有模块，模块初始化的时候，需要加上scope参数。只有npm的付费用户才能发布私有模块。
$ npm init --scope=<yourscope>

# 如果你的模块是用ES6写的，那么发布的时候，最好转成ES5。首先，需要安装Babel。
$ npm install --save-dev babel-cli@6 babel-preset-es2015@6
```


