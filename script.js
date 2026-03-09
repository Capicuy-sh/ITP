// LOS 20 PÁRRAFOS DE CONTENIDO (FÍSICA) CON IMÁGENES INTERCALADAS
const contenidoArticulo = `
    <h1>Las Leyes de Newton y el Movimiento</h1>
    <p>1. La física es la ciencia que estudia las propiedades de la materia, la energía, el espacio y el tiempo, así como las relaciones entre ellos.</p>
    <p>2. Dentro de la física, la rama que se encarga de estudiar el movimiento de los cuerpos y las fuerzas que lo producen se llama dinámica.</p>
    <p>3. El científico inglés Isaac Newton formuló en el siglo XVII tres leyes fundamentales que explican la mayoría de los problemas de la mecánica clásica.</p>
    <p>4. La <b>Primera Ley de Newton</b> es conocida como la "Ley de la Inercia".</p>
    <p>5. Esta primera ley establece que todo cuerpo permanecerá en reposo o en movimiento rectilíneo uniforme a menos que una fuerza externa actúe sobre él.</p>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Seat_belt_demonstration.jpg/400px-Seat_belt_demonstration.jpg" alt="Ejemplo de Inercia - Cinturón de seguridad">
    <p>6. La inercia es la resistencia que opone la materia a modificar su estado de movimiento. Por eso, cuando un coche frena de golpe, tu cuerpo se va hacia adelante.</p>
    <p>7. La masa de un objeto es la medida cuantitativa de su inercia; a mayor masa, más difícil es moverlo o detenerlo.</p>
    <p>8. La <b>Segunda Ley de Newton</b> se conoce como el "Principio Fundamental de la Dinámica".</p>
    <p>9. Esta ley nos da una fórmula matemática esencial: Fuerza es igual a masa por aceleración (F = m * a).</p>
    <p>10. Esto significa que la fuerza neta aplicada sobre un objeto es directamente proporcional a la aceleración que adquiere en su trayectoria.</p>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Friction_between_surfaces.jpg/400px-Friction_between_surfaces.jpg" alt="Fuerza y aceleración">
    <p>11. Por lo tanto, si empujas un camión (mucha masa) y una bicicleta (poca masa) con la misma fuerza, la bicicleta acelerará mucho más rápido.</p>
    <p>12. En el Sistema Internacional, la fuerza se mide en una unidad llamada "Newton" (N) en honor al científico.</p>
    <p>13. La <b>Tercera Ley de Newton</b> es famosa y se conoce como el principio de "Acción y Reacción".</p>
    <p>14. Establece que por cada fuerza de acción que actúa sobre un cuerpo, existe una fuerza de reacción igual en magnitud y opuesta en dirección.</p>
    <p>15. Las fuerzas siempre se presentan en pares. Nunca existe una fuerza aislada en el universo.</p>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Soyuz_TMA-9_launch.jpg/400px-Soyuz_TMA-9_launch.jpg" alt="Cohete despegando - Acción y reacción">
    <p>16. El mejor ejemplo de la tercera ley es el lanzamiento de un cohete: el motor expulsa gases hacia abajo (acción) y los gases empujan el cohete hacia arriba (reacción).</p>
    <p>17. Aparte de estas tres leyes, Newton formuló la Ley de Gravitación Universal, que explica por qué los objetos caen al suelo.</p>
    <p>18. La gravedad es una fuerza de atracción invisible que existe entre dos masas cualesquiera en el universo.</p>
    <p>19. Es importante distinguir entre masa (cantidad de materia, que no cambia) y peso (la fuerza con la que la gravedad atrae esa masa).</p>
    <p>20. Por eso, tu masa es la misma en la Tierra que en la Luna, pero tu peso en la Luna es mucho menor porque hay menos gravedad.</p>
`;

