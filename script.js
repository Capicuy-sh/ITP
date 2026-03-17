// SISTEMA DE NAVEGACIÓN POR PESTAÑAS (SPA)
function cambiarTab(targetId) {
    // 1. Ocultar todos los paneles
    const paneles = document.querySelectorAll('.tab-panel');
    paneles.forEach(p => p.classList.remove('active'));

    // 2. Desactivar todos los botones de navegación
    const botones = document.querySelectorAll('.tab-btn');
    botones.forEach(b => b.classList.remove('active'));

    // 3. Mostrar el panel seleccionado
    const elTarget = document.getElementById(targetId);
    if (elTarget) {
        elTarget.classList.add('active');
    }

    // 4. Marcar botón como activo (si existe en el menú)
    const btnActivo = Array.from(botones).find(b => b.getAttribute('onclick').includes(targetId));
    if (btnActivo) {
        btnActivo.classList.add('active');
    }
}

// SIMULADOR MATEMÁTICO (2da Ley)
function calcular() {
    const masa = document.getElementById('m').value || 0;
    const acel = document.getElementById('a').value || 0;
    const fuerza = (parseFloat(masa) * parseFloat(acel)).toFixed(2);
    document.getElementById('f-val').innerText = fuerza;
}

// LÓGICA DE QUIZZES INTERACTIVOS
function quiz(btn, esCorrecto) {
    // Resetear colores de botones hermanos
    const padre = btn.parentElement;
    const hermanos = padre.querySelectorAll('button');
    hermanos.forEach(b => {
        b.style.backgroundColor = "white";
        b.style.color = "#0f172a";
    });

    if (esCorrecto) {
        btn.style.backgroundColor = "#22c55e";
        btn.style.color = "white";
        btn.style.borderColor = "#22c55e";
        btn.innerText = "¡Correcto! ✅";
    } else {
        btn.style.backgroundColor = "#ef4444";
        btn.style.color = "white";
        btn.style.borderColor = "#ef4444";
        btn.innerText = "Error ❌";
    }
}
