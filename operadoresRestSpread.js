//REST: serve para pegar o resto das propriedades

const usuario = {
  nome: 'Leonardo',
  idade: 22,
  empresa: 'Uirapuru'
};
const {nome, ...resto} = usuario;
console.log(nome);
console.log(resto);

const arr = [1,2,3,4];
const [a,b, ...c] = arr;

console.log(a, b, c);

function soma(a,b,...parms){
  return parms.reduce((valorAcumulado, currentValue) => valorAcumulado + currentValue) + a + b;
}

console.log(soma(3,2,5,6))

//Spreand -> propagar, repassar informações de um array e copiar ao source.

const arr1 = [2,3,6,7];
const arr2 = [0,5,9];

const arr3 = [...arr1, ...arr2];

console.log(arr3);

const usuario01 = {
  nome:'Qualuqr',
  idade: 52,
  cpf: '078.356.987 - 20'
}

const novoUser = {...usuario01, nome: 'Luís'};

console.log(novoUser);

