const os = require('os');
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

add (20, 10);

function nodejs() {
    console.log('Welcome to Node.js');
    console.log(add(20, 10));
    console.log(multiply(20, 10));
    console.log(os.type());
    console.log(os.platform());
    console.log(os.arch());
}
nodejs()



module.export = {add, multiply, divide, subtract};