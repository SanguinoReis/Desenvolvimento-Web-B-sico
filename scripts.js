function atividade_01() {
    const numero = window.prompt("Informe um número inteiro: ");
    var paragrafo = document.getElementById("result").innerHTML;
    const isDivisivelPor2 = (numero % 2) === 0;
    const isDivisivelPor7 = (numero % 7) === 0;

    if (isDivisivelPor2 && isDivisivelPor7) {
        paragrafo = "<p>" + "O número é divisível por 2 e por 7." + "</p>";
    } else if (isDivisivelPor2) {
        paragrafo = "<p>" + "O número é divisível por 2." + "</p>";
    } else if (isDivisivelPor7) {
        paragrafo = "<p>" + "O número é divisível por 7." + "</p>";
    } else {
        paragrafo = "<p>" + "O número não é divisível por 2 e nem por 7." + "</p>";
    }

    document.getElementById("result").innerHTML = paragrafo;
}

function atividade_02() {
    const numero = window.prompt("Informe um número inteiro: ");
    var paragrafo = document.getElementById("result").innerHTML;

    switch (numero) {
        case '1':
            paragrafo = "<p>" + "O dia correspondente é domingo." + "</p>";
            break;
        case '2':
            paragrafo = "<p>" + "O dia correspondente é segunda-feira." + "</p>";
            break;
        case '3':
            paragrafo = "<p>" + "O dia correspondente é terça-feira." + "</p>";
            break;
        case '4':
            paragrafo = "<p>" + "O dia correspondente é quarta-feira." + "</p>";
            break;
        case '5':
            paragrafo = "<p>" + "O dia correspondente é quinta-feira." + "</p>";
            break;
        case '6':
            paragrafo = "<p>" + "O dia correspondente é sexta-feira." + "</p>";
            break;
        case '7':
            paragrafo = "<p>" + "O dia correspondente é sábado." + "</p>";
            break;
        default:
            paragrafo = "<p>" + "Não existe dia correspondente ao número informado." + "</p>";
            break;
    }

    document.getElementById("result").innerHTML = paragrafo;
}

function atividade_03() {
    const numero = window.prompt("Informe um número inteiro: ");

    var result = '';

    for (var count = 1; count <= 10; count++) {
        result += numero + " x " + count + " = " + numero * count + "<br />";
    }

    document.getElementById("result").innerHTML = result;
}

function atividade_04() {
    const numero = window.prompt("Informe o total de cópias: ");

    var paragrafo = document.getElementById("result").innerHTML;

    var valorPorCopia;

    if (numero <= 100) {
        valorPorCopia = 0.25;
    } else {
        valorPorCopia = 0.20;
    }

    const total = numero * valorPorCopia;

    const totalFormatado = total.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});

    paragrafo = "<p>" + "O valor total a ser pago é " + totalFormatado + "</p>";

    document.getElementById("result").innerHTML = paragrafo;
}

function atividade_05() {
    const salario = window.prompt("Informe o valor do seu salário: ");
    const financiamento = window.prompt("Informe o valor do financiamento pretendido: ");
    const salarioPorCinco = salario * 5;
    const isFinanciamentoConcedido = financiamento <= salarioPorCinco;
    var paragrafo = document.getElementById("result").innerHTML;

    if (isFinanciamentoConcedido) {
        paragrafo = "<p>" + "Financiamento Concedido" + "</p>";
    } else {
        paragrafo = "<p>" + "Financiamento Negado" + "</p>";
    }

    paragrafo += "Obrigado por nos consultar."

    document.getElementById("result").innerHTML = paragrafo;
}

function voltar() {
    window.location.href = "index.html";
}