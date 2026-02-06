function esMac() {
  return /Mac|iPhone|iPad|iPod/.test(navigator.platform);
}

window.onload = function () {
  actualizarContenidoCopiado();
  setInterval(actualizarContenidoCopiado, 0);
};

let plantillabool = 0;
let copiado = 0;

function actualizarContenidoCopiado() {
  navigator.clipboard
    .readText()
    .then((text) => {
      let filasG = 0;
      let contenidoG = 0;
      let contenidoVisualizado = "";

      if (window.innerWidth > 700) {
        document.querySelectorAll(".botones button").forEach((button) => {
          button.style.display = "none";
        });
        document.querySelector(".contenedor-botones").style.display = "none";
      } else {
        document.querySelectorAll(".botones button").forEach((button) => {
          button.style.display = "inline-block";
        });
        document.querySelector(".contenedor-botones").style.display = "block";
      }

      console.log(filasG);
      if (text.includes("\t")) {
        // Si el texto contiene tabuladores, mostrar como lista
        filasG = text.trim().split("\n").length;
        contenidoG = text.trim().split("\t").length;
      } else if (text.includes("*")) {
        contenidoG = "*";
      }

      if (!text) {
        contenidoVisualizado = `<h2>Debes tener celdas copiadas</h2>`;
      } else if (text.includes("\t")) {
        contenidoVisualizado = `<p>${contenidoG} celdas copiadas.</p>`;

        if (contenidoG <= 3) {
          console.log(contenidoG);
          // Si hay menos de 3 celdas, mostrarlas como lista
          contenidoVisualizado = `<p>${contenidoG} celdas copiadas.</p>`;
          contenidoVisualizado += '<div class="lista">';
          text
            .trim()
            .split("\t")
            .forEach((item) => {
              contenidoVisualizado += `<div>${item}</div>`;
            });
          contenidoVisualizado += "</div>";

          //Botones
          if (contenidoG === 2 && plantillabool === 1) {
            document.getElementById("plantilladenuevo").style.display =
              "inline";
            document.getElementById("abrirpagina").style.display = "inline";
          } else if (contenidoG === 3) {
            document.querySelector(".contenedor-botones").style.display =
              "inline";
            document.querySelector(".contenedor-botones").style.display =
              "inline";
          }
        } else if (
          (contenidoG + (filasG - 1)) % 4 === 0 &&
          (contenidoG + (filasG - 1)) / 4 === filasG
        ) {
          if (contenidoG === 4) {
            contenidoVisualizado = `<p>${contenidoG} celdas copiadas.</p>`;
          } else {
            contenidoVisualizado = `<p>${filasG} filas de 4 celdas.</p>`;
          }
          document.getElementById("nombresyprecios").style.display = "inline";
        } else if (
          (contenidoG + (filasG - 1)) % 5 === 0 &&
          (contenidoG + (filasG - 1)) / 5 === filasG
        ) {
          if (contenidoG === 5 && filasG === 1) {
            contenidoVisualizado = `<p>${contenidoG} celdas copiadas.</p>`;
            document.getElementById("generarconcinco").style.display = "inline";
          } else if (contenidoG === 5 && filasG === 1) {
            contenidoVisualizado = `<p>${contenidoG} celdas copiadas.</p>`;
            document.getElementById("plantilladenuevo").style.display =
              "inline";
            document.getElementById("abrirpagina").style.display = "inline";
            document.getElementById("copiarcuenta").style.display = "inline";
            document.getElementById("generarconcinco").style.display = "inline";
          } else {
            contenidoVisualizado = `<p>${filasG} filas de 5 celdas.</p>`;
            document.getElementById("generarcombo").style.display = "inline";
          }
        } else if (
          (contenidoG + (filasG - 1)) % 6 === 0 &&
          (contenidoG + (filasG - 1)) / 6 === filasG
        ) {
          // Si hay 6 celdas
          if (contenidoG === 6) {
            contenidoVisualizado = `<p>(${contenidoG}) Celdas para pegar en excel</p>`;
            document.getElementById("recordardatos").style.display = "inline";
            document.getElementById("cambiocorreou").style.display = "inline";
            document.getElementById("cambiocontrau").style.display = "inline";
            document.getElementById("generarconseis").style.display = "inline";
          } else {
            contenidoVisualizado = `<p>${filasG} filas de 6 celdas.</p>`;
            document.getElementById("recordardatos").style.display = "inline";
            document.getElementById("cambiocorreo").style.display = "inline";
            document.getElementById("cambiocontra").style.display = "inline";
            document.getElementById("renovaciondiez").style.display = "inline";
          }
        } else if (contenidoG === 7 && copiado === 1) {
          contenidoVisualizado = `<p>(${contenidoG}) Celdas para pegar en excel</p>`;
          document.getElementById("plantilladenuevo").style.display = "inline";
          document.getElementById("abrirpagina").style.display = "inline";
          document.getElementById("copiarcuenta").style.display = "inline";
        } else if (
          (contenidoG + (filasG - 1)) % 8 === 0 &&
          (contenidoG + (filasG - 1)) / 8 === filasG
        ) {
          contenidoVisualizado = `<p>(${contenidoG}) Celdas para pegar en excel</p>`;
          document.getElementById("renovacionocho").style.display = "inline";
        } else if (
          (contenidoG + (filasG - 1)) % 9 === 0 &&
          (contenidoG + (filasG - 1)) / 9 === filasG
        ) {
          contenidoVisualizado = `<p>(${contenidoG}) Celdas para pegar en excel</p>`;
          document.getElementById("renovacionnueve").style.display = "inline";
          document.getElementById("renovacionconfirmacion").style.display =
            "inline";
        }
      } else if (text.includes("*")) {
        if (plantillabool === 1) {
          document.getElementById("copiarexcel").style.display = "inline";
          document.getElementById("copiarcuenta").style.display = "inline";
          document.getElementById("abrirpagina").style.display = "inline";
        }
        // Si el texto contiene asteriscos, aplicar formato especial
        const contenido = text.trim().split("\n");
        contenido.forEach((linea) => {
          contenidoVisualizado +=
            linea.replace(/\*(.*?)\*/g, "<b>$1</b>") + "<br>";
        });
      } else {
        // Si no se cumple ninguna condición, mostrar el texto sin formato especial
        contenidoVisualizado = `<p>${text}</p>`;
      }

      document.getElementById("contenido-copiado").innerHTML =
        contenidoVisualizado;
    })
    .catch((error) => {});
}

