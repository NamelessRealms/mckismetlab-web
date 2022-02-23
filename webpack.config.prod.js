const { merge } = require("webpack-merge");
const webpack = require("webpack");
const baseConfig = require("./webpack.config");

module.exports = merge(baseConfig, {
    mode: "production"
});
