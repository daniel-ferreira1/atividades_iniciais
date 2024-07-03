function submitForm() {
   
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();

   
    if (name === '' || email === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

  
    var formData = {
        name: name,
        email: email
    };


    var table = document.getElementById('userData');
    table.innerHTML = ''; 

   
    var row1 = table.insertRow();
    var cell1 = row1.insertCell(0);
    var cell2 = row1.insertCell(1);
    cell1.innerHTML = '<strong>Nome:</strong>';
    cell2.innerHTML = formData.name;

    var row2 = table.insertRow();
    var cell3 = row2.insertCell(0);
    var cell4 = row2.insertCell(1);
    cell3.innerHTML = '<strong>Email:</strong>';
    cell4.innerHTML = formData.email;
}
