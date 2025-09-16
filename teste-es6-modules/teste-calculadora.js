const calc = require ('./calculadora');
console.log('=== TESTANDO NOSSA CALCULADORA ===');
console.log('');

console.log('Soma:');
console.log('5 + 3 =', calc.somar(5, 3));
console.log('10 + 7 =', calc.somar(10, 7));
console.log('');

console.log('Subtração:');
console.log('10 - 4 =', calc.subtrair(10, 4));
console.log('15 - 8 =', calc.subtrair(15, 8));
console.log('');

console.log('Multiplicação:');
console.log('4 * 3 =', calc.multiplicar(4, 3));
console.log('7 * 6 =', calc.multiplicar(7, 6));
console.log('');

console.log('Divisão:');
console.log('15 ÷ 3 =', calc.dividir(15, 3));
console.log('10 ÷ 2 =', calc.dividir(10, 2));
console.log('10 ÷ 0 =', calc.dividir(10, 0));
console.log('');

console.log('=== TESTE CONCLUÍDO ===');