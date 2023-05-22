// Tipovi podataka i operatori
var a = 6;
var b = '5';
console.log(typeof (a));

// ARITHMETIC
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log((a * b).toFixed(2)); // Convert a number to string, keeping only two decimals
console.log(a / b);
console.log(a / 0); // Infinity
console.log(a / Infinity); // 0
console.log(a % 6);

// COMPARISON
console.log(a == b); // Equal operator
console.log(a === b); // Strict equal
console.log('' == 0); // Falsy values

// LOGICAL
console.log((5 < 6) && (6 == 6));
console.log((5 < 6) || (6 == 6));
console.log(!(5 < 6));

// CONDITIONAL (TERNARY)
console.log(a == b ? 'This is equal!' : 'This is not equal!');

//Varijable i funkcije
/************************************ 
Simple Function Example
*********************************** */
function nameOfFunction() {
    // function body   
}

function greet() { // declaring a function named greet()
    console.log('Hello there');
}

greet(); // function call

/************************************ 
Example 1: Function with Parameters
*********************************** */
function greet(student) {
    console.log('Hello ' + student + ':)');
}

let student = prompt('Enter a name: '); // variable name can be different

greet(student); // calling function


/************************************ 
Example 2: Self Invoking Function - BMI Calculator
*********************************** */
(function calculateBMI() {
    let result;
    let person = prompt('Please enter your name: ', '');
    let weight = prompt(`What is your weight, ${person}? `, '');
    let height = prompt(`And lastly, ${person}, what is your height (in m2) `, '');

    result = weight / (height * 2);

    alert(result.toFixed(2));
})();


/************************************ 
Example 3: Adding two numbers
*********************************** */
function add(a, b) {
    console.log(a + b);
}

add(3, 4); // calling functions
add(2, 9); // calling functions

/************************************ 
Example 4: Variable as function
*********************************** */
let add = function(value){
    return console.log(value + 1);
}

let result = add(1);

//Arrays
// Creating an array
var items = new Array('cat', 'bee', 'ant eater');

// Array literal
let items = ['Plates', 'Knife', 'Glass'];
//console.log(items)

console.log(items[1]);
console.log(items.length)

// Push a new item into the array
items.push('Fork');

// Sort the Array
items.sort();

for (let i = 0; i < items.length; i++) {
    console.log('Items of array are: ' + items[i]);
}

// Get the last item in an array
console.log(items[items.length - 1])

// Reverse sort the array
console.log(items.reverse())

//Objekti
// Creating an object by using the new Object() method
const myCar = new Object();
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;

console.log(myCar);

myCar.color = 'Blue';
console.log(myCar);

// Creating an object by using object literal
const person = {
    firstName: 'Nino',
    lastName: 'Škuflić',
    id: 115648972,
    fullName: function () {
        return this.firstName + ' ' + this.lastName;
    },
};

console.log(person.id);
console.log(person.lastName);
console.log(person.fullName());

// Converting JSON into an object
myJSON = "{ 'name':'Nino', 'age':24, 'car': 'toyota' }";
myObject = JSON.parse(myJSON);

// Converting an object into a JSON
const myObject = {
    brand: {
        manufacturer: 'Apple',
        model: 'iPhone 13 Pro'
    },
    color: ['Sierra Blue', 'Silver', 'Gold', 'White'],
    price: 999,
    display: '6.1-inch display',
    qty: 184,
    checkStock: function () {
        if (this.qty > 0) {
            return 'in stock';
        } else {
            return 'out of stock';
        }
    }
};
myJSON = JSON.stringify(myObject);

/**************************************************
 * STRING INTERPOLATION
**************************************************/
console.log(`The selected phone ${phones.brand.model} is ${phones.checkStock()} and it's price is $${phones.price}.`);

/**************************************************
 * REST OPERATOR
**************************************************/

function showNames(...names) {
    console.log(names);
}

const x = ['John', 'Jane', 'Doe', 'Smith', 'Jack'];
showNames(x);


function myFunction(a, b, ...c) {
    console.log('A', a);
    console.log('B', b);
    console.log('C', c);
}

