function generateRecipe() {
    const method = document.getElementById('method').value;
    const recipeDiv = document.getElementById('recipe');
    let grind, temp, time, ratio, additionalInstructions;

    switch (method) {
        case 'Espresso':
            grind = 'Fino';
            temp = '85-90°C';
            time = '25-30 segundos';
            ratio = '1:2';
            additionalInstructions = 'Presiona con fuerza (aproximadamente 30 libras) y asegúrate de que la presión del agua sea constante.';
            break;
        case 'Pour Over':
            grind = 'Medio-fino a Medio-grueso';
            temp = '92-96°C';
            time = '3-4 minutos';
            ratio = '1:15 a 1:17';
            additionalInstructions = 'Vierte el agua en movimientos circulares para una extracción uniforme.';
            break;
        case 'French Press':
            grind = 'Grueso';
            temp = '90-96°C';
            time = '4-5 minutos';
            ratio = '1:12';
            additionalInstructions = 'Remueve ligeramente después de agregar agua y deja reposar antes de presionar el émbolo.';
            break;
        default:
            break;
    }

    recipeDiv.innerHTML = `
        <h2>Receta para ${method.toLowerCase()}</h2>
        <p><strong>Molido:</strong> ${grind}</p>
        <p><strong>Temperatura del Agua:</strong> ${temp}</p>
        <p><strong>Tiempo de Extracción:</strong> ${time}</p>
        <p><strong>Proporción de Café a Agua:</strong> ${ratio}</p>
        <p><strong>Instrucciones Adicionales:</strong> ${additionalInstructions}</p>
    `;
}
