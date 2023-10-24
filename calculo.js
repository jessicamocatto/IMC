function calcula(){
    nome = document.getElementById('nome').value
    peso = parseFloat(document.getElementById('peso').value)
    altura = parseFloat(document.getElementById('altura').value)
    categoria = ''
    //peso / (altura * altura)

    const imc = peso / (altura * altura)

    if (imc < 16) {
        categoria = nome + ', seu IMC é ' + imc.toFixed(2) + ' e sua classificação é magreza grave';
    } else if (imc >= 16 && imc < 17) {
        categoria = nome + ', seu IMC é ' + imc.toFixed(2) + ' e sua classificação é magreza moderada';
    } else if (imc >= 17 && imc < 18.5) {
        categoria = nome + ', seu IMC é ' + imc.toFixed(2) + ' e sua classificação é magreza leve';
    } else if (imc >= 18.5 && imc < 24.9) {
        categoria = nome + ', seu IMC é ' + imc.toFixed(2) + ' e sua classificação é peso saudável';
    } else if (imc >= 25 && imc < 29.9) {
        categoria = nome + ', seu IMC é ' + imc.toFixed(2) + ' e sua classificação é sobrepeso';
    } else if (imc >= 30 && imc < 34.9) {
        categoria = nome + ', seu IMC é ' + imc.toFixed(2) + ' e sua classificação é obesidade grau I';
    } else if (imc >= 35 && imc < 39.9) {
        categoria = nome + ', seu IMC é ' + imc.toFixed(2) + ' e sua classificação é obesidade grau II (severa)';
    } else if (imc >= 40) {
        categoria = nome + ', seu IMC é ' + imc.toFixed(2) + ' e sua classificação é obesidade grau III (mórbida)';
    } else {
        categoria = 'Valor de IMC inválido';
    }

    document.getElementById('resultado').textContent = categoria;
}