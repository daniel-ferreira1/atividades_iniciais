function calcular() {
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
    const operacao = document.getElementById('operacao').value;
    let resultado;

    switch (operacao) {
        case 'adicao':
            resultado = numero1 + numero2;
            break;
        case 'subtracao':
            resultado = numero1 - numero2;
            break;
        case 'multiplicacao':
            resultado = numero1 * numero2;
            break;
        case 'divisao':
            if (numero2 === 0) {
                alert("Divisão por zero não é permitida!");
                return;
            }
            resultado = numero1 / numero2;
            break;
        default:
            alert("Operação inválida!");
            return;
    }

    document.getElementById('resultado').innerText = resultado;
}