function obtenerFechaFormateada() {
  const fecha = new Date();
  let dia = fecha.getDate();
  let mes = fecha.getMonth() + 1; // Los meses en JavaScript son de 0 a 11
  let anio = fecha.getFullYear();

  if (dia === 31) {
    dia = 1;
    mes += 1;
    if (mes > 12) {
      mes = 1;
      anio += 1;
    }
  }

  // Asegurarse de que día y mes tengan dos dígitos
  const diaStr = dia.toString().padStart(2, "0");
  const mesStr = mes.toString().padStart(2, "0");

  return `${diaStr}/${mesStr}/${anio}`;
}

let contenidoGenerado;
let plantillaG;
let fechaG;
let PerfilG;
let whatasappG;
let nump;
let cuentaG;
let correoG;
let contraG;

function generarPlantilla() {
  navigator.clipboard
    .readText()
    .then((text) => {
      const contenido = text.trim().split("\t");
      if (contenido.length !== 3) {
        alert(
          "El contenido copiado no está en el formato esperado (deben ser tres columnas separadas por tabuladores).",
        );
        return;
      }

      const fecha = obtenerFechaFormateada();
      const partesFecha = fecha.split("/");
      const fechaReorganizada = `${partesFecha[1]}/${partesFecha[0]}/${partesFecha[2]}`;
      const [cuenta, correo, contrasena] = contenido;
      contenidoGenerado = contenido;
      nump = 0;
      const perfil = document.getElementById("perfil").value.trim();
      let plantilla = `*${cuenta}*\n*Correo:* ${correo}\n*Contrasena:* ${contrasena}\n\n*Perfil:* ${perfil}\n*Fecha:* ${fecha}`;
      if (cuenta === "NETFLIX EXTRA") {
        plantilla = `*NETFLIX TV PERSONAL*\n*Correo:* \n\n*Fecha:* ${fecha}`;
      }

      if (cuenta === "YOUTUBE PERSONAL") {
        plantilla = `*YOUTUBE PREMIUM RENOVABLE*\n*Correo:* \n\n*Fecha:* ${fecha}`;
      }

      PerfilG = perfil;
      plantillaG = plantilla;
      fechaG = fecha;
      cuentaG = cuenta;
      correoG = correo;
      contraG = contrasena;
      whatasappG = "";
      plantillabool = 1;
      generada = 1;

      navigator.clipboard
        .writeText(plantilla)
        .then(() => {
          // alert("La plantilla ha sido generada y copiada al portapapeles.");
          document.getElementById("perfil").value = "";
        })
        .catch((err) => console.error("Error al copiar al portapapeles:", err));
    })
    .catch((err) => console.error("Error al leer el portapapeles:", err));
}

function generarPlantilla2() {
  navigator.clipboard
    .readText()
    .then((text) => {
      const contenido = text.trim().split("\t");
      if (contenido.length !== 5) {
        alert(
          "El contenido copiado no está en el formato esperado (deben ser cinco columnas separadas por tabuladores).",
        );
        return;
      }

      const fecha = obtenerFechaFormateada();
      const partesFecha = fecha.split("/");
      const fechaReorganizada = `${partesFecha[1]}/${partesFecha[0]}/${partesFecha[2]}`;
      const [perfil, whatasapp, cuenta, correo, contrasena] = contenido;
      contenidoGenerado = contenido;
      nump = 1;
      let plantilla = `*${cuenta}*\n*Correo:* ${correo}\n*Contrasena:* ${contrasena}\n\n*Perfil:* ${perfil}\n*Fecha:* ${fecha}`;
      if (cuenta === "NETFLIX EXTRA") {
        plantilla = `*NETFLIX TV PERSONAL*\n*Correo:* \n\n*Fecha:* ${fecha}`;
      }

      if (cuenta === "YOUTUBE PERSONAL") {
        plantilla = `*YOUTUBE PREMIUM RENOVABLE*\n*Correo:* \n\n*Fecha:* ${fecha}`;
      }

      PerfilG = perfil;
      plantillaG = plantilla;
      fechaG = fecha;
      cuentaG = cuenta;
      correoG = correo;
      contraG = contrasena;
      whatasappG = whatasapp;
      plantillabool = 1;
      generada = 1;
      navigator.clipboard
        .writeText(plantilla)
        .then(() => {
          // alert("La plantilla ha sido generada y copiada al portapapeles.");
          document.getElementById("perfil").value = "";
        })
        .catch((err) => console.error("Error al copiar al portapapeles:", err));
    })
    .catch((err) => console.error("Error al leer el portapapeles:", err));
}

function generarPlantilla3() {
  navigator.clipboard
    .readText()
    .then((text) => {
      const contenido = text.trim().split("\t");
      if (contenido.length !== 6) {
        alert(
          "El contenido copiado no está en el formato esperado (deben ser seis columnas separadas por tabuladores).",
        );
        return;
      }

      const [perfil, whatasapp, fecha, cuenta, correo, contrasena] = contenido;
      contenidoGenerado = contenido;
      nump = 1;
      let plantilla = `*${cuenta}*\n*Correo:* ${correo}\n*Contrasena:* ${contrasena}\n\n*Perfil:* ${perfil}\n*Fecha:* ${fecha}`;
      if (cuenta === "NETFLIX EXTRA") {
        plantilla = `*NETFLIX TV PERSONAL*\n*Correo:* \n\n*Fecha:* ${fecha}`;
      }

      if (cuenta === "YOUTUBE PERSONAL") {
        plantilla = `*YOUTUBE PREMIUM RENOVABLE*\n*Correo:* \n\n*Fecha:* ${fecha}`;
      }

      PerfilG = perfil;
      plantillaG = plantilla;
      fechaG = fecha;
      cuentaG = cuenta;
      correoG = correo;
      contraG = contrasena;
      whatasappG = whatasapp;
      plantillabool = 1;
      generada = 1;
      navigator.clipboard
        .writeText(plantilla)
        .then(() => {
          // alert("La plantilla ha sido generada y copiada al portapapeles.");
          document.getElementById("perfil").value = "";
        })
        .catch((err) => console.error("Error al copiar al portapapeles:", err));
    })
    .catch((err) => console.error("Error al leer el portapapeles:", err));
}

