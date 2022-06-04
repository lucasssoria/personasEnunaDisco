let ingresos: number[] = new Array(0);
let min = 18;
let max = 40;
for (let i = 0; i < 270; i++) {
  ingresos[i] = Math.floor(Math.random() * (max - min) + min);
}
let menores21 = ingresos.filter((element) => element < 21);
let mayoroigual21 = ingresos.filter((element) => element >= 21);

console.log(menores21);
console.log(mayoroigual21);
console.log(ingresos);