// LAS 20 PREGUNTAS (FÍSICA)
const preguntas = [
    { p: "1. ¿Qué estudia principalmente la física?", o: ["Seres vivos", "Materia, energía, espacio y tiempo", "Composición de los químicos"], c: 1 },
    { p: "2. ¿Cómo se llama la rama de la física que estudia el movimiento y las fuerzas?", o: ["Dinámica", "Termodinámica", "Óptica"], c: 0 },
    { p: "3. ¿Quién formuló las tres leyes fundamentales de la mecánica clásica?", o: ["Albert Einstein", "Galileo Galilei", "Isaac Newton"], c: 2 },
    { p: "4. ¿Cómo se conoce también a la Primera Ley de Newton?", o: ["Ley de la Inercia", "Ley de Acción", "Ley de Gravedad"], c: 0 },
    { p: "5. Según la Primera Ley, ¿qué necesita un objeto en reposo para moverse?", o: ["Calor", "Una fuerza externa", "Pérdida de masa"], c: 1 },
    { p: "6. ¿Por qué te vas hacia adelante cuando un coche frena bruscamente?", o: ["Por el viento", "Por la inercia", "Por la gravedad"], c: 1 },
    { p: "7. ¿Qué magnitud es la medida de la inercia de un objeto?", o: ["El volumen", "La temperatura", "La masa"], c: 2 },
    { p: "8. ¿Cómo se conoce a la Segunda Ley de Newton?", o: ["Principio de la Dinámica", "Ley de Reacción", "Ley Universal"], c: 0 },
    { p: "9. ¿Cuál es la fórmula de la Segunda Ley de Newton?", o: ["E = mc2", "F = m * a", "V = d / t"], c: 1 },
    { p: "10. Según la Segunda Ley, la fuerza es proporcional a...", o: ["La aceleración", "El rozamiento", "El tiempo"], c: 0 },
    { p: "11. Si empujas un camión y una bicicleta con la misma fuerza, ¿cuál acelera más?", o: ["El camión", "Aceleran igual", "La bicicleta"], c: 2 },
    { p: "12. ¿En qué unidad se mide la fuerza en el Sistema Internacional?", o: ["Julios", "Newtons", "Vatios"], c: 1 },
    { p: "13. ¿Cómo se llama la Tercera Ley de Newton?", o: ["Ley de Inercia", "Acción y Reacción", "Gravedad Absoluta"], c: 1 },
    { p: "14. Según la Tercera Ley, las fuerzas de reacción son...", o: ["Iguales y en dirección opuesta", "Más fuertes", "Más débiles"], c: 0 },
    { p: "15. ¿Pueden existir fuerzas aisladas (solas) en el universo?", o: ["Sí, siempre", "No, siempre vienen en pares", "Solo en el vacío"], c: 1 },
    { p: "16. ¿Qué empuja a un cohete hacia arriba al despegar?", o: ["El aire", "La reacción a los gases expulsados hacia abajo", "Las alas"], c: 1 },
    { p: "17. ¿Qué otra ley importante sobre las fuerzas formuló Newton?", o: ["Ley de Gravitación Universal", "Ley de la Termodinámica", "Ley de la Relatividad"], c: 0 },
    { p: "18. ¿Qué es la gravedad?", o: ["Un gas pesado", "Una fuerza magnética", "Una fuerza de atracción entre masas"], c: 2 },
    { p: "19. ¿Cuál es la diferencia entre masa y peso?", o: ["Son exactamente lo mismo", "La masa es materia, el peso depende de la gravedad", "El peso es constante, la masa cambia"], c: 1 },
    { p: "20. ¿Por qué pesarías menos en la Luna que en la Tierra?", o: ["Porque la Luna no tiene atmósfera", "Porque la Luna tiene menos gravedad", "Porque el traje espacial flota"], c: 1 }
];

let actual = 0;
let aciertos = 0;
let fallos = 0;

function abrirArticulo() {
    document.getElementById('inicio').classList.add('oculto');
    document.getElementById('articulo').classList.remove('oculto');
    document.getElementById('contenido-wiki').innerHTML = contenidoArticulo;
}

function volver() {
    document.getElementById('articulo').classList.add('oculto');
    document.getElementById('quiz').classList.add('oculto');
    document.getElementById('inicio').classList.remove('oculto');
    actual = 0; aciertos = 0; fallos = 0;
}

function abrirQuiz() {
    document.getElementById('inicio').classList.add('oculto');
    document.getElementById('quiz').classList.remove('oculto');
    actual = 0; aciertos = 0; fallos = 0;
    mostrarPregunta();
}

function mostrarPregunta() {
    if(actual >= preguntas.length) {
        document.getElementById('quiz').innerHTML = `
            <div class="quiz-box" style="text-align: center;">
                <h2>¡Laboratorio Terminado! 🚀</h2>
                <p style="font-size: 1.5rem; margin: 20px 0;">
                    Aciertos: <strong style="color: #10b981;">${aciertos}</strong><br>
                    Fallos: <strong style="color: #ef4444;">${fallos}</strong>
                </p>
                <button class="btn-quiz" onclick="location.reload()">Reiniciar Experimento</button>
            </div>
        `;
        return;
    }

    const q = preguntas[actual];
    document.getElementById('q-progreso').innerText = `Pregunta ${actual + 1} de 20`;
    document.getElementById('q-texto').innerText = q.p;
    
    let btnHtml = "";
    q.o.forEach((opt, i) => {
        btnHtml += `<button class="opcion-btn" id="opc-${i}" onclick="verificar(${i})">${opt}</button>`;
    });
    
    document.getElementById('q-opciones').innerHTML = btnHtml;
    document.getElementById('q-feedback').classList.add('oculto');
    document.getElementById('btn-siguiente').classList.add('oculto');
}

function verificar(indiceElegido) {
    const q = preguntas[actual];
    const feedback = document.getElementById('q-feedback');
    const botones = document.querySelectorAll('.opcion-btn');
    
    botones.forEach(btn => btn.disabled = true);

    if(indiceElegido === q.c) {
        aciertos++;
        feedback.innerText = "¡Correcto! 🌌";
        feedback.className = "feedback-correcto";
        document.getElementById(`opc-${indiceElegido}`).style.borderColor = "#10b981";
        document.getElementById(`opc-${indiceElegido}`).style.backgroundColor = "#d1fae5";
    } else {
        fallos++;
        feedback.innerText = `¡Incorrecto! ☄️ La respuesta era: "${q.o[q.c]}"`;
        feedback.className = "feedback-incorrecto";
        document.getElementById(`opc-${indiceElegido}`).style.borderColor = "#ef4444";
        document.getElementById(`opc-${indiceElegido}`).style.backgroundColor = "#fee2e2";
    }

    feedback.classList.remove('oculto');
    document.getElementById('btn-siguiente').classList.remove('oculto');
}

function siguientePregunta() {
    actual++;
    mostrarPregunta();
}
