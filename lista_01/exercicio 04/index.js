<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verificação de Idade</title>
</head>
<body>
    <h1>Verificação de Idade</h1>
    <form id="ageForm">
        <label for="age">Insira a sua idade:</label>
        <input type="text" id="age" name="age">
        <button type="button" onclick="checkAge()">Verificar</button>
    </form>
    <p id="message"></p>

    <script>
        function checkAge() {
            const age = document.getElementById('age').value;
            const messageElement = document.getElementById('message');
            if (age >= 18) {
                messageElement.textContent = "Você é maior de idade.";
            } else {
                messageElement.textContent = "Você é menor de idade.";
            }
        }
    </script>
</body>
</html>
