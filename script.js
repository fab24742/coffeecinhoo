function obtenerMolienda(metodo, intensidad) {
    const moliendaBase = {
        "Espresso": 10,
        "Aeropress": 600,
        "French Press": 1000
    };
    const ajusteIntensidad = [0.8, 0.9, 1.0, 1.1, 1.2];
    return (moliendaBase[metodo] * ajusteIntensidad[intensidad - 1]).toFixed(1) + ' micrones';
}

function obtenerTemperatura(metodo, acidez) {
    const temperaturaBase = {
        "Espresso": [92, 96],
        "Aeropress": [85, 90],
        "French Press": [90, 94]
    };
    const ajusteAcidez = [0.95, 1.0, 1.05, 1.1, 1.15];
    const baseTemp = temperaturaBase[metodo];
    return `${Math.round(baseTemp[0] * ajusteAcidez[acidez - 1])}-${Math.round(baseTemp[1] * ajusteAcidez[acidez - 1])}°C`;
}

function obtenerRelacion(metodo, cuerpo) {
    const relacionBase = {
        "Espresso": [1, 2],
        "Aeropress": [1, 15],
        "French Press": [1, 12]
    };
    const ajusteCuerpo = [1.1, 1.0, 0.9, 0.8, 0.7];
    const baseRatio = relacionBase[metodo];
    return `${baseRatio[0]}:${Math.round(baseRatio[1] * ajusteCuerpo[cuerpo - 1])}`;
}

function obtenerTiempoExtraccion(metodo, dulzura) {
    const tiempoBase = {
        "Espresso": 30,
        "Aeropress": 90,
        "French Press": 240
    };
    const ajusteDulzura = [0.9, 0.95, 1.0, 1.05, 1.1];
    return Math.round(tiempoBase[metodo] * ajusteDulzura[dulzura - 1]) + ' segundos';
}

function obtenerAgitacion(metodo, intensidad) {
    const agitacionBase = {
        "Espresso": "Ninguna",
        "Aeropress": "Breve",
        "French Press": "Suave al inicio"
    };
    const ajusteIntensidad = ["Muy suave", "Suave", "Moderada", "Intensa", "Muy intensa"];
    return `${agitacionBase[metodo]}, ${ajusteIntensidad[intensidad - 1]}`;
}

function generarReceta() {
    const metodo = document.getElementById("metodo").value;
    const acidez = parseInt(document.getElementById("acidez").value);
    const cuerpo = parseInt(document.getElementById("cuerpo").value);
    const dulzura = parseInt(document.getElementById("dulzura").value);
    const intensidad = parseInt(document.getElementById("intensidad").value);

    const molienda = obtenerMolienda(metodo, intensidad);
    const temperatura = obtenerTemperatura(metodo, acidez);
    const relacion = obtenerRelacion(metodo, cuerpo);
    const tiempo = obtenerTiempoExtraccion(metodo, dulzura);
    const agitacion = obtenerAgitacion(metodo, intensidad);

    const receta = `
        <h2>Receta de Café Personalizada</h2>
        <p><strong>Método de Preparación:</strong> ${metodo}</p>
        <p><strong>Molienda:</strong> ${molienda}</p>
        <p><strong>Temperatura del Agua:</strong> ${temperatura}</p>
        <p><strong>Relación Agua/Café:</strong> ${relacion}</p>
        <p><strong>Tiempo de Extracción:</strong> ${tiempo}</p>
        <p><strong>Agitación:</strong> ${agitacion}</p>
        <p><strong>Acidez:</strong> ${acidez}</p>
        <p><strong>Cuerpo:</strong> ${cuerpo}</p>
        <p><strong>Dulzura:</strong> ${dulzura}</p>
        <p><strong>Intensidad:</strong> ${intensidad}</p>
    `;

    document.getElementById("receta").innerHTML = receta;
}
