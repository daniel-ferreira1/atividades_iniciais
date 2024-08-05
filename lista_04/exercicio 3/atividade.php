<?php

function ehPar($numero) {

    return ($numero % 2 == 0) ? 1 : 0;
}


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $numero = isset($_POST['numero']) ? (int)$_POST['numero'] : 0;

    
    $resultado = ehPar($numero);

   
    if ($resultado == 1) {
        echo "O número $numero é par.";
    } else {
        echo "O número $numero é ímpar.";
    }
}
?>