function procesarFecha() {
  // Obtener el nombre del perfil y la fecha
  var perfil = PerfilG;
  var fecha = fechaG;

  // Separar el día de la fecha
  var dia = parseInt(fecha.split("/")[0]);

  // Crear el formato deseado para el día
  var diaFormato = "D";
  if (dia < 4) {
    diaFormato += "0" + dia;
  } else {
    diaFormato += dia;
  }

  // Crear el formato completo
  var formatoCompleto = perfil + " " + diaFormato + "\t" + whatasappG;

  // Copiar al portapapeles
  navigator.clipboard
    .writeText(formatoCompleto)
    .then(function () {
      console.log("Texto copiado al portapapeles: " + formatoCompleto);
      // Abrir la ventana de Google Contacts
      window.open("https://contacts.google.com/new", "_blank");
    })
    .catch(function (err) {
      console.error("Error al copiar al portapapeles: ", err);
    });
}

document
  .getElementById("perfil")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      generarPlantilla();
    }
  });

function plantilladenuevo() {
  if (!plantillaG) {
    //alert("Primero debes generar la plantilla.");
    return;
  }

  const texto = plantillaG;
  navigator.clipboard
    .writeText(texto)
    .then(() => {
      //alert("Texto copiado al portapapeles: " + texto);
    })
    .catch((err) => {
      alert("Error al copiar al portapapeles: " + err.message);
    });
}

function copiarcuenta() {
  if (!contenidoGenerado) {
    alert("Primero debes generar la plantilla.");
    return;
  }
  const texto = `${correoG}\t${contraG}`;
  navigator.clipboard
    .writeText(texto)
    .then(() => {
      //alert("Texto copiado al portapapeles: " + texto);
    })
    .catch((err) => {
      alert("Error al copiar al portapapeles: " + err.message);
    });
}

function obtenerFormulaContrasenaExcel() {
  // Windows (Excel en español)
  const formulaWindows = `=SI([@COMPLETA]="SI","CUENTA COMPLETA",SI.ERROR(SI(ESBLANCO([@[FECHA DE VENTA]]),"FALTA FECHA VENTA",BUSCARX(1,(AJUSTES!$AB$3:$AB$2000=[@CUENTA])*(AJUSTES!$AC$3:$AC$2000=[@CORREO]),AJUSTES!$AD$3:$AD$2000)),"CORREO NO EXISTE"))`;

  // Mac (Excel en inglés + ;)
  const formulaMac = `=IF([@COMPLETA]="SI";"CUENTA COMPLETA";IFERROR(IF(ISBLANK([@[FECHA DE VENTA]]);"FALTA FECHA VENTA";XLOOKUP(1;(AJUSTES!$AB$3:$AB$2000=[@CUENTA])*(AJUSTES!$AC$3:$AC$2000=[@CORREO]);AJUSTES!$AD$3:$AD$2000));"CORREO NO EXISTE"))`;

  return esMac() ? formulaMac : formulaWindows;
}

let combo = 0;
function copiarexcel() {
  if (!contenidoGenerado && combo === 0) {
    alert("Primero debes generar la plantilla.");
    return;
  } else if (combo === 0) {
  }

  let precioG;
  copiado = 1;
  if (cuentaG === "NETFLIX TELEVISOR") {
    precioG = 13000;
  } else if (cuentaG === "NETFLIX NO RENOVABLE") {
    precioG = 13000;
  } else if (cuentaG === "NETFLIX EXTRA") {
    precioG = 16000;
  } else if (cuentaG === "NETFLIX CELULAR/PC") {
    precioG = 10000;
  } else if (cuentaG === "PLEX") {
    precioG = 8000;
  } else if (cuentaG === "PLEX 2") {
    precioG = 14000;
  } else if (cuentaG === "PLEX 4") {
    precioG = 20000;
  } else if (cuentaG === "IPTV") {
    precioG = 9000;
  } else if (cuentaG === "LINK PARTIDOS YT") {
    precioG = 10000;
  } else if (cuentaG === "DISNEY PREMIUM") {
    precioG = 12000;
  } else if (cuentaG === "AMAZON") {
    precioG = 7000;
  } else if (cuentaG === "YOUTUBE PERSONAL") {
    precioG = 12000;
  } else if (cuentaG === "CHATGPT") {
    precioG = 15000;
  } else {
    precioG = "6000";
  }
  let contrasenaF = obtenerFormulaContrasenaExcel();
  const texto = `${PerfilG}\t${whatasappG}\t${fechaG}\t${cuentaG}\t${correoG}\t${contrasenaF}\t${precioG}`;
  navigator.clipboard
    .writeText(texto)
    .then(() => {
      //alert("Texto copiado al portapapeles: " + texto);
    })
    .catch((err) => {
      alert("Error al copiar al portapapeles: " + err.message);
    });
}

function abrirCuentaDesdeBoton() {
  if (!contenidoGenerado) {
    alert("Primero debes generar la plantilla.");
    return;
  }

  copiarcuenta();

  const tipoCuenta = cuentaG;
  let url;
  switch (tipoCuenta.toLowerCase()) {
    case "max":
      url = "https://play.max.com";
      break;
    case "amazon":
      url = "https://primevideo.com";
      break;
    case "crunchyroll":
      url = "https://crunchyroll.com";
      break;
    case "vix":
      url = "https://vix.com";
      break;
    case "disney":
      url = "https://disneyplus.com";
      break;
    case "star":
      url = "https://starplus.com";
      break;
    case "disney premium":
      url = "https://disneyplus.com";
      break;
    case "paramount":
      url = "https://paramountplus.com";
      break;
    case "netflix extra":
      url = "https://netflix.com";
      break;
    case "netflix televisor":
      url = "https://netflix.com";
      break;
    case "netflix celular/pc":
      url = "https://netflix.com";
      break;
    case "combo plus":
      window.open("https://disneyplus.com", "_blank");
      window.open("https://starplus.com", "_blank");
      return;
    case "netflix":
      url = "https://netflix.com";
      break;
    default:
      alert("Tipo de cuenta no reconocido");
      return;
  }
  window.open(url, "_blank"); // Abre la URL en una nueva pestaña
}

