let valorTotal = parseInt(prompt("Insira o valor total."))
let qtdParcelas = parseInt(prompt("Insira a quantidade de parcelas."))

for (let i = 1; i <= qtdParcelas; i++ ) {
    console.log (`Parcela ${i}: R$ ${(valorTotal/qtdParcelas).toFixed(2)}`)
}