/*Desafio
Crie um programa onde você receberá valores inteiros não negativos como entrada.

Ordene estes valores de acordo com o seguinte critério:
Primeiro os Pares
Depois os Ímpares
Você deve exibir os pares em ordem crescente e na sequência os ímpares em ordem decrescente.
>Entrada
A primeira linha de entrada contém um único inteiro positivo N (1 < N < 10000) Este é o número de linhas de entrada que vem logo a seguir. As próximas N linhas terão, cada uma delas, um valor inteiro não negativo.
>Saída
Exiba todos os valores lidos na entrada segundo a ordem apresentada acima. Cada número deve ser impresso em uma linha, conforme exemplo de saída abaixo.

 
Exemplo de Entrada	
10
4
32
34
543
3456
654
567
87
6789
98

Exemplo de Saída
4
32
34
98
654
3456
6789
567
543
87
*/

const linhas = parseInt(gets());
let entrada = [];

for (let i = 0; i < linhas; i++) {
  entrada = [...entrada, gets()];
}

entrada = entrada.sort((a, b) => a - b);
const pares = entrada
  .filter(n => n % 2 === 0);
const impares = entrada
  .filter(n => n % 2 === 1)
  .reverse();
const saida = [...pares, ...impares];
saida.map((n) => console.log(n));