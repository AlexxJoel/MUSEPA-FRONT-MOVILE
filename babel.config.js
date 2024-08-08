module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module:react-native-dotenv',
        {
          path: '.env',          // Ruta a tu archivo .env
          safe: false,           // Si solo quieres cargar variables definidas en un archivo .env.example
          allowUndefined: true,  // Si quieres permitir variables sin valor
        },
      ],
    ],
  };
};