function recordarDatos() {
  // Obtener el texto del portapapeles
  navigator.clipboard
    .readText()
    .then((text) => {
      // Dividir la cadena en elementos separados por tabuladores
      const filas = text.trim().split("\n");

      // Verificar el formato esperado
      const contenido = text.trim().split("\t");
      if (
        contenido.length !== 6 &&
        (contenido.length + (filas.length - 1)) % 6 !== 0
      ) {
        alert(
          "El contenido copiado no está en el formato esperado (deben ser filas de 6 celdas).",
        );
        return;
      }

      // Procesar cada fila
      const salidaFormateada = filas
        .map((fila) => {
          // Dividir la fila en elementos separados por tabuladores
          const datos = fila.split("\t");

          // Obtener los valores relevantes
          let perfil = datos[3];
          const nombre = datos[0];
          let correo = datos[4];
          let contraseña = datos[5];

          // Reemplazar "NETFLIX EXTRA" con "NETFLIX TELEVISOR"
          if (perfil === "NETFLIX EXTRA") {
            perfil = "NETFLIX TELEVISOR";
            correo = "Cuenta Personal";
            contraseña = "";
          }

          if (perfil === "YOUTUBE PERSONAL") {
            correo = "Cuenta Personal";
            contraseña = "";
          }

          if (perfil === "COMBO PLUS") {
            perfil = "COMBO PLUS (DISNEY + STAR)";
          }

          // Formatear la salida de esta fila
          return (
            `*${perfil.toUpperCase()} ${nombre.toUpperCase()}*\n` +
            `*Correo:* ${correo}\n` +
            `*Contraseña:* ${contraseña}`
          );
        })
        .join("\n\n"); // Unir las salidas de cada fila separadas por dos saltos de línea

      // Colocar la salida formateada en el portapapeles
      return navigator.clipboard.writeText(salidaFormateada);
    })
    .then(() => {
      console.log(
        "La salida formateada se ha copiado correctamente al portapapeles.",
      );
    })
    .catch((err) => {
      console.error("Error:", err);
    });
}

function obtenerNombresYSumaPrecios() {
  navigator.clipboard
    .readText()
    .then((text) => {
      // Dividir el texto en filas
      const filas = text.trim().split("\n");

      // Inicializar variables para nombres y suma de precios
      let nombres = [];
      let sumaPrecios = 0;

      // Objeto para mantener un registro de las cuentas y su número total de repeticiones
      const cuentasRepetidas = {};

      // Iterar sobre cada fila
      filas.forEach((fila) => {
        // Dividir la fila en elementos separados por tabuladores
        const datos = fila.split("\t");

        // Extraer el nombre y el precio de la fila actual
        let nombreCuenta = datos[0];
        const precio = parseFloat(datos[3].replace(/[^\d.]/g, ""));

        // Si el nombre es "NETFLIX EXTRA", reemplazarlo por "NETFLIX TELEVISOR"
        if (nombreCuenta === "NETFLIX EXTRA") {
          nombreCuenta = "NETFLIX TELEVISOR";
        }

        // Agregar el nombre de la cuenta al registro y contar repeticiones
        cuentasRepetidas[nombreCuenta] =
          (cuentasRepetidas[nombreCuenta] || 0) + 1;

        // Sumar el precio al total
        sumaPrecios += precio;
      });

      // Construir la lista de nombres concatenados con el número total de repeticiones
      nombres = Object.entries(cuentasRepetidas).map(
        ([nombre, repeticiones]) => {
          return repeticiones > 1 ? `${repeticiones} ${nombre}` : nombre;
        },
      );

      // Concatenar los nombres de las cuentas separados por '+'
      const nombresConcatenados = nombres.join(" + ");

      // Formatear la suma de precios en pesos colombianos
      const sumaFormateada = sumaPrecios.toLocaleString("es-CO", {
        style: "currency",
        currency: "COP",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      });

      // Formatear la salida con los nombres concatenados y la suma de precios
      const salida = `${nombresConcatenados}\n${sumaFormateada}`;

      // Colocar la salida formateada en el portapapeles
      return navigator.clipboard.writeText(salida);
    })
    .catch((err) => {
      console.error("Error:", err);
    });
}

