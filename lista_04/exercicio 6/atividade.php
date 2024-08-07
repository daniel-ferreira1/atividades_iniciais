<?php

class MinhaClasse {
    function areaRetangulo($a, $b) {
        return ($a * $b)/2;
    }
}

$minhaClasse = new MinhaClasse();
echo("A area do retangulo é {$minhaClasse->areaRetangulo($_GET['a'], $_GET['b'])}");