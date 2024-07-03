document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que o formulário seja enviado automaticamente

    var nome = document.getElementById('nome').value.trim();
    var email = document.getElementById('email').value.trim();
    var mensagemElement = document.getElementById('mensagem');

    // Resetar mensagem de erro
    mensagemElement.textContent = '';

    // Validar campo Nome
    if (nome === '') {
        mensagemElement.textContent = 'Por favor, preencha o nome.';
        return; // Impede o envio do formulário se o nome estiver vazio
    }

    // Validar campo Email
    if (email === '') {
        mensagemElement.textContent = 'Por favor, preencha o email.';
        return; // Impede o envio do formulário se o email estiver vazio
    }

    // Se os campos estiverem preenchidos corretamente, exibir os dados no console em formato JSON
    var dados = {
        nome: nome,
        email: email
    };
    console.log('Dados do formulário:', JSON.stringify(dados));

    // Aqui você pode enviar os dados para o servidor ou realizar outra ação desejada após a validação
});
