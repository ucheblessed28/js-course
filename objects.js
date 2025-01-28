let michael = {
    firstname: 'Michael',
    lastName: 'John',
    age: 13,
    favColor: 'Red',
    favFood: 'Bread'
}

let alice = {
    firstname: 'Alice',
    lastName: 'John',
    age: 11,
    favColor: 'Blue',
    favFood: 'Grapes'
}

// console.log(michael.favColor, alice.favColor,);

let sandra = {
    firstname: 'Sandra',
    lastname: 'Ben',
    color: 'blue',
    stack: 'frontend',
}

let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    greet: function () {
      return `Hello, my name is ${this.firstName} ${this.lastName}`;
    },
  };
  
//   console.log(person.greet());  // Output: Hello, my name is John Doe`

  console.log(Object.entries(michael));
  console.log(Object.entries(alice));
  console.log(Object.entries(person));
  


