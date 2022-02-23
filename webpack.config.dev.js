const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.config");

module.exports = merge(baseConfig, {
    mode: "development",
    devServer: {
        historyApiFallback: true,
        compress: true,
        port: 4000,
        // stats: "errors-only"
    }
});
