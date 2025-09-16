    const math = require('./math.js');

    console.log('=== TESTANDO NOSSO PRINCIPAL MÓDULO MATEMÁTICO ===');

    const resultadoSoma = math.somar(10,5);
    console.log('Resultado da soma:',resultadoSoma );

    const resultadoMultiplicacao = math.multiplicar(4,7);
    console.log('Resultado da soma:',resultadoMultiplicacao );

    const resultadoDivisao = math.dividir(20,4);
    console.log('Resultado da Divisão:', resultadoDivisao);

    const divisaoPorZero = math.dividir(10, 0);
    console.log('Divisão por zero:', resultadoDivisao);

    console.log('=== TESTE CONCLUIDO ===');