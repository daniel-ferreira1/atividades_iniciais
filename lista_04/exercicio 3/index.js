document.getElementById('botao').addEventListener('click', function() {
    
    const numero = document.getElementById('numero').value;

  
    if (numero === '' || isNaN(numero)) {
        document.getElementById('mensagem').innerText = 'Por favor, insira um número válido.';
        return;
    }

    
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'verificar_paridade.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            
            document.getElementById('mensagem').innerText = xhr.responseText;
        }
    };

    
    xhr.send('numero=' + encodeURIComponent(numero));
});
