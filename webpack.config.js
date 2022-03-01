const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    target: "web",
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".json"]
    },
    entry: "./src/client/index.tsx",
    devtool: "source-map",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "main.js"
    },
    module: {
        rules: [
            {
                test: /\.(tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        cacheDirectory: true,
                        presets: [
                            [
                                "@babel/preset-env",
                                {
                                    targets: {
                                        browsers: "last 2 versions"
                                    },
                                    useBuiltIns: "usage",
                                    corejs: 3
                                }
                            ],
                            "@babel/preset-react",
                            "@babel/preset-typescript"
                        ]
                    }
                }
            },
            {
                test: /\.(ts)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            [
                                "@babel/preset-env",
                                {
                                    targets: {
                                        browsers: "last 2 versions"
                                    },
                                    useBuiltIns: "usage",
                                    corejs: 3
                                }
                            ],
                            "@babel/preset-typescript"
                        ]
                    }
                }
            },
            {
                test: /\.(scss)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                localIdentName: "[name]__[local]___[hash:base64:5]"
                            }
                        }
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            },
            {
                test: /\.(jpg|png|jpeg|gif)$/,
                use: {
                    loader: "url-loader"
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public/index.html"),
            filename: "index.html"
        }),
        new MiniCssExtractPlugin()
    ]
};
