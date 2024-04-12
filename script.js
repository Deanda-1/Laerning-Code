let person = {
    firstName: "Deanda",
    lastName: "Noble",
    age: 55,
  fullName() {
    return "Hello " + this.firstName + " "
    + this.lastName + " !";
 }
};
console.log(person);
console.log(person.firstName);
console.log(person["lastName"]);
console.log(person.fullName());
delete person.fullName;
console.log(person);
