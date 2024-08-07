<<?php

function encontrarMaior($a, $b, $c) {
    if ($a > $b && $a > $c) {
        return $a;
    } elseif ($b > $a && $b > $c) {
        return $b;
    } else {
        return $c;
    }
}
echo "Digite o primeiro valor: ";
$valor1 = (int)trim(fgets(STDIN));
echo "Digite o segundo valor: ";
$valor2 = (int)trim(fgets(STDIN));
echo "Digite o terceiro valor: ";
$valor3 = (int)trim(fgets(STDIN));

$maiorValor = encontrarMaior($valor1, $valor2, $valor3);
echo "O maior valor é: $maiorValor\n";
?>
