<?php
// Função para converter Fahrenheit para Celsius
function converteFahrenheitParaCelsius($fahrenheit) {
    $celsius = ($fahrenheit - 32) * 5 / 9;
    return $celsius;
}

// Verifica se o valor foi enviado pelo formulário
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["fahrenheit"])) {
    // Obtém o valor enviado pelo formulário
    $temperaturaFahrenheit = floatval($_POST["fahrenheit"]);
    
    // Chama a função de conversão
    $temperaturaCelsius = converteFahrenheitParaCelsius($temperaturaFahrenheit);
    
    // Exibe o resultado
    echo "<p>{$temperaturaFahrenheit}F eh equivalente a " . number_format($temperaturaCelsius, 2) . "C</p>";
} else {
    echo "<p>Por favor, insira um valor de temperatura no formulário.</p>";
}
?>
