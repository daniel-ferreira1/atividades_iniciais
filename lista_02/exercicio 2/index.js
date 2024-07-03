document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var nome = document.getElementById('nome').value.trim();
    var email = document.getElementById('email').value.trim();

    
    if (nome === '') {
        exibirMensagemErro('Por favor, informe seu nome.');
        return;
    }
    if (email === '') {
        exibirMensagemErro('Por favor, informe seu email.');
        return;
    }

    
    var formData = {
        nome: nome,
        email: email
    };

    
    console.log(JSON.stringify(formData));

    
    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';

    
    exibirMensagemSucesso('Dados enviados com sucesso!');
});

function exibirMensagemErro(mensagem) {
    var mensagemElemento = document.getElementBy


