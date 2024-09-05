const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
let intentosRestantes = 5;

function adivinarNumero() {
    while (intentosRestantes > 0) {
        const respuesta = parseInt(prompt(`Adivina el número (tienes ${intentosRestantes} intentos ):`), 10);

        if (isNaN(respuesta) || respuesta < 1 || respuesta > 10) {
            alert("Por favor, ingresa un número entre 1 y 10.");
            continue;
        }

        if (respuesta === numeroAleatorio) {
            alert("¡Felicidades! Ganaste.");
            return;
        } else {
            intentosRestantes--;
            alert("Incorrecto.");
        }
    }

    alert(`Se acabaron los intentos. El número era ${numeroAleatorio}.`);
}

adivinarNumero();