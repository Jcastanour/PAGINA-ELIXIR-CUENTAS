function actualizarBotones() {
  // if (window.innerWidth > 600) {
  //   document.querySelectorAll(".botones button").forEach((button) => {
  //     button.style.display = "none";
  //   });
  //   document.querySelector(".contenedor-botones").style.display = "none";
  // } else {
  //   document.querySelectorAll(".botones button").forEach((button) => {
  //     button.style.display = "inline-block";
  //   });
  //   document.querySelector(".contenedor-botones").style.display = "block";
  // }

  navigator.clipboard
    .readText()
    .then((text) => {
      let filasG = 0;
      let contenidoG = 0;
      let menuatras = 0;

      document.querySelectorAll(".botones button").forEach((button) => {
        button.style.display = "none";
      });
      document.querySelector(".contenedor-botones").style.display = "none";

      if (text.includes("\t")) {
        // Si el texto contiene tabuladores, mostrar como lista
        filasG = text.trim().split("\n").length;
        contenidoG = text.trim().split("\t").length;
      } else if (text.includes("*")) {
        contenidoG = "*";
      }

      if (contenidoG === 2) {
        document.getElementById("plantilladenuevo").style.display = "inline";
        document.getElementById("abrirpagina").style.display = "inline";
      } else if (contenidoG === 3) {
        document.querySelector(".contenedor-botones").style.display = "inline";
        document.querySelector(".contenedor-botones").style.display = "inline";
      } else if (
        (contenidoG + (filasG - 1)) % 4 === 0 &&
        (contenidoG + (filasG - 1)) / 4 === filasG
      ) {
        document.getElementById("nombresyprecios").style.display = "inline";
      } else if (contenidoG === 5 && copiado === 0) {
        document.getElementById("generarconcinco").style.display = "inline";
      } else if (contenidoG === 5 && copiado === 1) {
        document.getElementById("plantilladenuevo").style.display = "inline";
        document.getElementById("abrirpagina").style.display = "inline";
        document.getElementById("copiarcuenta").style.display = "inline";
      } else if (
        contenidoG > 5 &&
        (contenidoG + (filasG - 1)) % 5 === 0 &&
        (contenidoG + (filasG - 1)) / 5 === filasG
      ) {
        document.getElementById("generarcombo").style.display = "inline";
      } else if (contenidoG === 6) {
        document.getElementById("recordardatos").style.display = "inline";
        document.getElementById("cambiocorreou").style.display = "inline";
        document.getElementById("cambiocontrau").style.display = "inline";
        document.getElementById("generarconseis").style.display = "inline";
      } else if (
        contenidoG > 6 &&
        (contenidoG + (filasG - 1)) % 6 === 0 &&
        (contenidoG + (filasG - 1)) / 6 === filasG
      ) {
        // Si el número de celdas es múltiplo de 6
        document.getElementById("recordardatos").style.display = "inline";
        document.getElementById("cambiocorreo").style.display = "inline";
        document.getElementById("cambiocontra").style.display = "inline";
      } else if (contenidoG === 7) {
        document.getElementById("plantilladenuevo").style.display = "inline";
        document.getElementById("abrirpagina").style.display = "inline";
        document.getElementById("copiarcuenta").style.display = "inline";
      } else if (contenidoG === "*") {
        if (plantillabool === 1) {
          document.getElementById("copiarexcel").style.display = "inline";
          document.getElementById("copiarcuenta").style.display = "inline";
          document.getElementById("abrirpagina").style.display = "inline";
        } else if (combo === 1) {
          document.getElementById("copiarexcel").style.display = "inline";
        }
        // Si el texto contiene asteriscos, aplicar formato especial
      }
    })
    .catch((error) => {});
}

