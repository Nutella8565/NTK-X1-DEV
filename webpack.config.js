const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: "production",
  target: "node",
  entry: "./Nutella-toolkit.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "Nutella-toolkit.js"
  },
  node: {
    __dirname: false,
    __filename: false,
  },
  module: {
    parser: {
      javascript: {
        commonjsMagicComments: true,
        strictExportPresence: false,
      },
    },
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        type: 'javascript/auto',
      },
    ],
  },
  optimization: {
    minimizer: [
      new (require('terser-webpack-plugin'))({
        extractComments: false,
        terserOptions: {
          compress: {
            drop_console: true,
            drop_debugger: true,
          },
          format: {
            comments: false,
          },
        },
      }),
    ],
  },
  resolve: {
    fallback: {
      "zlib-sync": false,
      "bufferutil": false,
      "utf-8-validate": false
    }
  },
  externals: {
    'electron': 'commonjs electron',
    'better-sqlite3': 'commonjs better-sqlite3',
    'canvas': 'commonjs canvas',
    'robotjs': 'commonjs robotjs',
    'keytar': 'commonjs keytar',
    'winreg': 'commonjs winreg',
    'openvpn': 'commonjs openvpn',
    'wireguard': 'commonjs wireguard',
    'sudo-prompt': 'commonjs sudo-prompt',
    'zlib-sync': 'commonjs zlib-sync',
    'bufferutil': 'commonjs bufferutil',
    'utf-8-validate': 'commonjs utf-8-validate'
  }
};
