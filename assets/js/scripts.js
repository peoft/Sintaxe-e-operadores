var result = "";

function validateNumbers(number1, number2) {
    var result = "Os numeros " + String(number1) + " e " + String(number2);
    var soma = number1 + number2;
    if (number1 === number2) {
        result += " sao iguais.";
    } else {
        result += " nao sao iguais.";
    }
    result += " Sua soma e " + String(soma) + ", ";
    if (soma > 10) {
        result += "que e maior que 10 e ";
    } else {
        result += "que e menor que 10 e ";
    }
    if (soma > 20) {
        result += "maior que 20.";
    } else {
        result += "menor que 20.";
    }
    return result;
}


result  = validateNumbers(5, 3);
console.log("resultado = ", result);