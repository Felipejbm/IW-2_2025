function mudafundo() {
    document.getElementById('texto').style.color = "red";
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("muda").addEventListener("click", mudafundo);

    
});