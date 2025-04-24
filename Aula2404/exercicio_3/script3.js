function mudatexto() {
    document.getElementById("texto").innerText = "Texto atualizado com JavaScript";
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("muda").addEventListener("click", mudatexto);

    
});