const BACKEND_APP_ROOT = ['src'];
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');
const root_path = path.resolve(__dirname, '../');

let webpackConfig = {
    devtool: "source-map",
    name: "backend",
    target: 'node',
    node: {
        __filename: false,
        __dirname: false,
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    entry: [
        'babel-polyfill',
        path.resolve(root_path, ...BACKEND_APP_ROOT, 'bin', 'www.ts'),
    ],
    output: {
        path: path.resolve(root_path, 'dist'),
        publicPath: '/',
        filename: 'server.js',
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loaders: ['awesome-typescript-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.js$/,
                loaders: ['react-hot-loader', 'babel-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.json$/,
                loaders: ['json-loader'],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(["*"], {
            root: path.resolve(root_path, 'dist'),
            verbose: true,
            dry: false, // true for simulation
        }),
        new CopyWebpackPlugin([
            {
                from: "config",
                to: "config",
            },
            {
                from: "public",
                to: "public",
            },
            {
                from: "views",
                to: "views",
            },
        ]),
    ],
};

if (process.env.NODE_ENV === "production") {
    webpackConfig.plugins.push(
        new UglifyJSPlugin({
            mangle: {
                // Skip mangling these
                except: ['$super', '$', 'exports', 'require']
            }
        })
    );
}

module.exports = webpackConfig;
