/*Kogu está buscando as esferas do dragão para invocar Xenlonguinho e pedir para ele reviver seu amigo Kuriri, que infelizmente morreu na última batalha dos guerreiros Zê.

Porém Kogu está tendo muita dificuldade para encontrar as esferas, por isso Xenlonguinho que é seu conhecido há muito tempo, decidiu abrir uma exceção e aceitou ser invocado caso Kogu encontre todas as esferas cujo o número de divisores da quantidade de estrelas da esfera sejam par.

Por exemplo se existem sete esferas, Kogu não precisaria encontrar as esferas de uma e quatro estrelas, pois elas tem uma quantidade ímpar de divisores, então ele só precisa pegar 5 esferas para invocar Xenlonguinho*/

using System;

namespace Xenlonguinho
{
    class Program
    {
        static void Main(string[] args)
        {
            var testes = int.Parse(Console.ReadLine());
                
            for (int i = 0; i < testes; i++)
            {
    
                var esferas = int.Parse(Console.ReadLine());
                Console.WriteLine(esferas - Math.Floor(Math.Sqrt(esferas)));
            }
            
        }
    }
}