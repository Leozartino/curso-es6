const numeros = [2,3,5,9,7,12,8,6];
let novoNumeros = [];

for(let i = 0; i < numeros.length; i++){
  novoNumeros.push(numeros[i] * 2);
};
console.log(novoNumeros);

//A cada iteração do map será um callback da função passada, com base no item de cada posciao do array.
const comMapNovoArray = numeros.map((posicao) => {
  if (posicao > 5){
    return posicao * 2
  }
  else {
    return posicao;
  }
})

console.log(comMapNovoArray);

const arrayNomes = ['Paulo','Roberta','Luciano','Tales'];

const arrayNomesMinusculos = arrayNomes.map((nome) => nome.toLocaleLowerCase());
console.log(arrayNomesMinusculos);

//FILTER -> verifica condição true or false e retorna no novo array o que for true.
let aux = [];
for(j = 0; j < numeros.length; j++){
  if(numeros[j] % 2 === 0){
    aux.push(numeros[j])
  }
}
console.log(aux)

const valoresFiltrados = numeros.filter(numero => numero % 2 === 0);
console.log(valoresFiltrados);

const valoresComFilterMap =  numeros
  .filter(numero => numero % 2 === 0)
  .map(numero => numero * 2);
  
console.log(valoresComFilterMap);


const somaNumeros = numeros.reduce((valorAcumulador, valorArray) =>  valorAcumulador + valorArray , 0);
console.log(somaNumeros);

const pessoa = [
  {
    nome: 'Leonardo',
    idade: 22
  },

  {
    nome:'Lucas',
    idade: 22
  },

  {
    nome: 'Juliana',
    idade:23
  },

  { 
    nome:'Manoel',
    idade:19
  },

  {
    nome: 'Eduardo',
    idade:12
  },

  {
    nome: 'João',
    idade: 10
  }
]
//REVISAR THE CODE BELOW:
const pessoasReduce = pessoas.reduce((valorAcumulador, valorArray) => {return valorArray.idade >= 18 ? 'maiores': 'menores'}, {maiores: [], menores: []})