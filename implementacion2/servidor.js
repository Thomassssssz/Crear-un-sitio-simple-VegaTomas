const http = require("http");
const fs = require("fs");
const path = require("path");

const puerto = 3000;

const servidor = http.createServer((req, res) => {
  let rutaArchivo;

  if (req.url === "/") {
    rutaArchivo = path.join(__dirname, "public", "index.html");
  } else {
    rutaArchivo = path.join(__dirname, "public", req.url);
  }

  fs.readFile(rutaArchivo, (error, contenido) => {
    if (error) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Archivo no encontrado");
    } else {
      let extension = path.extname(rutaArchivo);

      let tipoContenido = "text/plain";
      if (extension === ".html") {
        tipoContenido = "text/html";
      }
      if (extension === ".js") {
        tipoContenido = "text/javascript";
      }

      res.writeHead(200, { "Content-Type": tipoContenido });
      res.end(contenido);
    }
  });
});

servidor.listen(puerto, () => {
  console.log("Servidor ejecutándose en http://localhost:3000");
});
