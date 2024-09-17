import path from "path";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import nodeExternals from "webpack-node-externals";
import TerserPlugin from "terser-webpack-plugin";
import { codecovWebpackPlugin } from "@codecov/webpack-plugin";

module.exports = {
  entry: "./src/main.ts",
  target: "node", // Since this is a Node.js app
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  resolve: {
    extensions: [".ts", ".js"], // Resolve these file types
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
        options: {
          transpileOnly: true, // Skip type checking during bundling
        },
      },
    ],
  },
  optimization: {
    usedExports: true, // Enables tree shaking
    sideEffects: false, // Assumes no side effects in modules
    splitChunks: {
      chunks: "all", // Enables bundle splitting
    },
    minimize: true,
    minimizer: [new TerserPlugin()], // Minimize JavaScript
  },
  externals: [nodeExternals()], // Excludes node_modules from the bundle
  devtool: false, // Disable source maps in production
  cache: {
    type: "filesystem", // Uses filesystem-based cache to store build output
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), //not tested
    new ForkTsCheckerWebpackPlugin({
      async: false, // Runs type checking in parallel
    }),
    // Put the Codecov webpack plugin after all other plugins
    codecovWebpackPlugin({
      enableBundleAnalysis: process.env.CODECOV_TOKEN !== undefined,
      bundleName: "task-management-webpack-bundle",
      uploadToken: process.env.CODECOV_TOKEN,
    }),
  ],
};
