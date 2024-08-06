<?php
if (isset($_GET['a']) && isset($_GET['b'])) {
    $a = intval($_GET['a']);
    $b = intval($_GET['b']);

    $antes = "Valores antes da troca: A = $a, B = $b";

   
    $temp = $a;
    $a = $b;
    $b = $temp;

    $apos = "Valores apos a troca: A = $a, B = $b";

    $resultado = array(
        'antes' => $antes,
        'apos' => $apos
    );

    echo json_encode($resultado);
}
?>
