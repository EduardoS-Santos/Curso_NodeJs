const mongoose = require("mongoose");

const connectToDatabase = async () => {
  await mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejs.3kcvti8.mongodb.net/?retryWrites=true&w=majority`,
    (error) => {
      if (error) {
        return console.log("Ocorreu um erro ao se conectar com o banco", error);
      }

      return console.log("Conexão ao Banco de Dados realizada com o sucesso");
    }
  );
};

module.exports = connectToDatabase;
