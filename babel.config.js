module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  Plugins: [
    [
      'module:react-native-dotenv',
      {
        moduleName:'@env',
        path:'.env',
      },
    ],
  ],
};
