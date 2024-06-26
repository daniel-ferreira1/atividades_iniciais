document.getElementById('count-button').addEventListener('click', function() {
    contarPalavras();
});

function contarPalavras() {
    const text = document.getElementById('text-input').value;
    const words = text.trim().split(/\s+/);
    const wordCount = words.filter(word => word.length > 0).length;
    document.getElementById('word-count').textContent = `Número de palavras: ${wordCount}`;
}
