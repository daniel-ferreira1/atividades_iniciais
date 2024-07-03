document.getElementById('myForm').addEventListener('submit', function(event) {
    
    event.preventDefault();

   
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();

    
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';

    
    if (name === '') {
        document.getElementById('nameError').textContent = 'Nome não pode estar vazio';
        return; 
    }

    
    if (email === '') {
        document.getElementById('emailError').textContent = 'Email não pode estar vazio';
        return; 
    }

    t
    var formData = {
        name: name,
        email: email
    };
    console.log(JSON.stringify(formData));

    

});

