/* eslint-disable @typescript-eslint/no-var-requires */
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

const path = require('node:path')

module.exports = (context, moduleName, mode) => {
  console.log('tsconfig', path.resolve(context, 'tsconfig.json'))
  const root = path.resolve(process.cwd(), '.')
  console.log('root', root)
  return {
    mode,
    context,
    cache: {
      type: 'filesystem'
    },
    entry: {
      app: {
        // not ready
        import: ['./src/main.ts']
      }
    },
    output: {
      hashFunction: 'xxhash64',
      path: path.resolve(root, `dist/${moduleName}`),
      filename: 'js/[name].js',
      publicPath: '/',
      chunkFilename: 'js/[name].js'
    },
    resolve: {
      // not ready
      alias: {
        '@': path.resolve(context, 'src')
      },
      extensions: [
        '.tsx',
        '.ts',
        '.mjs',
        '.js',
        '.jsx',
        '.vue',
        '.json',
        '.wasm'
      ]
    },
    module: {
      rules: [
        {
          test: /\.(svg)(\?.*)?$/,
          type: 'asset/resource',
          generator: {
            filename: 'img/[name].[hash:8][ext]'
          }
        },
        {
          test: /\.(png|jpe?g|gif|webp|avif)(\?.*)?$/,
          type: 'asset',
          generator: {
            filename: 'img/[name].[hash:8][ext]'
          }
        },
        {
          test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
          type: 'asset',
          generator: {
            filename: 'media/[name].[hash:8][ext]'
          }
        },
        {
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
          type: 'asset',
          generator: {
            filename: 'fonts/[name].[hash:8][ext]'
          }
        },
        {
          test: /\.m?jsx?$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          ]
        },
        {
          test: /\.tsx?$/,
          exclude: [],
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env', '@babel/preset-typescript']
              }
            },
            {
              loader: 'ts-loader',
              options: {
                appendTsSuffixTo: [/\.vue$/],
                configFile: path.resolve(context, 'tsconfig.json')
                // configFile: path.resolve(context, 'tsconfig.json')
              }
            }
          ]
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        },
        {
          test: /\.vue$/,
          use: ['vue-loader']
        }
      ]
    },
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      }),
      new VueLoaderPlugin(),
      new HtmlWebpackPlugin({
        templateParameters: {
          BASE_URL: `/`
        },
        template: path.resolve(`${context}/public/index.html`),
        filename: 'index.html'
      }),
      new MiniCssExtractPlugin({
        filename: 'css/[name].css',
        chunkFilename: 'css/[id].[name].css'
      })
    ]
  }
}