function renovaciones() {
  // Obtener el texto del portapapeles
  navigator.clipboard
    .readText()
    .then((text) => {
      // Obtener la fecha actual en formato dd/mm/yyyy
      const fechaActual = obtenerFechaFormateada();
      // Dividir la cadena en elementos separados por saltos de línea
      const filas = text.trim().split("\n");

      // Verificar el formato esperado
      const contenido = text.trim().split("\t");
      if (
        contenido.length !== 8 &&
        (contenido.length + (filas.length - 1)) % 8 !== 0
      ) {
        alert(
          "El contenido copiado no está en el formato esperado (deben ser filas de 6 celdas).",
        );
        return;
      }

      // Inicializar un objeto para agrupar por número de WhatsApp
      const agrupadosPorWhatsApp = {};

      // Iterar sobre cada fila
      filas.forEach((fila) => {
        // Dividir la fila en elementos separados por tabuladores
        const datos = fila.split("\t");

        // Extraer datos relevantes
        const nombrePerfil = datos[0];
        const whatsapp = datos[1];
        let cuenta = datos[3];
        let correo = datos[4];
        let contra = datos[5];
        const precio = parseFloat(datos[6].replace(/[^\d.]/g, ""));
        const diasRestantes = 0;

        // Procesar solo si los días restantes son 1
        if (diasRestantes === 0) {
          // Si el nombre de la cuenta es "NETFLIX EXTRA", reemplazarlo por "NETFLIX TELEVISOR"
          if (cuenta === "NETFLIX EXTRA") {
            cuenta = "NETFLIX TELEVISOR";
          }

          // Si el número de WhatsApp no está en el objeto, inicializar una entrada
          if (!agrupadosPorWhatsApp[whatsapp]) {
            agrupadosPorWhatsApp[whatsapp] = {
              perfiles: [],
              sumaPrecios: 0,
              cuentasRepetidas: {},
            };
          }

          // Agregar el perfil y cuenta al registro y contar repeticiones
          agrupadosPorWhatsApp[whatsapp].perfiles.push({
            cuenta,
            nombrePerfil,
            correo: contra.includes("CUENTA COMPLETA") ? correo : "", // Agregar correo si la contraseña indica "CUENTA COMPLETA"
          });
          agrupadosPorWhatsApp[whatsapp].cuentasRepetidas[cuenta] =
            (agrupadosPorWhatsApp[whatsapp].cuentasRepetidas[cuenta] || 0) + 1;

          // Sumar el precio al total
          agrupadosPorWhatsApp[whatsapp].sumaPrecios += precio;
        }
      });

      // Crear los enlaces de WhatsApp para cada número
      const enlacesConPerfil = Object.keys(agrupadosPorWhatsApp).map(
        (whatsapp, index) => {
          const cuentaInfo = agrupadosPorWhatsApp[whatsapp];
          const cuentas = cuentaInfo.perfiles
            .map((perfil) =>
              perfil.correo
                ? `*${perfil.cuenta}* - ${perfil.correo}`
                : `*${perfil.cuenta}* - ${perfil.nombrePerfil}`,
            )
            .join("\n");

          const sumaFormateada = cuentaInfo.sumaPrecios.toLocaleString(
            "es-CO",
            {
              style: "currency",
              currency: "COP",
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            },
          );

          const mensaje = `Hola 👋🏻, las siguientes cuentas vencieron el dia de hoy:\n\n${cuentas}\n\nPrecio Total: ${sumaFormateada}\n\n¿Deseas renovar?.\n\nRecuerda que si no contestas este mensaje asumiremos que se debe hacer cierre.`;

          // Crear el enlace de WhatsApp sin el símbolo "+"
          const enlaceWhatsApp = `https://wa.me/${whatsapp.replace(
            /\D/g,
            "",
          )}?text=${encodeURIComponent(mensaje)}`;

          return `*${
            index + 1
          } - ${cuentaInfo.perfiles[0].nombrePerfil.toUpperCase()} | ${whatsapp}*\n${enlaceWhatsApp}`;
        },
      );

      // ===partir en tandas y armar mensaje gigante ===
      const tamTanda = 10; // 10 por tanda
      const tandas = [];
      for (let i = 0; i < enlacesConPerfil.length; i += tamTanda) {
        tandas.push(enlacesConPerfil.slice(i, i + tamTanda));
      }

      // Texto de cada tanda con encabezado
      const bloquesTanda = tandas.map((t, idx, arr) => {
        const titulo =
          idx === arr.length - 1
            ? `*Última Tanda (${idx + 1}) - Renovación - ${fechaActual}*`
            : `*Tanda ${idx + 1} - Renovación - ${fechaActual}*`;
        return `${titulo}\n\n${t.join("\n\n")}`;
      });

      // Mensaje gigante: todas las tandas separadas por una línea
      const mensajeGigante = bloquesTanda.join("\n\n——————————————\n\n");
      // Crear el mensaje de renovación
      // const mensajeRenovacion =
      //   `*Renovación - ${fechaActual}*\n\n` + enlacesConPerfil.join("\n\n");

      // Copiar el mensaje al portapapeles
      return navigator.clipboard.writeText(mensajeGigante);
    })
    .then(() => {
      console.log(
        "Los enlaces de WhatsApp con el mensaje de renovación se han copiado correctamente al portapapeles.",
      );
    })
    .catch((err) => {
      console.error("Error al leer del portapapeles: ", err);
    });
}

function esNetflixNoRenovable(nombreCuenta) {
  const c = (nombreCuenta || "").toUpperCase().trim();
  return c.includes("NO RENOVABLE") || c === "NETFLIX NO RENOVABLE";
}

