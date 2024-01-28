
console.log(" Well Well Well, look who it is! Welcome to my portfolio")

var text1= "She said: \"yes!\", thats for sure" ;

var text2  = "He said: \"no way!\", thats for sure" ;
console.log (text2, text1)


var emptyVariable = null;
var notNullButAString = "null";
console.log(emptyVariable); // Outputs Null


var numberInteger = 456;
var numberInteger2 = -345; // This is negative integer
var numberFloat = 50.25;

console.log(numberInteger, numberFloat, numberInteger2);

var boolean1 = true;
var boolean2 = false;
var notABoolean = "false "; //This is just the string "false", not false!

console.log (boolean1,boolean2,notABoolean)

var person = {
    name: "John",
    age: 39
  };
  console.log(person)

  var age = 39;
var name = "John";
var personParent = {
  name: name,
  age: age,
  child: {
    name: "Sara"
    
  }
};

console.log (age, personParent)


personParent.name = "Anne"; // Set the name property to "Anne"
personParent.child.size = 175; // Set new values that weren't set before
console.log(personParent.child.name); // Output "Sara" to the console

console.log(personParent["name"]); // The same as personParent.name
var weWantThisField = "age";
console.log(personParent[weWantThisField]); // The same as personParent.age

var shortObject = { name: "John", age: 31};
var emptyObject = {}; // Objects can be empty. You can add properties later
console.log(shortObject,emptyObject)
delete shortObject.name;


var shortArray = [1,2,3];
var mixedArray = [
  1,
  "Hello",
  {},
  ["nested array"]
];
console.log(shortArray[0]); // Outputs "1", the first value
console.log(mixedArray[3][0]); // Outputs "nested array"


var person = {name: "Johanna" , age:39, hobbies:"comedy clubs"};

console.log(person)


function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle') {
    x.className += ' responsive';
  } else {
    x.className = 'navtoggle';
  }}

  /* Carousel*/
$(document).ready(function() {
  // Initialize the carousel for Leo's Scenario
  $('.leo-carousel').slick({
    dots: true,
    slidesToShow: 1, // Display one image at a time
    slidesToScroll: 1 // Scroll one image at a time
  });

  // Initialize the carousel for Lia's Scenario
  $('.lia-carousel').slick({
    dots: true,
    slidesToShow: 1, // Display one image at a time
    slidesToScroll: 1 // Scroll one image at a time
  });
});
