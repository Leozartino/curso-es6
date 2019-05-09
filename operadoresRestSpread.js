//REST: serve para pegar o resto das propriedades

const usuario = {
  nome: "Leonardo",
  idade: 22,
  empresa: "Uirapuru"
};

const { nome, ...resto } = usuario;
console.log(nome);
console.log(resto);

const test = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  myfun() {
    return this.a;
  }
};

//Desestruturando alguns atributos do objeto test, deixando eles no escopo maior e visiveis
//Utilizando o operador rest, é passado a um novo objeto todo o restante dos atributos do objeto test
const { a, b, c, ...restoObjeto } = test;
console.log(restoObjeto);

const arr = [1, 2, 3, 4];
const [x, y, ...z] = arr;

console.log(x, y, z);

//O parms é um array de "coisas" que são passados para uma função
const soma = (a, b, ...parms) =>
  a + b + parms.reduce((pValue, cValue) => pValue + cValue);

console.log(soma(1, 3, 5, 6, 7));

/*
function soma(a,b,...parms){
  return parms.reduce((valorAcumulado, currentValue) => valorAcumulado + currentValue) + a + b;
}

console.log(soma(3,2,5,6))

//Spreand -> propagar, repassar informações de um array e copiar ao source.

const arr1 = [2,3,6,7];
const arr2 = [0,5,9];

const arr3 = [...arr1, ...arr2];

console.log(arr3);
*/

const usuario01 = {
  nome: "Qualuqr",
  idade: 52,
  cpf: "078.356.987 - 20"
};
//Utilizando o spread criamos um novo objeto repassando todas as propriedades para um novo através da desestruturação
//criando dando uma novo valor para o atributo nome, ao ser copiado para o objeto novoUser é sobrescrito na ato
const novoUser = { ...usuario01, nome: "Luís" };

console.log(novoUser);