function renovaciones2() {
  // Obtener el texto del portapapeles
  navigator.clipboard
    .readText()
    .then((text) => {
      // Obtener la fecha actual en formato dd/mm/yyyy
      const fechaActual = obtenerFechaFormateada();

      // Dividir la cadena en elementos separados por saltos de línea
      const filas = text.trim().split("\n");

      // Verificar el formato esperado
      const contenido = text.trim().split("\t");
      if (
        contenido.length !== 9 &&
        (contenido.length + (filas.length - 1)) % 9 !== 0
      ) {
        alert(
          "El contenido copiado no está en el formato esperado (deben ser filas de 9 celdas).",
        );
        return;
      }

      // Inicializar un objeto para agrupar por número de WhatsApp
      const agrupadosPorWhatsApp = {};

      // Iterar sobre cada fila
      filas.forEach((fila) => {
        // Dividir la fila en elementos separados por tabuladores
        const datos = fila.split("\t");

        // Extraer datos relevantes
        const nombrePerfil = datos[0];
        const whatsapp = datos[1];
        let cuenta = datos[3];
        let correo = datos[4];
        let contra = datos[5];
        const precio = parseFloat(datos[6].replace(/[^\d.]/g, ""));
        const diasRestantes = parseInt(datos[8]);

        // Procesar solo si los días restantes son 1
        if (diasRestantes === 1) {
          // Si el número de WhatsApp no está en el objeto, inicializar una entrada
          if (!agrupadosPorWhatsApp[whatsapp]) {
            agrupadosPorWhatsApp[whatsapp] = {
              perfiles: [],
              sumaPrecios: 0,
              cuentasRepetidas: {},
            };
          }

          // Agregar el perfil y cuenta al registro y contar repeticiones
          agrupadosPorWhatsApp[whatsapp].perfiles.push({
            cuenta,
            nombrePerfil,
            correo: contra.includes("CUENTA COMPLETA") ? correo : "", // Agregar correo si la contraseña indica "CUENTA COMPLETA"
          });
          agrupadosPorWhatsApp[whatsapp].cuentasRepetidas[cuenta] =
            (agrupadosPorWhatsApp[whatsapp].cuentasRepetidas[cuenta] || 0) + 1;

          // Sumar el precio al total
          agrupadosPorWhatsApp[whatsapp].sumaPrecios += precio;
        }
      });

      // Crear los enlaces de WhatsApp para cada número
      const enlacesConPerfil = Object.keys(agrupadosPorWhatsApp).map(
        (whatsapp, index) => {
          const cuentaInfo = agrupadosPorWhatsApp[whatsapp];

          const tieneNetflixNoRenovable = cuentaInfo.perfiles.some(
            (p) => p.cuenta === "NETFLIX NO RENOVABLE",
          );

          const cuentas = cuentaInfo.perfiles
            .map((perfil) =>
              perfil.correo
                ? `*${perfil.cuenta}* - ${perfil.correo}`
                : `*${perfil.cuenta}* - ${perfil.nombrePerfil}`,
            )
            .join("\n");

          const sumaFormateada = cuentaInfo.sumaPrecios.toLocaleString(
            "es-CO",
            {
              style: "currency",
              currency: "COP",
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            },
          );

          const nombreSaludo =
            (cuentaInfo.perfiles[0].nombrePerfil || "").split(" ")[0] || "";

          const saludos = [
            "Hola {nombre} 👋",
            "¡Hola {nombre}! 😊",
            "Buen día {nombre} 👋",
            "Hey {nombre} 😎",
            "¡Hola {nombre}! 🌟",
            "Holaa 🌟",
            "¡Hola! 😊 Espero que estés muy bien",
            "Buen día 👋🏻",
            "¡Hola! 🌟, las siguientes cuenticas vencen el día de mañana:",
            "Hola 😄",
            "Buen día, ¿cómo estás?",
          ];

          const saludo = saludos[
            Math.floor(Math.random() * saludos.length)
          ].replace("{nombre}", nombreSaludo);

          const pregunta = "¿Quieres renovar por otro mes";
          const opciones = "✅ Sí, renuevo\n❌ No, gracias";
          const plazo24h =
            "Te agradezco que me confirmes en las *próximas 24 h*. Si necesitas más tiempo, avísame y lo anotamos. 🙌";
          const optout =
            "> (Si prefieres no recibir recordatorios, dime y lo quitamos)";

          let notaNetflix = "";
          if (tieneNetflixNoRenovable) {
            notaNetflix =
              "⚠️ *Nota: Netflix al no ser renovable, se debe cambiar a otra cuenta (podemos transferir tu perfil y no se te pierde nada del contenido, en menos de 5min ya vuelves a tener la nueva cuenta lista en tu tv 😊).*";
          }

          const mensaje = `${saludo}\n\nTus cuentas vencen mañana:\n\n${cuentas}\n\n💲 Total: ${sumaFormateada}\n\n${pregunta}\n\n${opciones}\n\n${notaNetflix}\n\n${plazo24h}\n${optout}`;

          // Crear el enlace de WhatsApp sin el símbolo "+"
          const enlaceWhatsApp = `https://wa.me/${whatsapp.replace(
            /\D/g,
            "",
          )}?text=${encodeURIComponent(mensaje)}`;

          return `*${
            index + 1
          } - ${cuentaInfo.perfiles[0].nombrePerfil.toUpperCase()} | ${whatsapp}*\n${enlaceWhatsApp}`;
        },
      );

      // ===partir en tandas y armar mensaje gigante ===
      const tamTanda = 2; // 2 por tanda
      const subTandas = [];
      for (let i = 0; i < enlacesConPerfil.length; i += tamTanda) {
        subTandas.push(enlacesConPerfil.slice(i, i + tamTanda));
      }

      const MIN_POR_SUBTANDA = 6; // minutos por tanda
      const MAX_SUBTANDAS_POR_TANDA = 6; // 6 subtandas por tanda (=> 36 min)

      // Agrupar las subtandas en TANDAS (cada tanda contiene hasta 6 subtandas)
      const tandasHora = [];
      for (let i = 0; i < subTandas.length; i += MAX_SUBTANDAS_POR_TANDA) {
        tandasHora.push(subTandas.slice(i, i + MAX_SUBTANDAS_POR_TANDA));
      }

      // Texto final: cada TANDA dura 1 hora (36 min envíos + 24 min reposo)
      const horaInicio = new Date(); // inicio de la Tanda 1 (ahora)
      const bloquesTanda = tandasHora.map((bloqueSub, hIdx) => {
        // Inicio de esta tanda: hIdx horas después del inicio
        const inicioTanda = new Date(
          horaInicio.getTime() + hIdx * 60 * 60 * 1000,
        );

        // Título de la tanda (puedes agregar la hora de inicio si quieres)
        const tituloTanda = `*Tanda ${hIdx + 1} - Renovación - ${fechaActual}*`;

        // Subtandas dentro de la tanda: cada 6 minutos, 2 links por subtanda
        const lineasSub = bloqueSub.map((sub, sIdx) => {
          const horaSub = new Date(
            inicioTanda.getTime() + sIdx * MIN_POR_SUBTANDA * 60 * 1000,
          ).toLocaleTimeString("es-CO", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          });

          const encabezadoSub = `_Subtanda ${sIdx + 1} — ${horaSub}_`;
          return `${encabezadoSub}\n\n${sub.join("\n\n")}`;
        });

        // Mensaje de PAUSA (visible) hasta completar la hora
        // (solo si hay más tandas después de esta)
        let pausaVisible = "";
        if (hIdx < tandasHora.length - 1) {
          const finHora = new Date(inicioTanda.getTime() + 60 * 60 * 1000); // siguiente "hora" de esta tanda
          const horaPausaFmt = finHora.toLocaleTimeString("es-CO", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          });
          pausaVisible = `\n\n— PAUSA (Regreso: ${horaPausaFmt}) — ⏸️ (reposo ${
            60 - MIN_POR_SUBTANDA * MAX_SUBTANDAS_POR_TANDA
          } min)  —`;
        }

        return `${tituloTanda}\n\n${lineasSub.join("\n\n")}${pausaVisible}`;
      });

      // Mensaje gigante: todas las tandas separadas por una línea
      const mensajeGigante = bloquesTanda.join("\n\n——————————————\n\n");

      // Copiar al portapapeles
      return navigator.clipboard.writeText(mensajeGigante);
    })
    .then(() => {
      console.log(
        "Los enlaces de WhatsApp con el mensaje de renovación se han copiado correctamente al portapapeles.",
      );
    })
    .catch((err) => {
      console.error("Error al leer del portapapeles: ", err);
    });
}

