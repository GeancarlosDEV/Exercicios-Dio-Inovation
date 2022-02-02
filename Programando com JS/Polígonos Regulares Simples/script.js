/*Na geometria Euclidiana, um polígono regular é um polígono em que todos os ângulos são iguais e todos os lados tem o mesmo comprimento. Um polígono simples é aquele cujos segmentos de reta não se interceptam. Abaixo pode-se ver vários mosaicos feitos por polígonos regulares. */
let lines = gets().split("\n");
let line = lines.shift().split(' ');

const N = line[0]
const L = line[1]
const P = Number(N) * Number(L)

print(P);