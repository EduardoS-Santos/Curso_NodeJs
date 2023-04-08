const http = require("http");

const port = 8080;

const server = http.createServer((req, res) => {
  if (req.url === "/home") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Ola sou eu</h1>");
  }

  if (req.url === "/users") {
    const users = [
      {
        name: "Joe Doe",
        email: "joe@doe.com",
      },
      {
        name: "Mary Doe",
        email: "mary@doe.com",
      },
      {
        name: "Ted Jhonson",
        email: "Ted@jhonson.com",
      },
    ];

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users));
  }
});

server.listen(port, () => console.log(`Online na Porta ${port}`));