myFunction(1, 2, 3, 4, 5, 6, 7, 8, 9);

/**************************************************
 * SPREAD OPERATOR
**************************************************/

const arrayValues = ['My', 'name', 'is', 'Nino'];
console.log(arrayValues); // [ 'My', 'name', 'is', 'Nino' ]

// console.log(...arrayValues) is the same as console.log('My', 'name', 'is', 'Nino')

console.log(...arrayValues); // My name is Nino

const array3 = ['Nino', 'Škuflić'];
const array4 = [...array3, 'works', 'at', 'IBM iX & Algebra'];

console.log(array3); // ['Nino', 'Škuflić, 'works', 'at', 'IBM iX & Algebra']
console.log(array4[0]); // Nino should be shown on position 0

// ANOTHER EXAMPLE
function sum(x, y, z) {
    return x + y + z;
}

const numbers = [1, 2, 3];
console.log(sum(...numbers));
// expected output is 6

/**************************************************
 * WINDOW METHODS
**************************************************/

window.open();
window.close();
window.innerWidth;
window.innerHeight;
window.location.hostname;
window.location = 'https://www.example.com';
window.alert('Hello! I am an alert box!');
window.confirm('Do you like JavaScript?');
window.prompt('Please enter your name');
window.setTimeout(function () {
	console.log('I am late.');
}, 2000);

/**************************************************
 * FOR LOOP
**************************************************/
for (let i = 1; i < 10; i++) {
    console.log('Current counter is ' + i)
}

//for loop array
const array5 = ['Volvo', 'BMW', 'Audi', 'Toyota'];

for (let i = 0; i < array5.length; i++) {
    console.log(array5[i]);
};

/**************************************************
 * DO WHILE LOOP
**************************************************/
let count = 0; // Inicijalizacija i deklaracija varijable count
do { // Do = NAPRAVI OVO (kod ispod)
    console.log(count) // Console logaj COUNT
    count++; // Povećaj count za 1
} while (count < 10); // DOKLE GOD je COUNT < 10

//DOM manipulation
// 1. dodavanje h1 elementa
var h1 = document.createElement("h1");
h1.innerText = "Hello world!";

document.body.prepend(h1);

// 2. novi div sa klasom info
var infoDiv = document.createElement("div");
infoDiv.setAttribute("class", "info");
infoDiv.innerText = "Hello!!";

var descriptionDiv = document.querySelector(".description");
document.body.insertBefore(infoDiv, descriptionDiv.nextSibling);

// 3. 5 praznih li elemenata
var ulElement = document.querySelector("ul");

for (var i = 0; i < 2; i++) {
    var liElement = document.createElement("li");
    ulElement.appendChild(liElement);
}

document.getElementById('p1').style.color = 'blue';

const para = document.createElement('p');
const node = document.createTextNode('Am I new here? Yes I am!');
para.appendChild(node);

const element = document.getElementById('div1');
element.appendChild(para);

const p2 = document.getElementById('p2');
p2.remove();

let h1 = document.querySelector('h1');
h1.innerText = 'Hello, class.';

document.querySelector('#div2').innerHTML = '<h1>I just added me here.</h1>'

//API (povezivanje na API)
fetch('https://catfact.ninja/fact')
    .then(response => response.json())
    .then(data => document.getElementById('catFact').innerHTML = `${data.fact}`)
    .catch(error => alert(error));

/**************************************************
 * COOKIES
**************************************************/

document.cookie = 'username=Nino Škuflić; expires=Thu, 31 Dec 2023 12:00:00 UTC; path=/; Secure;'; // Set cookie
let getCookie = 'Cookie is' + document.cookie;

/**************************************************
 * LOCAL STORAGE (isto je i za session storage)
**************************************************/

localStorage.setItem('name', 'ninoskuflic'); // Add to local storage
localStorage.setItem('course', 'Front-End Development');

localStorage.getItem('name'); // Get local storage item with identifier 'NAME'
localStorage.removeItem('name'); // Remove a local storage item with identifier 'NAME'
localStorage.clear(); // Remove (delete) all local storage items



