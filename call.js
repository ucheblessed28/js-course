// GET ELEMENTS
const input = document.getElementById('calculatorNumber');
const calculScreen = document.getElementById('calculatorCalculScreen');

// INITIALIZE STATE
let previousNumber = 0;
let isWaiting = false;
let operatorType = '';
let onResult = false;
let firstNumberEntered = false;

function clearAll(){
    input.value = 0;
    calculScreen.innerHTML = '&emsp;';
}

function addNumber(number){
    if(number === '.' && input.value.includes('.')) return; // ACCEPT ONLY 1 DOT

    // SET THE VAlUE OF INPUT TO NUMBER IF:
    // - we're waiting on the second number
    // - we already have a result from the previous question
    // - the input start with 0 and the number is not a dot and the input does not have a dot
    // ELSE WE HAD THE NUMBER TO THE ALREADY EXISTING ONES IN THE INPUT VALUE
    if((isWaiting && firstNumberEntered) || onResult || (input.value.startsWith('0') && number !== '.' && !input.value.includes('.'))){
        input.value = number;
        onResult = false;
        firstNumberEntered = false;
    }else input.value += number;
}

function operation(operator, e){
    // GET WHICH OPERATION WE'LL BE DOING AND SET THE CURRENT STATE ON THE SCREEN
    operatorType = operator;
    previousNumber = Number(input.value);
    calculScreen.innerText = `${previousNumber}${e.innerText}`;
    isWaiting = true;
    firstNumberEntered = true;
}

function opInverse(){
    // IF THERE'S A NUMBER WE INVERSE HIM ELSE WE SET THE VALUE TO 0
    input.value = input.value.length !== 0 ? -input.value : 0;
}

function delLastNumber(){
    // IF THERE'S SOMETHING TO DELETE, WE DELETE IT ELSE WE SET THE VALUE TO 0
    input.value = input.value.length === 1 ? 0 : input.value.substring(0, input.value.length - 1);
}

function operationInstant(operator){
    const currentNumber = Number(input.value);
    // DOING OPERATION
    switch(operator){
        case '%':
            input.value = currentNumber / 100;
            break;
        case 'pi':
            input.value = Math.PI;
            break;
        case '1/x':
            input.value = 1 / currentNumber;
            break;
        case 'x2':
            input.value = currentNumber**2;
            break;
        case '2/x':
            input.value = Math.sqrt(currentNumber);
            break;
        default:
            alert('AN ERROR OCCUR!');
            break;
    }
}

function opEqual(){
    if(!isWaiting) return; // WE WANT AN OPERATION TO DO

    onResult = true; // TELLING THERE'S NOW A RESULT ON THE SCREEN

    // SETTING USEFUL VARIABLES
    const lastNumber = Number(input.value);
    let answer = 0;

    calculScreen.innerHTML += `${lastNumber}&equals;`; // PUTTING THE EQUATION ON THE SCREEN

    switch(operatorType){
        case '%':
            break;
        case '/':
            answer = previousNumber / lastNumber;
            break;
        case 'x':
            answer = previousNumber * lastNumber;
            break;
        case '-':
            answer = previousNumber - lastNumber;
            break;
        case '+':
            answer = previousNumber + lastNumber;
            break;
        default:
            alert('AN ERROR OCCUR!');
            break;
    }

    input.value = answer;
    isWaiting = false;
}