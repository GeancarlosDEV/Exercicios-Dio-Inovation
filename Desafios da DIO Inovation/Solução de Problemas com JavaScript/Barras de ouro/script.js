/*Desafio
O feudo da Mesopotâmia é rico e o povo é cordial e alegre. Mas quando o assunto são impostos, é praticamente um roubo. Todo final de ano, cada feudo do país deve pagar uma determinada quantidade de quilos de ouro em impostos. Quando é chegado o momento de coletar os impostos, o Rei envia sua carruagem real para recolher o ouro devido, usando as estradas do reino.
Cada estrada liga dois feudos diferentes e podem ser percorridos em duas direções. Com as estradas é possível ir de um feudo a outro, possivelmente passando por feudos intermediários. Mas há apenas um caminho entre dois feudos diferentes.
Em cada feudo há um cofre real, utilizado para armazenamento do ouro de impostos. Os cofres reais são imensos, de forma que cada cofre tem capacidade de armazenar todo o ouro devido por todo o reino. A carruagem sai do feudo principal, percorrendo as estradas do reino, visitando os feudos para recolher o ouro devido, podendo usar qualquer cofre real para armazenar temporariamente uma parte do imposto recolhido, se necessário. Ao final da coleta, todo o ouro devido por todas os feudos devem estar armazenados no cofre real do feudo principal.
José como é o Rei, contratou o seu time para, dados a quantidade de ouro a ser recolhido em cada feudo (em kg), a lista das estradas do reino, com os respectivos comprimentos (em km) e a capacidade de carga da carruagem real (em kg), determine qual é a mínima distância que a carruagem deve percorrer para recolher todo o ouro devido.

>Entrada
A primeira linha contém dois inteiros N e C indicando respectivamente o número de cidades e a capacidade de carga da carruagem (2 ≤ N ≤ 104 e 1 ≤ C ≤ 100). O feudo principal é identificado pelo número 1 e os outros feudos são identificadas por inteiros de 2 a N . A segunda linha contém N inteiros Ei representando a quantidade de imposto devido por cada feudo i (0 ≤ Ei ≤ 100 para 1 ≤ i ≤ N ). Cada uma das N-1 linhas seguintes contém três inteiros A , B e C , indicando que uma estrada liga o feudo A e o feudo B (1 ≤ A, B ≤ N ) e tem comprimento C (1 ≤ C ≤ 100).
>Saída
Seu programa deve produzir uma única linha com um inteiro representando a menor distância que a carruagem real deve percorrer para recolher todo o imposto devido, em km.
 
Exemplos de Entrada	
6 10
0 10 10 10 10 10
1 4 7
5 1 2
3 5 3
2 5 2
6 5 2
5 9
5 2 6 3 6
1 2 1
2 3 1
2 4 1
2 5 1

Exemplos de Saída
44
10 */

let paths = [];
let totalDistance = 0;

let [city, load] = gets().split(" ").map(input => parseInt(input));

let taxation = gets().split(" ").map(input => parseInt(input));

for(let counter = 0; counter < city-1; counter++){
  let [cityA, cityB, distance] = gets().split(" ").map(input => parseInt(input));
  
  paths.push( { cityA, cityB, distance } );
}

for( path of paths.reverse() ){
  let travel = 0;
  let routeLength = 0;
  
  if( trueRoute(path) ){
    travel = Math.ceil(taxation[path.cityB - 1] / load);
    taxation[path.cityA - 1] += taxation[path.cityB - 1];
    taxation[path.cityB - 1] = 0;
  }else{
    travel = Math.ceil(taxation[path.cityA - 1] / load);
    taxation[path.cityB - 1] += taxation[path.cityA - 1];
    taxation[path.cityA - 1] = 0;
  }
  routeLength = 2 * path.distance * travel;
  totalDistance += routeLength;
}

console.log(totalDistance);

function trueRoute(path){
  let goldRoute = -1;
  
  if( path.cityB !== 1 ) {
    goldRoute = paths
      .filter(route => route.cityA === 1 || route.cityB === 1)
        .filter(route => route.cityA === path.cityA || route.cityB === path.cityA)
        .length;
  }
  return goldRoute > 0 ? true : false;
}