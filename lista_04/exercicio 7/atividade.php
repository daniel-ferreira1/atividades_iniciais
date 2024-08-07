<?php

class MinhaClasse {
    function areaCirculo($a) {
        return $a * $a * pi() ;
    }
}

$minhaClasse = new MinhaClasse();
echo("A area do circulo é {$minhaClasse->areaCirculo($_GET['a'])}");