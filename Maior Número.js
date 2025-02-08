var num1 = 10
var num2 = 10

function maiornumero (num1, num2)
{
    if(num1 > num2)
    {
        return `O número ${num1} é maior que o numero ${num2}`;
    }
    if(num1 < num2)
    {
        return `O número ${num1} é menor que o numero ${num2}` ;
    }
    if(num1 == num2)
    {
        return `Ambos são iguais a ${num1, num2}` ;
    }
}
document.write(maiornumero(num1, num2));