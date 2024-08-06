<?php

class MinhaClasse {
    function ehPar($a) {
        return $a % 2 == 0;
    }
}

$minhaClasse = new MinhaClasse();
$resultado = 'o numero é impar';
if ($minhaClasse->ehPar($_GET['a'])){
    $resultado = 'o numero é par';
}
echo($resultado);