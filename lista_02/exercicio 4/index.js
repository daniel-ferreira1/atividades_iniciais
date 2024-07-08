document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    var table = document.getElementById('userTable').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow();

   
    var nameCell = newRow.insertCell(0);
    var emailCell = newRow.insertCell(1);

    
    nameCell.textContent = name;
    emailCell.textContent = email;


    document.getElementById('userForm').reset();
});
