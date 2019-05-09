module.exports = {
  //O entry é o arquivo de origem de sintaxe es6++ ou arquivo principal
  entry: "./main.js",
  //output me diz para qual arquivo será enviado a sintaxe transpilada
  output: {
    //o __dirname é a váriavel global que se refere ao diretório do arquivo webpack.config.js
    path: __dirname,
    filename: "bundle.js" //arquivo destino da transpilação
  },
  module: {
    rules: []
  }
};
