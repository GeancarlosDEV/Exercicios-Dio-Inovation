/*Faça um programa que calcule e mostre o volume de uma esfera sendo fornecido o valor de seu raio (R). A fórmula para calcular o volume é: (4/3) * pi * R3. Considere (atribua) para pi o valor 3.14159.

Dica: Ao utilizar a fórmula, procure usar (4/3.0) ou (4.0/3), pois algumas linguagens (dentre elas o C++), assumem que o resultado da divisão entre dois inteiros é outro inteiro*/

using System;

namespace Esfera
{
    class Program
    {
        static void Main(string[] args)
        {
            //area = π . raio2
            //(4 / 3.0) * pi * R3.
            double area, raio1,volume;
            double P = 3.14159;
            float raio = float.Parse(Console.ReadLine());

            raio1 = double.Parse(raio.ToString("#0.00"));

            volume = (4 / 3.0) * P * (raio * raio * raio);

            //area = P * (raio1 * raio1);

            Console.WriteLine("VOLUME = " + volume.ToString("#0.000"));

        }
    }
}