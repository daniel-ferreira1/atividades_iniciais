document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var nome = document.getElementById('nome').value.trim();
    var email = document.getElementById('email').value.trim();
    var mensagemElement = document.getElementById('mensagem');

    
    mensagemElement.textContent = '';

    
    if (nome === '') {
        mensagemElement.textContent = 'Por favor, preencha o nome.';
        return; 
    }

    
    if (email === '') {
        mensagemElement.textContent = 'Por favor, preencha o email.';
        return; 
    }

   
    var dados = {
        nome: nome,
        email: email
    };
    console.log('Dados do formulário:', JSON.stringify(dados));

   
});
