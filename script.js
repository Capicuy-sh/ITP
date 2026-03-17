// Navegación fluida entre pestañas
function switchTab(id) {
    // Ocultar todas las páginas
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.classList.remove('active'));

    // Quitar estado activo de botones
    const btns = document.querySelectorAll('.nav-btn');
    btns.forEach(b => b.classList.remove('active'));

    // Mostrar la seleccionada
    document.getElementById(id).classList.add('active');
    
    // Buscar el botón que se presionó y activarlo
    const activeBtn = Array.from(btns).find(b => b.getAttribute('onclick').includes(id));
    if(activeBtn) activeBtn.classList.add('active');

    // Scroll suave hacia arriba
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Calculadora de la Segunda Ley
function solveF() {
    const m = parseFloat(document.getElementById('m').value) || 0;
    const a = parseFloat(document.getElementById('a').value) || 0;
    const res = (m * a).toFixed(2);
    document.getElementById('f-val').innerText = res;
}

// Sistema de Quizzes
function ans(btn, correct) {
    // Desactivar botones hermanos para que no sigan clickeando
    const container = btn.parentElement;
    const buttons = container.querySelectorAll('.option-btn');
    buttons.forEach(b => b.disabled = true);

    if(correct) {
        btn.style.backgroundColor = "var(--success)";
        btn.style.borderColor = "var(--success)";
        btn.innerText = "¡Correcto! 🏆";
    } else {
        btn.style.backgroundColor = "var(--error)";
        btn.style.borderColor = "var(--error)";
        btn.innerText = "Incorrecto ❌";
    }
}
