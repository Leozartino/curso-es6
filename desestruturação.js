//Desestruturação:
const user = {
  name: "Leonardo",
  age: 22,
  adress: {
    avenue: "Av Poeta Castro Alves",
    number: "705",
    par03: {
      test: 1,
      test2: 2
    }
  }
};

/* const {
  adress: { avenue },
  name: nome
} = user; */

/* console.log(nome, avenue); */

function mostraNome({ name, age }) {
  return `${name}  ${age}`;
}
console.log(mostraNome(user));

//cuidado com a sobrecarga de funções
const mostra = () => console.log(name, age); //a função tinha o memso nome de outra no código
mostra();

for (let i = 0; i < personArray.length; i++) {
  console.log(personArray[i].name);
}
