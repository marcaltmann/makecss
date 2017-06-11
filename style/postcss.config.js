module.exports = {
  parser: false,
  plugins: {
    'postcss-import': {},
    'postcss-custom-media': {},
    'postcss-cssnext': {
      browsers: ['last 2 versions', '> 5%'],
    },
    //'cssnano': {},
  }
}
