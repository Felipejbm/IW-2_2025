function mostramensagem() {
     alert("javascript é divertido");
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("Javascript").addEventListener("click", mostramensagem);
});