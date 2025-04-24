function saudacao() {
     alert("ola bem vindo á aula");
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("botaosaudacao").addEventListener("click", saudacao);
});