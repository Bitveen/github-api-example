const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    entry: {
        bundle: path.join(__dirname, '/src/index.jsx'),
        style: path.join(__dirname, '/src/style/main.scss')
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, '/public')
    },
    resolve: {
        root: path.join(__dirname, '/src'),
        alias: {
            App: 'components/App.jsx',
            SearchBox: 'components/SearchBox/SearchBox.jsx',
            SearchForm: 'components/SearchBox/SearchForm.jsx',
            SearchResults: 'components/SearchBox/SearchResults.jsx',
            Profile: 'components/Profile.jsx',
            ProfileMain: 'components/ProfileMain.jsx',
            Routes: 'routes.jsx',
            reducers: 'reducers.jsx',
            ActionsTypes: 'actionsTypes.jsx',
            actions: 'actions.jsx'
        },
        extensions: ['', '.js', '.jsx']
    },
    devtool: 'cheap-module-source-map',
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                include: path.join(__dirname, '/src'),
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react', 'stage-0']
                }
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!resolve-url!sass-loader?sourceMap')
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
            {
                test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.png$|\.jpe?g$|\.gif$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css', {
            allChunks: true
        })
    ],
    externals: {
        'cheerio': 'window',
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
    }




};
