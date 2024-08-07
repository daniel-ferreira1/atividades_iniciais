<?php

class MinhaClasse {
    function areaQuadrado($a, $b) {
        return $a * $b;
    }
}

$minhaClasse = new MinhaClasse();
echo("A area do quadrado é {$minhaClasse->areaQuadrado($_GET['a'], $_GET['b'])}");
