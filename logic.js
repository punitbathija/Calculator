//Choosing all the Elemnets of the Calculator
const display = document.querySelector('#screen');
const zero = document.querySelector('#zero');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const back = document.querySelector('#delete');
const plus = document.querySelector('#add');
const minus = document.querySelector('#sub');
const abstract = document.querySelector('#mul');
const slash = document.querySelector('#divide');
const equal = document.querySelector('#equal');
const reset = document.querySelector('#reset');
const decimal = document.querySelector('#dec');

//Declaring Additional Elements to Calculate Operations

//Elements
let text = ''
let firstValue;
let secondValue;
let operator;
display.textContent = 0;

//States
let preState = false;
let equalState = false;

//Functions to perform calculations

//Delete Button
function clear(e)
{
    if(e.target.textContent === 'RESET' || 'DEL')
    {
        text = '';
        firstValue = '';
        secondValue = '';
        display.textContent = 0;
    };
};

//Function to collect input and display on screen
function populateScreen(e)
{
   if(equalState)
   {
       text = '';
       firstValue = '';
       secondValue = '';
       equalState = false;
   }
    
        let input = e.target.textContent;
        text = text+input; 
        display.textContent = text; 
}

//Function to seprate input by first number and second number
function firstNumber(e)
{   
   if(preState)
    {
        secondValue = parseFloat(text);
        answer = operate(firstValue, secondValue, operator);
        text = answer;
        display.textContent = text;
    }
    operator = e.target.textContent;
    if(operator === '+' || operator === '-' || operator === '/' || operator === '*')
    {
        firstValue = parseFloat(text);
        text = '';
        preState = true;
    }


}

function secondNumber(e)
{
    if(e.target.textContent === '=')
    {
        secondValue = parseFloat(text);
        answer = operate(firstValue, secondValue, operator);
        text = answer;
        display.textContent = text;
        preState = false;
        equalState = true;
    };
};

zero.addEventListener('click',populateScreen);
one.addEventListener('click', populateScreen);
two.addEventListener('click', populateScreen);
three.addEventListener('click', populateScreen);
four.addEventListener('click', populateScreen);
five.addEventListener('click', populateScreen);
six.addEventListener('click', populateScreen);
seven.addEventListener('click', populateScreen);
eight.addEventListener('click',populateScreen);
nine.addEventListener('click',populateScreen);

decimal.addEventListener('click',populateScreen)

reset.addEventListener('click', clear);
slash.addEventListener('click', firstNumber);
abstract.addEventListener('click', firstNumber);
plus.addEventListener('click', firstNumber);
minus.addEventListener('click', firstNumber);
equal.addEventListener('click', secondNumber);
back.addEventListener('click', clear);



function add(a,b)
{
   return a+b;
};

function subtract(a,b)
{
    return a-b;
};

function multiply(a,b)
{
    return a*b;
};

function divide(a,b)
{
    return a/b;
};

function operate(a,b,operator)
{
    switch (operator)
    {
        case '+' :
         return add(a,b);
        
         case '-' : 
        return subtract(a,b);
        
        case '*' : 
        return multiply(a,b);
        
        case '/' : 
        return divide(a,b);
    };
};


