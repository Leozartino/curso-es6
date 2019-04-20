class List {
  constructor(){
    this.data = [];
  }
  add(data){
    this.data.push(data);
    console.log(this.data);
  }
}
 
class TodoList extends List{
  constructor(){
    super();
    this.user = 'Leonardo';
  }
  mostraUsuario(){
    console.log(this.user);
  }
}
//metodos estaticos nao exergam o restante da classe
//em geral servem para usos genéricos, sem instanciar a classe (criando objetos)
//passando argumentos e retorna algo independente do restante da classe.
class Matematica{
  static soma(a, b){
    return a + b;
  }
}
const Minhalista = new TodoList();
console.log(Matematica.soma(5, 6));

document.getElementById('novoTodo').onclick = function() {
  Minhalista.add('Novo Todo');
  Minhalista.mostraUsuario();
}