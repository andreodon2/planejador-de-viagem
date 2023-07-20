function calculateTravelTime() {
    // Obter os valores do formulário
    const distance = parseFloat(document.getElementById('distance').value);
    const averageSpeed = parseFloat(document.getElementById('averageSpeed').value);

    // Verificar se os valores são válidos
    if (isNaN(distance) || isNaN(averageSpeed) || distance <= 0 || averageSpeed <= 0) {
        alert("Por favor, insira valores válidos para distância e velocidade média.");
        return;
    }

    // Calcular o tempo de viagem (em horas)
    const travelTime = distance / averageSpeed;

    // Exibir o resultado na página
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p>Tempo estimado de viagem: ${travelTime.toFixed(2)} horas.</p>`;
}
