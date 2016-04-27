module.exports = function(config) {
  config.set({
    files: [
      './tic_tac_toe.js',
      './test.js'
    ],
    frameworks: ['mocha', 'chai'],
    browers: ['Chrome']
  });
};