function actualizarContenidoCopiado() {
  navigator.clipboard
    .readText()
    .then((text) => {
      let contenidoVisualizado = "";

      if (!text) {
        contenidoVisualizado = `<h2>Debes tener celdas copiadas</h2>`;
      } else if (text.includes("\t")) {
        // Si el texto contiene tabuladores, mostrar como lista
        const filas = text.trim().split("\n");
        const contenido = text.trim().split("\t");

        if (contenido.length <= 3) {
          // Si hay 3 celdas, mostrarlas como lista
          contenidoVisualizado = `<p>${contenido.length} celdas copiadas.</p>`;
          contenidoVisualizado += '<div class="lista">';
          contenido.forEach((item) => {
            contenidoVisualizado += `<div>${item}</div>`;
          });
          contenidoVisualizado += "</div>";
        } else if ((contenido.length > 1) & (contenido.length < 4)) {
          contenidoVisualizado = `<p>${contenido.length} celdas copiadas.</p>`;
        } else if (
          (contenido.length + (filas.length - 1)) % 4 === 0 &&
          (contenido.length + (filas.length - 1)) / 4 === filas.length
        ) {
          if (contenido.length === 4) {
            contenidoVisualizado = `<p>${contenido.length} celdas copiadas.</p>`;
          } else {
            contenidoVisualizado = `<p>${filas.length} filas de 4 celdas.</p>`;
          }
        } else if (contenido.length === 5) {
          contenidoVisualizado = `<p>${contenido.length} celdas copiadas.</p>`;
        } else if (
          contenido.length > 5 &&
          (contenido.length + (filas.length - 1)) % 5 === 0 &&
          (contenido.length + (filas.length - 1)) / 5 === filas.length
        ) {
          contenidoVisualizado = `<p>${filas.length} filas de 5 celdas.</p>`;
        } else if (contenido.length >= 6) {
          // Si hay 6 o más celdas
          if ((contenido.length + (filas.length - 1)) % 6 === 0) {
            // Si el número de celdas es múltiplo de 6
            contenidoVisualizado = `<p>${filas.length} filas de 6 celdas.</p>`;
          } else if (contenido.length === 7) {
            contenidoVisualizado = `<p>(${contenido.length}) Celdas para pegar en excel</p>`;
          } else {
            // Si el número de celdas es mayor a 7 celdas
            contenidoVisualizado = `<p>Atención: El número de celdas copiadas (${contenido.length}) no funciona en ningun caso.</p>`;
          }
        }
        // actualizarBotones(contenido.length,filas.length);
      } else if (text.includes("*")) {
        // Si el texto contiene asteriscos, aplicar formato especial
        const contenido = text.trim().split("\n");
        contenido.forEach((linea) => {
          contenidoVisualizado +=
            linea.replace(/\*(.*?)\*/g, "<b>$1</b>") + "<br>";
        });
        // actualizarBotones('*',0);
      } else {
        // Si no se cumple ninguna condición, mostrar el texto sin formato especial
        contenidoVisualizado = `<p>${text}</p>`;
      }

      document.getElementById("contenido-copiado").innerHTML =
        contenidoVisualizado;
    })
    .catch((error) => {});
}


else if (text.includes("*")) {
  // Si el texto contiene asteriscos, aplicar formato especial
  const contenido = text.trim().split("\n");
  console.log("aca");
  // console.log(contenidoVisualizado);
  contenido.forEach((linea) => {
    contenidoVisualizado +=
      linea.replace(/\*(.*?)\*/g, "<b>$1</b>") + "<br>";
  });

  if (plantillabool === 1) {
    document.getElementById("copiarexcel").style.display = "inline";
    document.getElementById("copiarcuenta").style.display = "inline";
    document.getElementById("abrirpagina").style.display = "inline";
  } else if (combo === 1) {
    document.getElementById("copiarexcel").style.display = "inline";
  }

  console.log("2222");
} else {
  // Si no se cumple ninguna condición, mostrar el texto sin formato especial
  console.log("entra?");
  contenidoVisualizado = `<p>${text}</p>`;
}

document.getElementById("contenido-copiado").innerHTML =
  contenidoVisualizado;
})
