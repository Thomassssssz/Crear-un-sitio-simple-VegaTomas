let cajaTexto = document.getElementById("cajaTexto");
let boton = document.getElementById("botonColor");

let estado = 0;

cajaTexto.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    alert("Texto ingresado: " + cajaTexto.value);
  }
});

boton.addEventListener("click", function () {
  estado++;

  if (estado > 4) {
    estado = 0;
  }

  if (estado === 0) {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  } else if (estado === 1) {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  } else if (estado === 2) {
    document.body.style.backgroundColor = "lightblue";
    document.body.style.color = "red";
  } else if (estado === 3) {
    document.body.style.backgroundColor = "yellow";
    document.body.style.color = "blue";
  } else if (estado === 4) {
    document.body.style.backgroundColor = "purple";
    document.body.style.color = "white";
  }
});
