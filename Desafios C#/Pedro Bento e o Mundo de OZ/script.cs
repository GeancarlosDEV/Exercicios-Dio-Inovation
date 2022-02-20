/*No jogo, O Mundo de Oz, Pedro Bento é o líder do Tribunal, por causa disso ele é uma das pessoas mais importantes do mundo, no jogo. Além disso, Pedro Bento possui um grande tesouro, o qual possui diversos tipos de jóias.

Pedro Bento está muito curioso para saber quantos tipos de jóias diferentes seu tesouro possui.

Sabendo que você é o melhor programador do mundo, Pedro Bento te contratou para verificar quantos tipos de jóias distintas ele tem em seu tesouro.*/

using System;
using System.Collections.Generic;
using System.Linq;

class PedroBentoEOMundoDeOZ 
{
  static void Main(string[] args) 
  {  
    string joia = "";
    
    List<string> joias = new List<string>();
    
    do
    {
      joia = Console.ReadLine();
      
      if (!string.IsNullOrWhiteSpace(joia))
      {
        joias.Add(joia);
      } 
      else 
      {
        break;
      }
    } 
    while (true);
    
    IEnumerable<string> distinctJoias = joias.Distinct();
    
    Console.WriteLine(distinctJoias.Count());
  }
}using System;
using System.Collections.Generic;
using System.Linq;

class PedroBentoEOMundoDeOZ 
{
  static void Main(string[] args) 
  {  
    string joia = "";
    
    List<string> joias = new List<string>();
    
    do
    {
      joia = Console.ReadLine();
      
      if (!string.IsNullOrWhiteSpace(joia))
      {
        joias.Add(joia);
      } 
      else 
      {
        break;
      }
    } 
    while (true);
    
    IEnumerable<string> distinctJoias = joias.Distinct();
    
    Console.WriteLine(distinctJoias.Count());
  }
}using System;
using System.Collections.Generic;
using System.Linq;

class PedroBentoEOMundoDeOZ 
{
  static void Main(string[] args) 
  {  
    string joia = "";
    
    List<string> joias = new List<string>();
    
    do
    {
      joia = Console.ReadLine();
      
      if (!string.IsNullOrWhiteSpace(joia))
      {
        joias.Add(joia);
      } 
      else 
      {
        break;
      }
    } 
    while (true);
    
    IEnumerable<string> distinctJoias = joias.Distinct();
    
    Console.WriteLine(distinctJoias.Count());
  }
}