function cambioContra() {
  // Obtener la fecha actual en formato YYYY-MM-DD
  const fechaActual = obtenerFechaFormateada();

  // Obtener el texto del portapapeles
  navigator.clipboard
    .readText()
    .then((text) => {
      // Dividir el texto del portapapeles en filas
      const contenido = text.trim().split("\t");
      const filas = text.trim().split("\n");
      if (
        (contenido.length !== 6) &
        ((contenido.length + (filas.length - 1)) % 6 !== 0)
      ) {
        alert(
          "El contenido copiado no está en el formato esperado (deben ser filas de 9 celdas).",
        );
        return;
      }

      // Array para almacenar los enlaces de WhatsApp con el perfil y el nombre
      const enlacesConPerfil = [];

      // Iterar sobre cada fila y generar un enlace de WhatsApp para cada una
      for (let i = 0; i < filas.length; i++) {
        const fila = filas[i].split("\t"); // Dividir la fila en elementos separados por tabuladores

        // Obtener los valores relevantes
        // const perfil = fila[2];
        const nombre = fila[0];
        const cuenta = fila[3];
        const correo = fila[4];
        const contraseña = fila[5];
        const telefono = fila[1].replace(/\s+/g, ""); // Eliminar espacios en blanco del número de teléfono
        const telefonoSinPlus = telefono.replace(/^\+/, ""); // Eliminar el símbolo "+" del número de teléfono si está presente

        // Formatear el mensaje de cambio de contraseña con el perfil y el nombre en negrita
        const mensaje =
          `Hola, te informo que la contraseña de ${cuenta} cambió.\n\n` +
          `*${cuenta.toUpperCase()} ${nombre.toUpperCase()}*\n` +
          `*Correo:* ${correo}\n` +
          `*Contraseña:* ${contraseña}\n\n` +
          `*No necesariamente significa que se te cerro sesion, se envia para que siempre tengas la ultima contraseña*`;

        // Crear el enlace de WhatsApp sin el símbolo "+"
        const enlaceWhatsApp = `https://wa.me/${telefonoSinPlus}?text=${encodeURIComponent(
          mensaje,
        )}`;

        // Almacenar el enlace junto con el perfil y el nombre
        enlacesConPerfil.push(
          `*Perfil: ${cuenta.toUpperCase()} ${nombre.toUpperCase()}*\n${enlaceWhatsApp}`,
        );
      }

      // Concatenar el mensaje de cambio de contraseña al principio de la cadena de enlaces
      const mensajeCambio =
        `*Cambio contraseña - ${filas[0].split("\t")[3]}*\n` +
        `${filas[0].split("\t")[4]}\n` +
        `*Fecha del cambio:* ${fechaActual}\n\n`;
      const enlacesConPerfilTexto =
        mensajeCambio + enlacesConPerfil.join("\n\n");

      // Copiar los enlaces al portapapeles
      return navigator.clipboard.writeText(enlacesConPerfilTexto);
    })
    .then(() => {
      console.log(
        "Los enlaces de WhatsApp con el mensaje de cambio de contraseña se han copiado correctamente al portapapeles.",
      );
    })
    .catch((err) => {
      console.error("Error:", err);
    });
}

function cambioCorreo() {
  // Obtener la fecha actual en formato YYYY-MM-DD
  const fechaActual = obtenerFechaFormateada();

  // Obtener el texto del portapapeles
  navigator.clipboard
    .readText()
    .then((text) => {
      // Dividir el texto del portapapeles en filas
      const contenido = text.trim().split("\t");
      const filas = text.trim().split("\n");
      if (
        (contenido.length !== 6) &
        ((contenido.length + (filas.length - 1)) % 6 !== 0)
      ) {
        alert(
          "El contenido copiado no está en el formato esperado (deben ser filas de 6 celdas).",
        );
        return;
      }

      // Array para almacenar los enlaces de WhatsApp con el perfil y el nombre
      const enlacesConPerfil = [];

      // Iterar sobre cada fila y generar un enlace de WhatsApp para cada una
      for (let i = 0; i < filas.length; i++) {
        const fila = filas[i].split("\t"); // Dividir la fila en elementos separados por tabuladores

        // Obtener los valores relevantes
        // const perfil = fila[2];
        const nombre = fila[0];
        const cuenta = fila[3];
        const correo = fila[4];
        const contraseña = fila[5];
        const telefono = fila[1].replace(/\s+/g, ""); // Eliminar espacios en blanco del número de teléfono
        const telefonoSinPlus = telefono.replace(/^\+/, ""); // Eliminar el símbolo "+" del número de teléfono si está presente

        // Formatear el mensaje de cambio de contraseña con el perfil y el nombre en negrita
        const mensaje =
          `Hola, previniendo un problema con ${cuenta} se hizo un cambio en el correo.\n\n` +
          `*${cuenta.toUpperCase()} ${nombre.toUpperCase()}*\n` +
          `*Correo:* ${correo}\n` +
          `*Contraseña:* ${contraseña}\n\n` +
          `*Si se te llega a cerrar sesión ingresa de nuevo con este correo porfa.*`;

        // Crear el enlace de WhatsApp sin el símbolo "+"
        const enlaceWhatsApp = `https://wa.me/${telefonoSinPlus}?text=${encodeURIComponent(
          mensaje,
        )}`;

        // Almacenar el enlace junto con el perfil y el nombre
        enlacesConPerfil.push(
          `*Perfil: ${cuenta.toUpperCase()} ${nombre.toUpperCase()}*\n${enlaceWhatsApp}`,
        );
      }

      // Concatenar el mensaje de cambio de contraseña al principio de la cadena de enlaces
      const mensajeCambio =
        `*Cambio Correo - cuenta - ${filas[0].split("\t")[3]}*\n` +
        `${filas[0].split("\t")[4]}\n` +
        `*Fecha del cambio:* ${fechaActual}\n\n`;
      const enlacesConPerfilTexto =
        mensajeCambio + enlacesConPerfil.join("\n\n");

      // Copiar los enlaces al portapapeles
      return navigator.clipboard.writeText(enlacesConPerfilTexto);
    })
    .then(() => {
      console.log(
        "Los enlaces de WhatsApp con el mensaje de cambio de contraseña se han copiado correctamente al portapapeles.",
      );
    })
    .catch((err) => {
      console.error("Error:", err);
    });
}

