function criar() {
    const titulo = document.createElement("h1")
    titulo.textContent = "H1 criado com JS"
    const paragrafo = document.createElement("p")
    paragrafo.textContent = "paragarfo criado com  JS"
    
    const div = document.getElementById("div");

      div.appendChild(titulo);
      div.appendChild(paragrafo);
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("muda").addEventListener("click", criar);

    
});