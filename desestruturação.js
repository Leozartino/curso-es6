//Desestruturação:
const user = {
  name: 'James',
  age: 27,
  adress: {
    par: 'whatever01',
    par02: 'whatever02',
    par03:{
      test: 1,
      test2: 2
    }
  }
}

const {name, age, adress: {par, par02,par03: {test}}} = user;

console.log(name,age, test);

const mostraNome = () => console.log(name, age, test);
mostraNome();

const personArray = [{name: 'James', age:27},{name:'Bob', age: 31}, {name:'Edward', age: 21}];
const mapPerson = personArray.map(pos => pos.name);
console.log(mapPerson);

for(let i = 0; i < personArray.length; i++){
  console.log(personArray[i].name);
}
