/* A empresa ABC resolveu conceder um aumento de salários a seus funcionários de acordo com a tabela abaixo:*/

import java.util.*

fun main(args: Array<String>) {
    val input = Scanner(System.`in`)

    val salario = input.nextDouble()

    val reajuste = when {
        salario > 2000 -> 4
        salario > 1200 && salario <= 2000 -> 7
        salario > 800 && salario <= 1200 -> 10
        salario > 400 && salario <= 800 -> 12
        else -> 15
    }

    val novoSalario = salario + (salario * reajuste/100)
    val reajusteGanho = novoSalario - salario

    System.out.printf("Novo salario: %.2f\n", novoSalario)
    System.out.printf("Reajuste ganho: %.2f\n", reajusteGanho)
    println("Em percentual: ${reajuste} %")
}
