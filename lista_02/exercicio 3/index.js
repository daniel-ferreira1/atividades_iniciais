document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;


    if (nome && email) {
      
        document.getElementById('nometabela').innerText =   nome 
        document.getElementById('emailtabela').innerText = email

      
        document.getElementById('formulario').reset();
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});
