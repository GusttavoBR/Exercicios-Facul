function dobrar() {
    let valor = window.document.querySelector(`input#db`).value
    let valorDobrado = valor * 2

    res.innerHTML = ("O valor original é: " + valor)
    res.innerHTML = ("O valor dobrado é: " + valorDobrado)
}

function comissao() {
    let valor = window.document.querySelector(`input#venda`).value
    let valorComAcrescimo = valor * 1.1

    res2.innerHTML = ("O valor original é: " + valor);
    res3.innerHTML = ("O valor com acréscimo de 10% é: " + valorComAcrescimo)

}
function m2() {
const largura = window.document.querySelector(`input#l`).value
const comprimento = window.document.querySelector(`input#c`).value

const area = largura * comprimento;

res4.innerHTML = (`A área é de ${area} metros quadrados.`);
}

function desconto() {
    let compra = window.document.querySelector(`input#cp`).value
    let desconto1 = window.document.querySelector(`input#dc`).value
    //desconto1 = desconto1 / 100
    let desc = desconto1 * compra / 100
    let total = compra - desc

    res5.innerHTML = (`O valor incial foi de ${compra}, com o desconto de ${desconto1}%, o valor total com desconto é ${total}`)
}

function cvt() {
    let real = window.document.querySelector(`input#brl`).value
    let dolar = 5.22
    let convertido = real / dolar

    res6.innerHTML = (`R$${real} convertidos para Dólar é: $${convertido.toFixed(2)}`)
}
