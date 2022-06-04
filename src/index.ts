let ingresos: number[] = new Array(0);
let mayoroigual21: number[] = new Array(0);
let menores21: number[] = new Array(0);
let min = 18;
let max = 40;
for (let i = 0; i < 270; i++) {
  ingresos[i] = Math.floor(Math.random() * (max - min) + min);
  if (ingresos[i] >= 21) {
    mayoroigual21[i] = ingresos[i];
  } else if (ingresos[i] < 21) {
    menores21[i] = ingresos[i];
  }
}
console.log(mayoroigual21);
console.log(menores21);
console.log(ingresos);

// arreglos usando filter
// let menores21 = ingresos.filter((ingresos) => ingresos < 21);
// let mayoroigual21 = ingresos.filter((ingresos) => ingresos >= 21);
