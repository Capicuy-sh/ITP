// NAVEGACIÓN DE PESTAÑAS
function verTab(evt, tabId) {
    // 1. Ocultar todos los contenidos
    let contents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < contents.length; i++) {
        contents[i].classList.remove("active");
    }

    // 2. Desactivar todos los botones
    let links = document.getElementsByClassName("tab-link");
    for (let i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
    }

    // 3. Mostrar la pestaña actual y marcar el botón como activo
    document.getElementById(tabId).classList.add("active");
    evt.currentTarget.classList.add("active");
}

// SIMULADOR DE FUERZA (2da Ley)
function calc() {
    const m = document.getElementById('m').value || 0;
    const a = document.getElementById('a').value || 0;
    const result = (parseFloat(m) * parseFloat(a)).toFixed(2);
    document.getElementById('f-res').innerText = result;
}

// RESPUESTAS DE LOS QUIZZES
function responder(btn, esCorrecto) {
    if (esCorrecto) {
        btn.style.backgroundColor = "#22c55e";
        btn.style.color = "white";
        btn.innerText = "¡Correcto! 🎯";
    } else {
        btn.style.backgroundColor = "#ef4444";
        btn.style.color = "white";
        btn.innerText = "Incorrecto ❌";
    }
}
