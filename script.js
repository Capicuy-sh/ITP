// Manejo de Pestañas
function verTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    document.querySelectorAll('.tab-link').forEach(l => l.classList.remove('active'));
    
    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
}

// Calculadora Interactiva
function calc() {
    const m = document.getElementById('m').value || 0;
    const a = document.getElementById('a').value || 0;
    document.getElementById('f').innerText = (m * a).toFixed(2);
}

// Mini Quiz Instantáneo
function checkMini(btn, esCorrecto) {
    if(esCorrecto) {
        btn.style.background = "#22c55e";
        btn.innerText = "¡Correcto! ✅";
    } else {
        btn.style.background = "#ef4444";
        btn.innerText = "Intenta de nuevo ❌";
    }
    btn.style.color = "white";
}
