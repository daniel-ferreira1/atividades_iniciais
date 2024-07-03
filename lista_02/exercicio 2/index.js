function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var errorMessages = [];

    if (name.trim() === '') {
        errorMessages.push('O campo Nome não pode estar vazio.');
    }

    if (email.trim() === '') {
        errorMessages.push('O campo Email não pode estar vazio.');
    }

    if (errorMessages.length > 0) {
        
        alert(errorMessages.join('\n'));
    } else {
        
        var formData = {
            nome: name,
            email: email
        };
        console.log(JSON.stringify(formData));
        
    }
}
