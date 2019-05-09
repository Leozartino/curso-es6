class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  isAdmin() {
    return this.admin ? "Admin!" : "Not Admin!";
  }
}

class Admin extends User {
  constructor(email, password) {
    super(email, password);
    this.admin = true;
  }
}

const pessoaA = new Admin("leozartino@gmail.com", "152547xcz");
console.log(pessoaA.isAdmin());
const pessoaB = new User("abc@email.com", "123456789");
console.log(pessoaB.isAdmin());
