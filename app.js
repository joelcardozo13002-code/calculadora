"use strict";

// Operaciones que estaban disponibles en la calculadora original recibida.
const botonCalcular = document.getElementById("calcular");
botonCalcular.addEventListener("click", calcularOperacion);

function calcularOperacion() {
  const textoA = document.getElementById("a").value.trim();
  const textoB = document.getElementById("b").value.trim();
  const operacion = document.getElementById("operacion").value;
  const salida = document.getElementById("resultado");

  if (textoA === "" || textoB === "") {
    mostrarResultado(salida, "Complete las dos entradas.", "error");
    return;
  }

  const a = Number(textoA);
  const b = Number(textoB);

  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    mostrarResultado(
      salida,
      "Escriba números válidos en ambas entradas.",
      "error",
    );
    return;
  }

  if (operacion === "dividir" && b === 0) {
    mostrarResultado(salida, "No se puede dividir entre cero.", "error");
    return;
  }

  if (operacion === "sumar") {
    mostrarResultado(salida, "Suma: " + (a + b), "exito");
  } else if (operacion === "dividir") {
    mostrarResultado(salida, "División: " + a / b, "exito");
  }
}

// Lista de objetos de conversión solicitada en la consigna.
const conversiones = [
  { id: "m-cm", origen: "m", destino: "cm", factor: 100 },
  { id: "cm-m", origen: "cm", destino: "m", factor: 0.01 },
  { id: "kg-g", origen: "kg", destino: "g", factor: 1000 },
  { id: "g-kg", origen: "g", destino: "kg", factor: 0.001 },
];

document.getElementById("convertir").addEventListener("click", convertirUnidad);

function convertirUnidad() {
  const textoValor = document.getElementById("valorConversion").value.trim();
  const tipo = document.getElementById("tipoConversion").value;
  const salida = document.getElementById("resultadoConversion");

  if (textoValor === "") {
    mostrarResultado(
      salida,
      "Ingrese un valor para realizar la conversión.",
      "error",
    );
    return;
  }

  const valor = Number(textoValor);

  if (!Number.isFinite(valor)) {
    mostrarResultado(salida, "Ingrese un número finito válido.", "error");
    return;
  }

  if (valor < 0) {
    mostrarResultado(salida, "No se aceptan valores negativos.", "error");
    return;
  }

  const conversion = conversiones.find((elemento) => elemento.id === tipo);

  if (!conversion) {
    mostrarResultado(salida, "Seleccione una conversión válida.", "error");
    return;
  }

  const resultado = calcularConversion(valor, conversion);
  if (!Number.isFinite(resultado)) {
    mostrarResultado(
      salida,
      "No se pudo obtener un resultado válido.",
      "error",
    );
    return;
  }

  mostrarResultado(
    salida,
    `${valor} ${conversion.origen} = ${resultado} ${conversion.destino}`,
    "exito",
  );
}

// Función reutilizable que calcula el resultado según el factor del objeto.
function calcularConversion(valor, conversion) {
  return valor * conversion.factor;
}

function mostrarResultado(elemento, mensaje, estado) {
  elemento.textContent = mensaje;
  elemento.classList.remove("error", "exito");
  if (estado) elemento.classList.add(estado);
}
