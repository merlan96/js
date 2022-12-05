// let name = 'Extra';
// let magicNumber = 100;

let result = 0;

// let name = 'Extra 1';
// let secondName = "EXTRA 2";
// let thirdName = `firstName ${name} secondName ${secondName}`;
// let fourthName = "firstname " + name + " secondName " + secondName;

// let user = 'Nico', surname = 'Nico', lastName = 'lastName';
//
// let user = 'Nico';
// let username = 'Nico';
// let lastname = 'lastname'

function add() { // void functions
    result = result + +userInput.value
    const text = `Result ${result} UserInput ${userInput.value}`
    outputResult(result, text);
    userInput.value = null;
    userInput.focus()
}

function multiply() {

}

function divide() {

}

// function log(param1) {
//     return param1;
// }
//
// add(1, 2);
//
// console.log(log(2));

document.addEventListener('DOMContentLoaded', function () {
    userInput.focus()
});

addBtn.addEventListener('click', add);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide)
