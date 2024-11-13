div = document.getElementById('cadastra');

div.addEventListener('mouseover', function() {
    div.style.backgroundColor = 'black';
    div.style.color = 'white';
    div.style.border = '3px solid #0d93a5'
})

div.addEventListener('mouseout', function() {
    div.style.backgroundColor = 'white';
    div.style.color = 'black';
    div.style.border = '3px solid white'
})

function redirecionar() {

    window.location.href = "index.html";
    return false
}