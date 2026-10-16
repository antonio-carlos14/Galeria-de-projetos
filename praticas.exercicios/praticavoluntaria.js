const prompt = require("prompt-sync") ()

const nome = prompt("digite seu nome: ")
console.log(`meu nome é ${nome}`)

//looping 

const prompt = require ("prompt-sync") ()

let idade = Number(prompt("digite sua idade"))

while (idade >= 18) {
console.log("você entrou na festa!")
}


// contador++\-- (aumenta ou diminui de 1 em 1)
// variavel = variavel +1 (aumenta conforme indicado,+1,+2...)

let contador = 0

while (contador <= 5) {
    console.log(`O numero é ${contador}`)
        contador++

}

console.log("programa finalizado")


// do while

let contador = 0

while (contador <= 3) {
    console.log(`Contador while: ${contador}`)
    contador++
}

do {
    console.log(contador)
        contador++
} while (contador <= 3)


// do while (sistema de acesso de senha)

const prompt = require("prompt-sync") ()

const senhaCorreta = "1234"
let senha = ""

do {
    senha = prompt("digite sua senha: ")
} while (senha !== senhaCorreta)

console.log("Acesso liberado!")
