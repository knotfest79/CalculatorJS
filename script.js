const userInput = document.getElementById("userInput");
var expression = '';

function press(num){
expression += num;

userInput.value = expression;
console.log('expression', expression)
console.log('num',num)
console.log('userInputvalue',userInput.value)
}

function equal() {

    userInput.value = eval(expression);

    console.log('userInputvalue-equalfunction',userInput.value)

    expression = '';
}

function erase() {

    expression = '';
    userInput.value = expression;
}

