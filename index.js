// Task 1: Introduction

console.log('Hello, ES6!!!!!!');





// ---------------------------------------------
// Task 2: Variables (let) and Scoping
console.log(dogo)
var dogo = 'Akita';
console.log(dogo)
var dogo = 'Shiba'
console.log(dogo)
dogo = 'chow chow'
console.log(dogo)

let cate = 'British hair'
console.log(cate)
 cate = 'American Cheese'
console.log(cate)

var dogo = 'Shepard'
function printBreed(){
    var dogo = 'Pug';
    console.log('inside:' +dogo);
}
printBreed();
console.log('outside:' +dogo)

for(var i=0;i<2;i++){
    var parrot ='hey!'
}
console.log(parrot)



// Task 2: Execise 1: Fix the code to print 15

var age = 15;

 for (var age = 0; age <= 14; age++) {
     console.log(age);
 }

 console.log(age); // Should print 15 instead of 10

// Task 2: Execise 2: Fix the code to print Jack Russell Terrier

 var myDog = "Jack Russell Terrier";
var shortLeggies = 'true'

 if (shortLeggies) {
    
     console.log(myDog);
 } else {
     var myDog = "Border Collie";
     console.log(myDog);
 }

 console.log(myDog); // Jack Russell Terrier







// ---------------------------------------------
// Task 3: Variables (const) and Immutability

const paintings =[
    'The knight',
    'Gladiator'
];
paintings.push('hello')
console.log(paintings)
paintings[0] = 'Cherry'
console.log(paintings)

const paintingInformation = {
    name:"Starry",
    painter:"vaner",
    location:{
museum:"vanheusn",
city:"Vatican"
    }
}
Object.freeze(paintingInformation);
Object.freeze(paintingInformation.location)
paintingInformation.year = 1888;
paintingInformation.name= "The" +paintingInformation.name;
paintingInformation.location.country = 'Usa'
console.log(paintingInformation)





// TASK 3: Exercise: Refactor the code to use let/const

 var painter = {
     name: "Van Gogh",
     nationality: "Dutch",
     paintings: ["The Starry Night", "Irises", "Almond Blossoms"]
};
Object.freeze(painter);
Object.freeze(painter.paintings);


 //painter.birthDate = "March 30, 1853";
 //painter.paintings.push("Something");

 console.log(painter); // Should print { name: 'Van Gogh', nationality: 'Dutch', paintings: [ 'The Starry Night', 'Irises', 'Almond Blossoms' ] }





// ---------------------------------------------
// TASK 4: Destructuring
const recipe ={
    name:'Red lentil dal',
    timeInMinutes:30,
    ingredients:['red lentils',
'cumin',
'turmeric']
}
// const name = recipe.name;
//const ingredients = recipe.ingredients;
const {name:myName, ingredients: myIngredients } = recipe;
console.log(recipe, myName, myIngredients)

const spices = ["cardomon","turmeric","cumin"]
const [first,second] = spices;
console.log(first,second)

function cook ({name, ingredients}){
    console.log(name);
    console.log(ingredients);
}
cook(recipe)







// Task 4: Exercise: Extract data with destructuring

 const ingredients = {
     //tea: 'black',
     milk: 'soy',
     sweetener: 'honey',
     spices: ['ginger', 'cardamom', 'cinnamon', 'nutmeg']
 }

// // Destructure the parameters
 function prepareChai(tea = "regular",spices,milk,sweetener) {
   
     console.log("Mix the " + tea + " tea " +
        "with the " + spices + " in a small pot. " + 
         "Add a cup of water and bring to boil. Boil for 2-3 min. " +
         "Add " + milk + " milk and " + sweetener + ". " + 
         "Simmer for 3 min. Serve masala chai hot or warm!");
 }

prepareChai(ingredients);

//const [spice1, ...restOfTheSpices] = spices;
//console.log(spice1, restOfTheSpices)

const [,, thirdSpice] = spices;
console.log(thirdSpice)


// ---------------------------------------------
// TASK 5: Strings and Interpolation
const language = "English";
console.log(language.includes("g"));
console.log(language.startsWith("Eng"));
console.log(language.endsWith("sh"))
console.log(language.repeat(3))

console.log(`I speak" ${language ==="English" ? "British English": "none"}`)





// TASK 5: Exercise: Refactor the code to use the ES6 String utility methods

const country = "Bulgaria";
 const city = "Sofia";

 if (country.includes("Bulg")) {
     console.log("The country starts with Bulg");
 }

 if (city.startsWith("So")) {
     console.log("The name starts with So");
 }

 if (city.endsWith("a")) {
     console.log("The name ends with a");
 }

 console.log(
     `The capital of ${country}`+
     `is the city of ${ city}`
 );









// ---------------------------------------------
// TASK 6: Arrow functions

const numbers = [1,2,3,4,5,6]
const calculateDouble = number => number *2;
let doubleNumbers = numbers.map(
    number=> number *2
    
)
console.log(doubleNumbers)





// TASK 6: Exercise: Filter out only the prime numbers from the array
const isPrime = number => number % 2 ===0
const primeNumbers = [1, 2, 3, 4, 5, 6].filter(isPrime);
 console.log(primeNumbers);







// ---------------------------------------------
// TASK 7: Arrow functions and this
function Dog(){
    this.age=0;
    setInterval(()=>{
        this.age +=1;
        console.log(this.age);
    },1000);
}


const isOdd = (...args)=> {
    console.log(args)
    return args[0]%2 ===1

};
console.log(isOdd(1,2,3,4))



// Task 7: Exercise

function Translator() {
    this.phrase = "good day";
    this.englishBulgarianDictionary = {
        good: "добър",
        day: "ден"
    }
 }

 Translator.prototype.getBulgarianPhrase = function() {
    return this.phrase
        .split(" ")
        .map((word) => this.englishBulgarianDictionary[word])
        .join(" ");
 }
 
 const translator = new Translator();
 console.log(translator.getBulgarianPhrase());
