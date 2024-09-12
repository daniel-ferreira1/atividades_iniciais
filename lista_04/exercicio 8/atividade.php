<?php

function converteFahrenheitParaCelsius($fahrenheit) {
    $celsius = ($fahrenheit - 32) * 5 / 9;
    return $celsius;
}


if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["fahrenheit"])) {
    
    $temperaturaFahrenheit = floatval($_POST["fahrenheit"]);
    
  
    $temperaturaCelsius = converteFahrenheitParaCelsius($temperaturaFahrenheit);
    
    
    echo "<p>{$temperaturaFahrenheit}F eh equivalente a " . number_format($temperaturaCelsius, 2) . "C</p>";
} else {
    echo "<p>Por favor, insira um valor de temperatura no formulário.</p>";
}
?>
