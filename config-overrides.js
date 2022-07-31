module.exports = (config) => {
  let babelLoader = config.module.rules[1].oneOf[3];

  babelLoader.include = babelLoader.include.replace('/src', '');

  config.module.rules[1].oneOf[4] = babelLoader;
  return config;
};

