const holamundo = () => {
    document.getElementById('holamundo').textContent = "Hola mundo!"
}
const color = () => {
    const div = document.getElementById('color')
    div.style.backgroundColor = "gray"
}
const mostrarAlert = () => {
    alert("Haz hecho click!")
}
const toggleonoff = () => {
    var texto = document.getElementById("toggle");
    if (texto.style.display === "none") {
        texto.style.display = "block";
        document.getElementById("togg").textContent = "Ocultar"
    } else {
        texto.style.display = "none";
        document.getElementById("togg").textContent = "Mostrar"
    }
}