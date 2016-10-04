interface Person {
    firstName: string;
    lastName: string;
    //age?: Number;
}

function Pessoa(primeiroNome, ultimoNome, idade) {
    this.firstName = primeiroNome;
    this.lastName = ultimoNome;
    this.age = idade;
}

function greeter(person: Person) {
    return "Hello, I'm " + person.firstName + " " + person.lastName;
}

let json = { firstName: "Homer", lastName: "Simpson" };
console.log(greeter(json));

const pessoa = new Pessoa("Bart", "Simpson", 10)
console.log(greeter(pessoa));