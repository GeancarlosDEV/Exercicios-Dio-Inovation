/*Desafio
A nutricionista Juliana Alcantra é uma excelente profissional de sua área. Em determinado dia, ela foi entrevistada ao vivo para um jornal da cidade. No entanto, ficou um pouco nervosa na hora, e diante da situação, sua fala ficou um pouco distorcida, repetindo o final de cada palavra após dizer a mesma. Para que isso não aconteça novamente, ela precisa da sua ajuda para escrever um programa que omita a parte repetida, de modo que as palavras sejam pronunciadas como deveriam ser.
Escreva um programa que, dada uma palavra errada, a mesma seja corrigida.

>Entrada
Haverá diversos casos de teste. Cada caso de teste é formado por uma palavra, de, no máximo, 30 caracteres, dita da forma errada. A entrada termina com fim de arquivo.
>Saída
Para cada caso de teste, escreva a palavra devidamente corrigida. Analise os exemplos para verificar o padrão, de modo a consertar todos os casos.
 
Exemplo de Entrada	
sanduicheiche
barrilarril
ratoato
sol
coliseueu
queijoijo
astroastro
a

Exemplo de Saída
sanduiche
barril
rato
sol
coliseu
queijo
astro
a */

let entrada = " ";
while(entrada != ""){
  entrada = gets();
    let encontrou = false;
    for (let i = 0; i < entrada.length; i++){
      let start = entrada.substring(0, i);
      let end = entrada.substring(i);
      if (start.endsWith(end)){
        console.log(start);
        encontrou = true;
      }
    }
    if (!encontrou){
      console.log(entrada);
    }
  }