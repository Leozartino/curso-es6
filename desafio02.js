//2.1
const usuarios = [
  { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
  { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
  { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
 ];

 const idadeUsuarios = usuarios.map((pos) => pos.idade);
 console.log(idadeUsuarios);

 //2.2
 const empregadosRockseat_18 = usuarios
 .filter(pos => pos.idade >= 18 && pos.empresa ==='Rocketseat');
 console.log(empregadosRockseat_18); 

 //2.3
 const empresaGoogle = usuarios.find(pos => pos.empresa === 'Google');
 console.log(empresaGoogle);

 //2.4
 const  multPor2 = usuarios
 .map(user => ({...user, idade: user.idade * 2}))
 .filter(pos => pos.idade <= 50);

 console.log(multPor2);