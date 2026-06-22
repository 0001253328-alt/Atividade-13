let n=Number(prompt("Quantos numeros da sequência de fibonacci você deseja: "))
let n1 = 0
let n2 = 1
alert(`${n1}`)
alert(`${n2}`)
for (let i=3;i<=n;i++){
    let proximo = n1+n2

alert(`${proximo}`)
n1=n2
n2=proximo
}