//5.1
const arr = [1, 2, 3, 4, 5, 6];

const [x, ...y] = arr; //Rest

console.log(x, y);

//5.2
const soma = (...parms) => parms.reduce((pV, cV) => pV + cV);
console.log(soma(3,5,6,1,50));

//5.3
const usuario = {
  nome: 'Diego',
  idade: 23,
  endereco: {
  cidade: 'Rio do Sul',
  uf: 'SC',
  pais: 'Brasil',
  }
 };

 const usuario02 =  {...usuario, nome:'Gabriel'};
 console.log(usuario02);

 const usuario03 = {...usuario, endereco: {...usuario.endereco, cidade: 'Lontras'}};
 console.log(usuario03);

//Verificar se é possiǘel utilizar no metodo Object.assing()

 const objetoAss02 = Object.assign({}, usuario, {nome:'Gabriel'});
 console.log(objetoAss);