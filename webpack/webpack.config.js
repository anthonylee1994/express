const BACKEND_APP_ROOT = ['src'];
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');
const root_path = path.resolve(__dirname, '../');

// ---- Back End ----
module.exports = {
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
        new CleanWebpackPlugin(['server.js', 'server.js.map'], {
            root: path.resolve(root_path, 'dist'),
            verbose: true,
            dry: false, // true for simulation
        }),
    ],
};
