/*Desafio
Você está ajudando a desenvolver um sistema de gerenciamento de weblog chamado Weblogger Brasil. Embora Weblogger Brasil coloque todo o conteúdo direto no website em HTML, nem todos autores apreciam usar tags HTML em seus textos. Para tornar a vida deles mais fáceis, Weblogger Brasil oferece uma sintaxe simples chamada atalhos para obter alguns efeitos textuais em HTML. Sua tarefa é, dado um documento escrito com atalhos, traduzi-lo para o HTML apropriado.
                
>Entrada
A entrada contem vários casos de teste. Cada caso de teste é composto por uma linha que contem uma string texto, com zero ou mais usos dos atalhos itálico e negrito. Cada texto tem de 1 a 50 caracteres, inclusive. Os únicos caracteres permitidos no texto são os caracteres alfabéticos (de 'a' a 'z' e de 'A' a 'Z'), o sublinhado ('_'), o asterisco ('*'), o caractere de espaço e os símbolos de pontuação ',', ';', '.', '!', '?', '-', '(' e ')'. O caractere sublinhado '_' ocorre no texto um número par de vezes. O asterisco '*' também aparece um número par de vezes no texto. Nenhuma substring do texto entre um par de sublinhados ou entre um par de asteriscos pode conter outros sublinhados ou asteriscos, respectivamente.
>Saída
Para cada linha de entrada seu programa deve gerar uma linha de saída com o texto traduzido para HTML como demonstrado nos exemplos abaixo. Para tornar itálico um pedaço de texto no HTML, você deve iniciar este pedaço com a tag <i> e terminá-lo com a tag </i>. Para texto em negrito, inicie com <b> e termine com </b>.
 
Exemplo de Entrada	
Você _deveria_ ver a foca no zoologico!
Marque a conta *a receber* para *paga*.

Exemplo de Saída
Você <i>deveria</i> ver a foca no zoologico!
Marque a conta <b>a receber</b> para <b>paga</b>. */

let text = gets();
const italics = /\_(.*?)\_/gim;
const bold = /\*(.*?)\*/gim;

function parseMarkdown(text) {
  const html = text.replace(italics, "<i>$1</i>").replace(bold, "<b>$1</b>");

  return html.trim();
}

let count = 0;

do {
  console.log(parseMarkdown(text));
  text = gets();
  count++;
} while (count < 60);