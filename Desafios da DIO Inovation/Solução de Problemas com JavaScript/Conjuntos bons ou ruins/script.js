/*Desafio
Nesse algoritmo você deverá descobrir se um conjunto de palavras é bom ou ruim. Por definição, um conjunto é bom quando nenhuma palavra desse conjunto é um prefixo de outra palavra. Caso contrário, é considerado um conjunto ruim.
Por exemplo, {dbc, dae, dbcde} é um conjunto ruim, pois dbc é um prefixo de dbcde. Quando duas palavras são idênticas, definimos como uma sendo prefixo da outra.

>Entrada
A entrada contém vários casos de teste. A primeira linha de cada caso de teste terá um inteiro N (1 ≤ N ≤ 10⁵), que representa a quantidade de palavras no conjunto. Segue então N linhas, cada uma tendo uma palavra de no máximo 100 letras minúsculas. A entrada termina quando N = 0 e não deve ser processada.
>Saída
Para cada caso de teste, você deverá imprimir "Conjunto Bom", ou "Conjunto Ruim", conforme explicado acima.
 
Exemplo de Entrada	
3
abc
dae
abcde
2
abc
def
0
 
Exemplo de Saída
Conjunto Ruim
Conjunto Bom
  */

let nEntries = parseInt(gets());
let strgList = [];
let exit = 0;

const findPrefix = (fix, strg) => strg.startsWith(fix);

do {
  for (let counter = 0; counter < nEntries; counter++) {
    let str = gets();
    strgList.map(word => {
      if (word.length < str.length) {
        findPrefix(word, str) && exit++;
      } else {
        findPrefix(str, word) && exit++;
      }
    });
    strgList.push(str);
  }
  if (exit > 0) {
    console.log(`Conjunto Ruim`);
  } else {
    console.log(`Conjunto Bom`);
  }
  exit = 0;
  strgList = [];
  nEntries = parseInt(gets());
} while (nEntries !== 0);