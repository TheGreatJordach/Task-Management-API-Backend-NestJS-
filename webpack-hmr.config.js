import nodeExternals from 'webpack-node-externals';
import { RunScriptWebpackPlugin } from 'run-script-webpack-plugin';
import webpack from 'webpack';

export default function (options) {
  return {
    ...options,

    // Entry configuration for Hot Module Replacement (HMR)
    entry: [
      'webpack/hot/poll?1000', // Adjust polling interval as needed
      options.entry
    ],

    // Externals configuration to exclude dependencies from the bundle
    externals: [
      nodeExternals({
        allowlist: ['webpack/hot/poll?1000'],
      }),
    ],

    plugins: [
      // HMR plugin to enable hot module replacement
      new webpack.HotModuleReplacementPlugin(),

      // Ignore changes in JavaScript and TypeScript declaration files to reduce rebuild times
      new webpack.WatchIgnorePlugin({
        paths: [/\.js$/, /\.d\.ts$/],
      }),

      // Plugin to automatically run the bundled script
      new RunScriptWebpackPlugin({
        name: options.output.filename,
        autoRestart: false,
        // Uncomment the following line for debugging purposes
        // nodeArgs: ['--inspect'],
      }),
    ],

    // Development-only performance hints (disabled for faster builds)
    performance: {
      hints: false,
    },

    // Resolves Node.js core modules and prevents bundling them
    resolve: {
      fallback: {
        fs: false,
        path: false,
        os: false,
      },
    },

    // Development-specific optimization settings
    optimization: {
      // Module concatenation is typically enabled by default for production builds
      concatenateModules: true,
      // Code splitting is generally not necessary for server-side apps
      splitChunks: {
        cacheGroups: {
          default: false,
          vendors: false,
        },
      },
    },


  };
}
