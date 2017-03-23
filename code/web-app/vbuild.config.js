const path = require('path')

module.exports = options => ({
  entry: 'src/index.js',
  postcss: [
    // add more postcss plugins here
    // by default we have autoprefixer pre added
  ],
  webpack(config) {
    console.dir(config)
    // config[loaders] =
    // [
    //   {
    //     test: /\.vue$/,
    //     loader: 'vue-loader'
    //   }
    // ];

    return config
  }
})
