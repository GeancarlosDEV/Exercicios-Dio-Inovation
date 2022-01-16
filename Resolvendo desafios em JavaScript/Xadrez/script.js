/*No tabuleiro de xadrez, a casa na linha 1, coluna 1 (canto superior esquerdo) é sempre branca e as cores das casas se alternam entre branca e preta, formando o formato tão conhecido como xadrez. Dessa forma, como o tabuleiro tradicional tem oito linhas e oito colunas, a casa na linha 8, coluna 8 (canto inferior direito) será também branca. Porém, neste problema, queremos ser capazes de predizer a cor independente do número de linhas e colunas, sendo: L linhas e C colunas. No exemplo da figura, para L = 6 e C = 9, a casa no canto inferior direito será preta, uma simples previsão matemática, não?*/
let lines = gets().split("\n");

var l = parseInt(lines[0]);
var c = parseInt(lines[1]);

if (l % 2 === 0)
  if (c % 2 === 0) print(1);
  else print(0);
else if (  l%2 == c%2   ) print(   "A casa inferior direita é 1." );
 else print(  "A casa inferior direita é 0."   ); 