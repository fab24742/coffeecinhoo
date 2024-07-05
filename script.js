document.getElementById('coffeeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const method = document.getElementById('method').value;
    const acidity = document.getElementById('acidity').value;
    const body = document.getElementById('body').value;
    const sweetness = document.getElementById('sweetness').value;
    const intensity = document.getElementById('intensity').value;

    let grindSize, waterTemp, brewTime, coffeeAmount, waterAmount;

    switch(method) {
        case 'espresso':
            grindSize = 'Muy Fino';
            waterTemp = '90-96°C';
            brewTime = '20-30 segundos';
            coffeeAmount = '18-20g';
            waterAmount = '36-40g';
            break;
        case 'pour-over':
            grindSize = 'Medio';
            waterTemp = '90-96°C';
            brewTime = '2-4 minutos';
            coffeeAmount = '20g';
            waterAmount = '300g';
            break;
        case 'french-press':
            grindSize = 'Grueso';
            waterTemp = '90-96°C';
            brewTime = '4 minutos';
            coffeeAmount = '30g';
            waterAmount = '500g';
            break;
        case 'aeropress':
            grindSize = 'Medio a Fino';
            waterTemp = '85-92°C';
            brewTime = '1-2 minutos';
            coffeeAmount = '17g';
            waterAmount = '240g';
            break;
        case 'cold-brew':
            grindSize = 'Grueso';
            waterTemp = 'Ambiente o Fría';
            brewTime = '12-24 horas';
            coffeeAmount = '100g';
            waterAmount = '1000g';
            break;
    }

    if (acidity === 'high') {
        if (method !== 'cold-brew') {
            waterTemp = '93-96°C';
        }
    } else if (acidity === 'low') {
        if (method !== 'cold-brew') {
            waterTemp = '85-90°C';
        }
    }

    if (body === 'full') {
        coffeeAmount *= 1.2;
    } else if (body === 'light') {
        coffeeAmount *= 0.8;
    }

    if (sweetness === 'high') {
        brewTime = method === 'cold-brew' ? '16-24 horas' : `${parseInt(brewTime) + 1} minutos`;
    } else if (sweetness === 'low') {
        brewTime = method === 'cold-brew' ? '8-12 horas' : `${parseInt(brewTime) - 1} minutos`;
    }

    if (intensity === 'strong') {
        coffeeAmount *= 1.5;
    } else if (intensity === 'mild') {
        coffeeAmount *= 0.75;
    }

    const recipe = `
        <h2>Receta para ${method.replace('-', ' ')}</h2>
        <p><strong>Molido:</strong> ${grindSize}</p>
        <p><strong>Temperatura del Agua:</strong> ${waterTemp}</p>
        <p><strong>Tiempo de Extracción:</strong> ${brewTime}</p>
        <p><strong>Cantidad de Café:</strong> ${coffeeAmount.toFixed(1)}g</p>
        <p><strong>Cantidad de Agua:</strong> ${waterAmount}g</p>
    `;

    document.getElementById('recipe').innerHTML = recipe;
});
