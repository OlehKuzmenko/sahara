const path = require('path');
module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      '@': path.resolve(__dirname, 'src'),
      '@services': path.resolve(__dirname, 'src/services'),
      '@interfaces': path.resolve(__dirname, 'src/interfaces'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@layouts': path.resolve(__dirname, 'src/layouts'),
      '@redux': path.resolve(__dirname, 'src/redux'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@icons': path.resolve(__dirname, 'src/icons'),
      '@img': path.resolve(__dirname, 'src/img'),
      '@mock': path.resolve(__dirname, 'src/mock'),
      '@validation': path.resolve(__dirname, 'src/validation'),
    },
  };
  return config;
};
