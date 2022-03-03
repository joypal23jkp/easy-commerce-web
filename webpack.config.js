const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");

const isProd = process.env.NODE_ENV === "production";

const config = {
    mode: isProd ? "production" : "development",
    entry: {
    index: "./src/index.tsx",
    },
    output: {
    publicPath: '/',
    path: resolve(__dirname, "dist"),
    filename: "bundle.js",
    },
    resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".css"],
    },
    module: {
    rules: [
        {
        test: /\.tsx?$/,
        use: "babel-loader",
        exclude: /node_modules/,
        },
        {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/,
        },
        {
            test: /\.(png|jpe?g|gif)$/i,
            loader: 'file-loader',
            options: {
                outputPath: 'assets/images',
            },
        },
    ],
    },
    plugins: [
    new HtmlWebpackPlugin({
        template: "./src/index.html",
        filename: "index.html",
        inject: "body",
    }),
    ],
    };

    if (isProd) {
    config.optimization = {
    minimizer: [new TerserWebpackPlugin()],
    };
    } else {
    config.devServer = {
    port: 9000,
    open: true,
    hot: true,
    compress: true,
    stats: "errors-only",
    overlay: true,
    // writeToDisk: true,
    contentBase: resolve(__dirname, "dist"),
    historyApiFallback: { index: "/", disableDotRule: true },
    publicPath: "/"
    };
}

module.exports = config;
