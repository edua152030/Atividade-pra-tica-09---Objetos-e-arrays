/**
 * 1. Crie um objeto em JavaScript para colocar dois atributos de um
produto. Atribua o preço e descrição do produto com o valor “90” e a
descrição com o valor “Mouse”. Mostre no console o valor dos dois
atributos.

const peca = 
    {
        preco: 90,
        descricao: 'mouse'
    }

console.log(peca.preco, peca.descricao)
 */

/**
 * 2. Crie um objeto em JavaScript para colocar 5 atributos de um
notebook. Atribua os seguintes atributos:
Processador = 'i7'
Memória = 16GB
Preço = 5000
HD = 1TB
SSD = 256GB
Por fim, mostre o nome e valor de cada atributo no console,
exatamente como está na atividade.
 
const note = {
    processador: 'i7',
    memoria: '16gb',
    preco: 5000, 
    hd: '1tb', 
    ssd: '256gb'
}

console.log(note)

*/

/**
 * 3. Crie um objeto para colocar nome e duas notas. Atribua nome e
duas notas para o primeiro objeto, que será nosso primeiro aluno.
Agora crie mais um objeto para colocar informações do nosso
segundo aluno. Mostre as informações de cada aluno no console.
Mostre também a média do primeiro aluno e a média do segundo
aluno. Por fim mostre a média desta turma de 2 alunos.

const alunos = [
    {
        aluno: 'eduardo',
        nota1: 5,
        nota2: 7
    },

    {
        aluno: 'carla',
        nota1: 3,
        nota2: 6
    }
]

let totalNota = 0 

for (const aluno of alunos) {
    console.log(aluno);
    console.log((aluno.nota1 + aluno.nota2) / 2);
    totalNota += aluno.nota1 + aluno.nota2
}

console.log(`a media é : ${totalNota / alunos.length}`)
 */

/**
 * 4. Crie um cadastro de pessoas onde o usuário informe o nome, idade
e se está trabalhando ou não, se a pessoa estiver trabalhando

pergunte para ele o salário que está ganhando. Para cada pessoa
cadastrada, pergunte ao usuário se ele deseja continuar
cadastrando ou não. No final, mostre as pessoas que estão
desempregadas, as pessoas que estão empregadas separadas
pelas que ganham mais que 2500 e menos que 2500.

Exemplo de resultado:
Pessoas desempregadas:
Nome: Alessandro, Idade: 28
Nome: Alessandro, Idade: 28

Pessoas empregadas com salários menores que 2500:
Nome: Alessandro, Idade: 28, Salário: 1500
Nome: Alessandro, Idade: 28, Salário: 2400

Pessoas empregadas com salários maiores que 2500:
Nome: Alessandro, Idade: 28, Salário: 2700
Nome: Alessandro, Idade: 28, Salário: 3000
 */

let contador = Number(prompt('digite quantas pessoas fazem a pesquisa'))
const pessoas = []

for(let i = 0; i < contador; i++){
    let pessoa = {
        nome: prompt('digite seu nome'),
        idade: Number(prompt('digite sua idade')),
        trabalhando: prompt('Você está trabalhando? (sim ou não)')
    }
    if(pessoa.trabalhando === 'sim')
        pessoa.salario = Number(prompt('digite seu salario'))

    pessoas.push(pessoa);
}
console.log(pessoas)

console.log("Pessoas com salário abaixo de 2500:");
for (const pessoa1 of pessoas) {
    if (pessoa1.trabalhando === 'sim' && pessoa1.salario < 2500) {
        console.log(pessoa1);
    }
}

console.log("Pessoas com salário acima de 2500:");
for (const pessoa2 of pessoas) {
    if (pessoa2.trabalhando === 'sim' && pessoa2.salario > 2500) {
        console.log(pessoa2);
    }
}


