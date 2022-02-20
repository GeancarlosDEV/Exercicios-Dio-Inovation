//Papai Noel está brincando com seus duendes para entretê-los durante a véspera do Natal. A brincadeira consiste nos elfos escreverem números em pedaços de papel e colocarem no gorro do Papai Noel. Após todos terminarem de colocar os números Noel sorteia um papel e aquele número representa quantos "Ho" o Noel deve falar.

//Seu trabalho é ajudar o Papai Noel montando um problema que mostre todos os "Ho" que ele deve falar dado o número sorteado.

using System;

namespace quest7_csharp
{
    class Program
    {
        static void Main(string[] args)
        {

            int N = int.Parse(Console.ReadLine());

            //Exibir "Ho" do papai noel
            for (int i = 0; i < N; i++)
            {
                if (i < N - 1)
                {
                    Console.Write("Ho ");                  //Complete o código no espaço em branco
                }
                else
                {
                    Console.WriteLine("Ho!");
                }

            }
        }
    }
}