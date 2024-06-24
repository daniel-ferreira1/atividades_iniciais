<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora de Idade</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        input, button {
            margin: 10px 0;
            padding: 10px;
        }
    </style>
    <script>
        function calcularIdade() {
            const anoNascimento = document.getElementById('anoNascimento').value;
            if (anoNascimento) {
                const anoAtual = new Date().getFullYear();
                const idade = anoAtual - anoNascimento;
                document.getElementById('idade').textContent = `Sua idade é: ${idade} anos`;
            } else {
                document.getElementById('idade').textContent = 'Por favor, insira um ano válido.';
            }
        }
    </script>
</head>
<body>
    <h1>Calculadora de Idade</h1>
    <label for="anoNascimento">Insira seu ano de nascimento:</label>
    <input type="number" id="anoNascimento" name="anoNascimento">
    <button onclick="calcularIdade()">Calcular Idade</button>
    <p id="idade"></p>
</body>
</html>
