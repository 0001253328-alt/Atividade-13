let par = 0;
let impar = 0;

for (let i = 1; i <= 8; i++) {
    let n = Number(prompt("Digite um número aleatório: "));

    if (n % 2 === 0) {
        par++;
    } else {
        impar++;
    }
}

console.log(`Quantidade de números ímpares digitados: ${impar}`);
console.log(`Quantidade de números pares digitados: ${par}`);