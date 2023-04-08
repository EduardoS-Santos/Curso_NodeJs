const fs = require("fs");
const path = require("path");

// criar uma pasta
fs.mkdir(path.join(__dirname, "/teste"), (error) => {
  if (error) {
    return console.log("Erro:", error);
  }
  console.log("Pasta Criada co sucesso. ");
});

// Criar um arquivo
fs.writeFile(
  path.join(__dirname, "/teste", "teste.txt"),
  "hello Node!!!!",
  (error) => {
    if (error) {
      return console.log("Erro", error);
    }
    console.log("Arquivo criado com sucesso.");
    // modifcar um arquivo

    fs.appendFile(
      path.join(__dirname, "/teste", "teste.txt"),
      "Hello World",
      (error) => {
        if (error) {
          return console.log("Erro:", error);
        }
        console.log("Arquivo modificado com sucesso.");
      }
    );

    // ler um arquivo

    fs.readFile(
      path.join(__dirname, "/teste", "teste.txt"),
      "utf8",
      (error, data) => {
        if (error) {
          return console.log("Erro:", error);
        }
        console.log(data);
      }
    );
  }
);
