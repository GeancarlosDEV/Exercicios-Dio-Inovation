/* Leia 3 valores reais (A, B e C) e verifique se eles formam ou não um triângulo. Em caso positivo, calcule o perímetro do triângulo e apresente a mensagem:


Perimetro = XX.X


Em caso negativo, calcule a área do trapézio que tem A e B como base e C como altura, mostrando a mensagem


Area = XX.X*/

let lines = gets().split('\n')

const [a, b, c] = lines[0].split(' ').map(x => parseFloat(x));
const biggest = Math.max(a, b, c);
let sum;
if (biggest == a) sum = (b + c);
else if (biggest == b) sum = (a + c);
else sum = (b + a);

const triangle = sum > biggest;

if (triangle) {
  const perimeter = a + b + c;
  print(`Perimetro = ${perimeter.toFixed(1)}`)
} else {
  const area = ((a + b) * c) / 2;
  print(`Area = ${area.toFixed(1)}`)
}