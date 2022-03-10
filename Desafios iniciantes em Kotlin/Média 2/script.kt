/*Leia 3 valores, no caso, variáveis A, B e C, que são as três notas de um aluno. A seguir, calcule a média do aluno, sabendo que a nota A tem peso 2, a nota B tem peso 3 e a nota C tem peso 5. Considere que cada nota pode ir de 0 até 10.0, sempre com uma casa decimal.*/

import java.util.Scanner

fun main(args: Array<String>) {
    val input = Scanner(System.`in`)
    val nota1 = input.nextDouble()
    val nota2 = input.nextDouble()
    val nota3 = input.nextDouble()
    val media = ((nota1) * 0.2 + (nota2) * 0.3 + (nota3) * 0.5) //complete os espaços em branco
    System.out.printf("MEDIA = %.1f\n", media)
}