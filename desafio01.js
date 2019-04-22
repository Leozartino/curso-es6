class Usuer{
 constructor(email, senha){
   this.email = email;
   this.senha= senha;
 }
 isAdmin(){
  return this.admin === true;
 }
}
class Admin extends Usuer {
  constructor(email, senha){
    super(email, senha);
    this.admin = true;

  }
}
const UserComum = new Usuer('leoza@gmail.com', '12356');
const UserAdm = new Admin('admin@gmail.com', '1256');
console.log(UserComum.isAdmin());
console.log(UserAdm.isAdmin());