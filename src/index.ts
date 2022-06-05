let ingresos: number[] = new Array(0);
let mayorOIgual21: number = 0;
let menores21: number = 0;
let min = 18;
let max = 40;

for (let i = 0; i < 270; i++) {
  ingresos[i] = Math.floor(Math.random() * (max - min) + min);
  if (ingresos[i] >= 21) {
    mayorOIgual21 = mayorOIgual21 + 1;
  } else {
    menores21 = menores21 + 1;
  }
}

console.log("Personas mayores a 21 ", mayorOIgual21);
console.log("Personas menores a 21", menores21);
console.log("Total de personas", ingresos.length);

// arreglos usando filter
// let menores21 = ingresos.filter((ingresos) => ingresos < 21);
// let mayoroigual21 = ingresos.filter((ingresos) => ingresos >= 21);