function cambioContrau() {
  // Obtener el texto del portapapeles
  navigator.clipboard
    .readText()
    .then((text) => {
      // Dividir el texto del portapapeles en filas
      const contenido = text.trim().split("\t");

      console.log(contenido);

      if ((contenido.length !== 6) & (contenido.length % 6 !== 0)) {
        alert(
          "El contenido copiado no está en el formato esperado (deben ser 6 celdas).",
        );
        return;
      }

      // Iterar sobre cada fila y generar un enlace de WhatsApp para cada una

      const fila = contenido; // Dividir la fila en elementos separados por tabuladores

      console.log(fila);
      // Obtener los valores relevantes
      // const perfil = fila[2];
      const nombre = fila[0];
      const cuenta = fila[3];
      const correo = fila[4];
      const contraseña = fila[5];
      const telefono = fila[1].replace(/\s+/g, ""); // Eliminar espacios en blanco del número de teléfono
      const telefonoSinPlus = telefono.replace(/^\+/, ""); // Eliminar el símbolo "+" del número de teléfono si está presente
      plantillabool = 2;

      // Formatear el mensaje de cambio de contraseña con el perfil y el nombre en negrita
      const mensaje =
        `Hola, te informo que la contraseña de ${cuenta} cambió.\n\n` +
        `*${cuenta.toUpperCase()} ${nombre.toUpperCase()}*\n` +
        `*Correo:* ${correo}\n` +
        `*Contraseña:* ${contraseña}\n\n` +
        `*No necesariamente significa que se te cerro sesion, se envia para que siempre tengas la ultima contraseña*`;

      // Copiar los enlaces al portapapeles
      return navigator.clipboard.writeText(mensaje);
    })
    .then(() => {
      console.log(
        "Los enlaces de WhatsApp con el mensaje de cambio de contraseña se han copiado correctamente al portapapeles.",
      );
    })
    .catch((err) => {
      console.error("Error:", err);
    });
}

function cambioCorreou() {
  // Obtener el text del portapapeles
  navigator.clipboard
    .readText()
    .then((text) => {
      // Dividir el texto del portapapeles en filas
      const contenido = text.trim().split("\t");
      if ((contenido.length !== 6) & (contenido.length % 6 !== 0)) {
        alert(
          "El contenido copiado no está en el formato esperado (deben ser filas de 6 celdas).",
        );
        return;
      }

      // Iterar sobre cada fila y generar un enlace de WhatsApp para cada una

      const fila = contenido; // Dividir la fila en elementos separados por tabuladores

      // Obtener los valores relevantes
      // const perfil = fila[2];
      const nombre = fila[0];
      const cuenta = fila[3];
      const correo = fila[4];
      const contraseña = fila[5];
      const telefono = fila[1].replace(/\s+/g, ""); // Eliminar espacios en blanco del número de teléfono
      const telefonoSinPlus = telefono.replace(/^\+/, ""); // Eliminar el símbolo "+" del número de teléfono si está presente

      plantillabool = 2;
      // Formatear el mensaje de cambio de contraseña con el perfil y el nombre en negrita
      const mensaje =
        `Hola, previniendo un problema con ${cuenta} se hara un cambio de cuenta.\n\n` +
        `*${cuenta.toUpperCase()} ${nombre.toUpperCase()}*\n` +
        `*Correo:* ${correo}\n` +
        `*Contraseña:* ${contraseña}\n\n` +
        `*Si se te llega a cerrar sesión, ingresa de nuevo con esta cuenta porfa.*`;

      // Copiar los enlaces al portapapeles
      return navigator.clipboard.writeText(mensaje);
    })
    .then(() => {
      console.log(
        "Los enlaces de WhatsApp con el mensaje de cambio de contraseña se han copiado correctamente al portapapeles.",
      );
    })
    .catch((err) => {
      console.error("Error:", err);
    });
}

function confirmarrenovacion() {
  // Obtener el texto del portapapeles
  navigator.clipboard
    .readText()
    .then((text) => {
      // Dividir la cadena en elementos separados por tabuladores
      const filas = text.trim().split("\n");

      // Verificar el formato esperado
      const contenido = text.trim().split("\t");
      if (
        contenido.length !== 9 &&
        (contenido.length + (filas.length - 1)) % 9 !== 0
      ) {
        alert(
          "El contenido copiado no está en el formato esperado (deben ser filas de 9 celdas).",
        );
        return;
      }

      let hayRenovables = false;
      let hayNoRenovables = false;

      // Procesar cada fila
      const salidaFormateada = filas
        .map((fila) => {
          // Dividir la fila en elementos separados por tabuladores
          const datos = fila.split("\t");

          // Obtener los valores relevantes
          let perfil = datos[3];
          const nombre = datos[0];
          const fechavencimiento = datos[7];
          let correo = datos[4];
          let contraseña = datos[5];

          // Reemplazar "NETFLIX EXTRA" con "NETFLIX TELEVISOR"
          if (perfil === "NETFLIX EXTRA") {
            correo = "Cuenta Personal";
            contraseña = "";
          }

          if (perfil === "YOUTUBE PERSONAL") {
            correo = "Cuenta Personal";
            contraseña = "";
          }

          if (perfil === "NETFLIX NO RENOVABLE") {
            hayNoRenovables = true;
          } else {
            hayRenovables = true;
          }
          // Formatear la salida de esta fila
          return (
            `*CUENTA RENOVADA* ✅\n` +
            `*${perfil.toUpperCase()} ${nombre.toUpperCase()}*\n` +
            `*Correo:* ${correo}\n` +
            `*Contraseña:* ${contraseña}\n` +
            `*Vence el:* ${fechavencimiento}`
          );
        })
        .join("\n\n"); // Unir las salidas de cada fila separadas por dos saltos de línea

      let mensajeFinal = "";

      if (hayRenovables && hayNoRenovables) {
        mensajeFinal =
          "\n> ⚠️ Algunas cuentas son *NO renovables*. " +
          "Las demás continúan con normalidad. " +
          "En todos los casos, el perfil y el historial se mantienen igual 👍";
      } else if (hayNoRenovables) {
        mensajeFinal =
          "\n> ⚠️ Esta(s) cuenta(s) son *NO renovables*. " +
          "Pero no te preocupes: el perfil y todo el historial se mantienen igual 👍";
      } else {
        mensajeFinal =
          "\n> ⁠No te preocupes, la(s) cuenta(s) sigue(n) siendo las mismas✨";
      }

      const salidaFinal =
        salidaFormateada +
        "\n\n*Gracias por continuar con nosotros* 🫶🏼" +
        mensajeFinal;
      // Colocar la salida formateada en el portapapeles
      return navigator.clipboard.writeText(salidaFinal);
    })
    .then(() => {
      console.log(
        "La salida formateada se ha copiado correctamente al portapapeles.",
      );
    })
    .catch((err) => {
      console.error("Error:", err);
    });
}
