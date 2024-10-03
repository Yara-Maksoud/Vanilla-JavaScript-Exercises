// 1 - Variables and Conditionals Exercise:
//First exercise
let age = 33;
if (age >= 18){
    console.log("You are allowed to vote!");   
}
else{
    console.log("You are not allowed to vote!");    
}

//Second exercise
//prompt message will work only in a browser environment
//let name = prompt("Please enter your name!");
let name = "Yara";
if(name == "John"){
    console.log("Hello, John!");    
}
else{
    console.log("You are not John");    
}

//2 - Functions Exercises:
//Fist exercise

// create function to sum two numbers
function sum(num1, num2){
    return num1 + num2;
}

//call the sum function
console.log(sum(5,10));
console.log(sum(9,1));

//Second exercise
//Function to reverse a string
function reverseString(text){
    //converting the string into an array 
    let text_array = text.split('');
    //reverse the order of the array elements
    let reversed_array = text_array.reverse();
    //convert the array to a string and return it
    return reversed_array.join('');
    
}

//Testing the function
console.log(reverseString("YAra"));
console.log(reverseString("hello"));

//3 - Arrays and Loops Exercises:
//First exercise

//define an array of fruits
let fruits = ["Mango", "Passion fruit", "Watermelon", "Pomegranate"]
//iterate through the array and log each fruit to the console.
for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);    
}

//Second exercise
//Function to calculate the average of an array of numbers
function average(numbers){
    let sum = 0;
    //Iterate through the array and sum all items
    for (let i = 0; i < numbers.length; i++) {
         sum += numbers[i];        
    }
    //calculate the average and return it
    return sum / numbers.length;
}

//Test the average function
console.log(average([1,2,3,4,5]));

//Third exercise

//create an array of numbers
let nums = [1,4,60,3,9,19,45];
//set first item to max variable
let max = nums[0];
//Iterate through the array to find the largest number
for (let i = 1; i < nums.length; i++) {
    if(nums[i] > max)
        max = nums[i];
}
console.log(`The largest number in the array is ${max}`);

//Fourth exercise
//create an array of words
let words = ['This', 'is', 'an', 'array', 'of', 'words'];
let sentence ="";
// Iterate through the loop to concatenate the words
for (let i = 0; i < words.length; i++) {
     sentence += words[i] + " ";    
}
//Log the sentence
console.log(sentence);

//Fifth exercise
//Function to check if a given name exists in the array
function findName(names, name){
    for (let i = 0; i < names.length; i++) {
        //check if the current item matches the given name and return true if it is found
        if(names[i] === name)
            return true;        
    }
    //return false if the name is not found
    return false;   
}

//Test the function
let names = ['Alex', 'Robert', 'Daniel', 'Chiara', 'Viola']
let nam = "Daniel"
if(findName(names, nam))
    console.log(`${nam} is one of the names`);
else
    console.log(`${nam} is not one of the names`);
    
//sixth exercise
//Create an array of even numbers from 1 to 20 using for loop
let evenNumbers = [];
for (let i = 1; i <= 20; i++) {
    if(i % 2 == 0)
        //Add the even number to the array
        evenNumbers.push(i);
}
//Log the array
console.log(evenNumbers);

//4- Objects Exercises
//First exercise
//Create a book object
const book  = {
    title:"Nineteen Eighty-Four",
    author:"George Orwell",
    year:"1984"
};

//Print the book details
console.log(`The book details are:
Title: ${book.title} 
Author: ${book.author}
Year: ${book.year}`);

//Second exercise
//Create a person object
const person = {
    name: "John Smith",
    age: "29",
    gender: "male"
};

//Create a function to print person object information
function printInfo(personObject){
    console.log(`The person information:
    Name: ${personObject.name}
    Age: ${personObject.age}
    Gender: ${personObject.gender}`);
    
}
//Call the function for the person
printInfo(person);

//5- Objects as Classes Exercises
//First and second exercise
//Create a car object that simulates a class  
const Car ={
    make: "",
    model: "",
    year: "",

    //method to start the car
    start: function(){
        console.log("Start the car!");        
    },

    //method to drive the car
    drive: function(){
        console.log("Drive the car!");        
    }       
};

//Create a car instance
let myCar = Object.create(Car);
myCar.make = "Toyota";
myCar.model = "Yaris";
myCar.year = "2005";

myCar.start();
myCar.drive();



