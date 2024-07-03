document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('formulario');
    const nomeInput = document.getElementById('nome');
    const emailInput = document.getElementById('email');
    const mensagemElement = document.getElementById('mensagem');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

       
        mensagemElement.innerText = '';

        
        const nomeValue = nomeInput.value.trim();
        if (nomeValue === '') {
            mensagemElement.innerText = 'Por favor, preencha o nome.';
            return; 
        }

        /
        const emailValue = emailInput.value.trim();
        if (emailValue === '') {
            mensagemElement.innerText = 'Por favor, preencha o email.';
            return; 
        }

        
        const formData = {
            nome: nomeValue,
            email: emailValue
        };

        console.log(JSON.stringify(formData));

        
        mensagemElement.innerText = 'Formulário enviado com sucesso!';
    });
});
