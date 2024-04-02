function calcular() {
    var valor_mensal = parseFloat(document.getElementById("valor_mensal").value);
    var base_calculo = parseFloat(document.getElementById("base_calculo").value);
    var meses = parseInt(document.getElementById("meses").value);
    
    var saldo_total = valor_mensal * meses * base_calculo;
    var media_saldo = saldo_total / meses;
    
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `
        <p>Saldo total ao final de ${meses} meses: R$${saldo_total.toFixed(2)}</p>
        <p>Média do saldo mensal: R$${media_saldo.toFixed(2)}</p>
    `;
}
