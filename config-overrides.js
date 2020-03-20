const { override, addDecoratorsLegacy, setWebpackPublicPath } = require('customize-cra');

module.exports = override(
    addDecoratorsLegacy(),
    setWebpackPublicPath('/') // 这里暂时修改无效，期望是把打包的index.html引入路径改为 ./ 
);

// module.exports = function override(config, env) {
//     if (env === "production") {
//         config.output.publicPath = './';
//     }
//     return config;
// };