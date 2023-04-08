const { dirname } = require("path");
const path = require("path");

// Pega o nome do arquivo atual

console.log(path.basename(__filename));

// pega nome do Diretorio atual

console.log(path.dirname(__filename));

// pega a exensao do arquivo

console.log(path.extname(__filename));

// criar um objeto path

console.log(path.parse(__filename));

// junta caminhos de arquivos

console.log(path.join(__dirname, "teste", "test.html"));
