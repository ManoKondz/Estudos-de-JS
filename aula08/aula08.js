/*
    operadores bit a bit
        AND Bit a Bit (&)
        OR Bit a Bit (|)
        XOR Bit a Bit (^)
        NOT Bit a Bit (~)
        Deslocamento à Esquerda (<<)
        Deslocamento à Direita com Preenchimento (>>)
        Deslocamento à Direita sem Preenchimento (>>>) 
*/

const num1 = 5;  // Representação binária: 0101
const num2 = 3;  // Representação binária: 0011

const andResult = num1 & num2;  // Resultado: 0001 (1 em decimal)
const orResult = num1 | num2;   // Resultado: 0111 (7 em decimal)
const xorResult = num1 ^ num2;  // Resultado: 0110 (6 em decimal)
const notResult = ~num1;        // Resultado: 11111111111111111111111111111010 (-6 em decimal)
const leftShiftResult = num1 << 1;  // Resultado: 1010 (10 em decimal)
const rightShiftResult = num1 >> 1; // Resultado: 0010 (2 em decimal)
const unsignedRightShiftResult = num1 >>> 1; // Resultado: 0010 (2 em decimal)
console.log(andResult)
console.log(orResult)
console.log(xorResult)
console.log(andResult)
console.log(leftShiftResult)
console.log(rightShiftResult)
console.log(unsignedRightShiftResult)