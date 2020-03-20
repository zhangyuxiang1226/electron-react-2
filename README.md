## Electron + React (使用Create-react-app构建)

## 启动
`npm run start`

## 打包
`npm run build:win`

## CRA不支持装饰器的解决方法
使用react-app-rewired，如下

npm install customize-cra react-app-rewired @babel/plugin-proposal-decorators --save

项目根目录新建config-overrides.js文件加入以下代码:
const { override, addDecoratorsLegacy } = require('customize-cra');
module.exports = override(
    addDecoratorsLegacy()
);

### 参考：
https://juejin.im/post/5b86b7fd6fb9a019c476fc06
