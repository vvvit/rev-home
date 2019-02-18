const webpack = require('webpack');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const env = require('../../tools/env');
const pkg = require('../../package');

module.exports = {
    name: `client`,
    context: path.resolve(),
    mode: env.isDevelopment ? 'development' : 'production',
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    stats: {
        children: false,
        warningsFilter: /export .* was not found in/
    },
    entry: {
        [`main`]: path.resolve(`src/entries/client.ts`)
    },
    output: {
        pathinfo: false,
        path: path.resolve('build/static'),
        filename: '[name].js',
        publicPath: `/`
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                parallel: true
            }),
            new OptimizeCssAssetsPlugin()
        ],
        splitChunks: {
            cacheGroups: {
                vendors: {
                    name: `vendors`,
                    chunks: 'all'
                }
            }
        }
    },
    plugins: [
        new webpack.EnvironmentPlugin({
            NODE_ENV: env.isDevelopment ? 'development' : 'production',
            VERSION: pkg.version,
            STATIC_PATH: '/'
        }),
        new ForkTsCheckerWebpackPlugin({
            useTypescriptIncrementalApi: true,
            measureCompilationTime: true,
        }),
        new CleanWebpackPlugin('build', { root: path.resolve('./') }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new HtmlWebpackPlugin({
            filename: `../index.html`,
            chunksSortMode: 'manual',
            chunks: [
                `vendors`,
                `main`
            ],
            template: path.resolve('src/assets/index.html'),
            attributes: {
                crossorigin: 'anonymous'
            },
            ...(!env.isProduction ? {} : {
                minify: {
                    removeComments: true,
                    collapseWhitespace: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true,
                    removeEmptyAttributes: true,
                    removeStyleLinkTypeAttributes: true,
                    keepClosingSlash: true,
                    minifyJS: true,
                    minifyCSS: true,
                    minifyURLs: true
                }
            })
        })
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        // typechecking in ForkTsCheckerWebpackPlugin
                        transpileOnly: true,
                        experimentalWatchApi: true
                    }
                }
            },
            {
                test: /\.s?css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            parser: 'postcss-scss',
                            plugins: [
                                require('postcss-import')(),
                                require('postcss-mixins')(),
                                require('postcss-for')(),
                                require('postcss-nested')(),
                                require('postcss-simple-vars')(),
                                require('autoprefixer')({
                                    browsers: [
                                        'last 2 versions',
                                        'ie >= 9',
                                        'and_chr >= 2.3'
                                    ]
                                })
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.(svg|gif|png|jpe?g|ttf|woff2?)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '_/[name].[ext]'
                    }
                }
            }
        ]
    },
    devtool: env.isDevelopment && 'cheap-module-eval-source-map',
    devServer: {
        contentBase: [path.resolve('./build')],
        index: 'index.html',
        compress: false,
        port: 9000,
        overlay: {
            warnings: true,
            errors: true
        },
        writeToDisk: true
    }
};
