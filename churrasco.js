document.getElementById('churrascoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obter valores dos inputs
    const adultosComBebida = parseInt(document.getElementById('adultosComBebida').value);
    const adultosSemBebida = parseInt(document.getElementById('adultosSemBebida').value);
    const criancas = parseInt(document.getElementById('criancas').value);

    // Cálculos
    const carneAdultos = (adultosComBebida + adultosSemBebida) * 400; // em gramas
    const carneCriancas = criancas * 200; // em gramas
    const totalCarne = carneAdultos + carneCriancas;

    const acompanhamentos = (adultosComBebida + adultosSemBebida + criancas) * 200; // em gramas

    const cerveja = adultosComBebida * 2; // em litros

    const refrigeranteAdultos = adultosSemBebida * 0.5; // em litros
    const refrigeranteCriancas = criancas * 0.5; // em litros
    const totalRefrigerante = refrigeranteAdultos + refrigeranteCriancas;

    const agua = (adultosComBebida + adultosSemBebida + criancas) * 0.4; // em litros

    // Limitar resultados a uma casa decimal
    const carneKg = (totalCarne / 1000).toFixed(1);
    const acompanhamentosKg = (acompanhamentos / 1000).toFixed(1);
    const cervejaL = cerveja.toFixed(1);
    const refrigeranteL = totalRefrigerante.toFixed(1);
    const aguaL = agua.toFixed(1);

    // Exibir resultados
    document.getElementById('results').innerHTML = `
        <h3>Quantidade de itens necessários para o churrasco:</h3>
        <p>Carne: ${carneKg} kg</p>
        <p>Acompanhamentos: ${acompanhamentosKg} kg</p>
        <p>Cerveja: ${cervejaL} litros</p>
        <p>Refrigerante: ${refrigeranteL} litros</p>
        <p>Água: ${aguaL} litros</p>
    `;
});