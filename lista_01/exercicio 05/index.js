<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mostrar/Esconder Elemento</title>
    <style>
        #elemento {
            display: block;
            width: 200px;
            height: 200px;
            background-color: lightblue;
            margin: 20px 0;
            text-align: center;
            line-height: 200px;
        }
    </style>
</head>
<body>
    <h1>Exemplo de Mostrar/Esconder Elemento</h1>
    
    <div id="elemento">Elemento a ser mostrado/ocultado</div>
    
    <button id="btnEsconder">Esconder</button>
    <button id="btnMostrar">Mostrar</button>
    
    <script>
        document.getElementById('btnEsconder').addEventListener('click', function() {
            document.getElementById('elemento').style.display = 'none';
        });

        document.getElementById('btnMostrar').addEventListener('click', function() {
            document.getElementById('elemento').style.display = 'block';
        });
    </script>
</body>
</html>
