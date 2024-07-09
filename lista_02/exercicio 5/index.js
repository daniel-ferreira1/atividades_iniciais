function editRow(button) {
    // Obtém a linha que contém o botão clicado
    var row = button.parentNode.parentNode;
    
    // Obtém os dados da linha
    var userId = row.cells[0].innerHTML;
    var userName = row.cells[1].innerHTML;
    var userEmail = row.cells[2].innerHTML;

    // Preenche o formulário com os dados da linha
    document.getElementById('userId').value = userId;
    document.getElementById('userName').value = userName;
    document.getElementById('userEmail').value = userEmail;
}

function saveEdit() {
    // Obtém os dados do formulário
    var userId = document.getElementById('userId').value;
    var userName = document.getElementById('userName').value;
    var userEmail = document.getElementById('userEmail').value;

    // Encontra a linha correspondente na tabela
    var table = document.getElementById('userTable');
    for (var i = 1, row; row = table.rows[i]; i++) {
        if (row.cells[0].innerHTML == userId) {
            // Atualiza os dados da linha
            row.cells[1].innerHTML = userName;
            row.cells[2].innerHTML = userEmail;
            break;
        }
    }

    // Limpa o formulário após a edição
    document.getElementById('editForm').reset();
}
