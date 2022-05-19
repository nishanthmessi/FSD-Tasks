// Find the culprit and invoke the alert

// <!DOCTYPE html>
// <html>
// <body>
//  <script src=”scripts.js”></script>
// </body>
// </html>

// scripts.js
alert("I'm invoked");


// Fix the below to alert Guvi geek
let admin=9, fname=10.5; 
fname = "Guvi";
lname = "geek"
admin = fname +" "+ lname;
alert( admin ); // "Guvi geek"


// Fix the below to alert hello Guvi geek
let fname=10.5; 
fname = "Guvi";
lname = "geek"
let fullName = fname +" "+ lname;
alert("hello " + fullName);


//Fix the below to alert sum of two numbers
let a = +prompt("First number?");
let b = +prompt("Second number?");

alert(a + b);


//If you run the below scritpt you will get “Code is Blasted”
//Explain Why the Code is blasted and how to diffuse it and get “Diffused”.

var a = "2" > "12";
//Don't touch below this
if (a) {
  console.log("Code is Blasted")
}
else
{
  console.log("Diffused") 
}
//The declared variable is comparing a string, changing to number gives us "Diffused" 


//How to get the success in console.
let inp = prompt("Enter a number?");
a = (inp === Number)
 
//Don't modify any code below this
if (a) {
 console.log( 'OMG it works for any number inc 0' );
}
else
{
 console.log( "Success" );
}


//How to get the correct score in console.
let value = +prompt('How many runs you scored in this ball');
if (value === 4) {
    console.log("You hit a Four");
} else if (value === 6) {
    console.log("You hit a Six");
} else {
    console.log("I couldn't figure out");
}


//Fix the code to welcome the Employee
let login = 'Employee';
let message = (login == 'Employee' || 'Director') ? 'Greetings' : 'No login'
console.log(message);


//Fix the code to welcome the boss
let message;
if (null || 2 || undefined )
{
 let message = "welcome boss";
 console.log(message)
}
else
{
 let message = "Go away";
 console.log(message)
}


//Fix the code to welcome the boss
let message;
let lock = '';
//Dont change any code below this 
if (null || lock || undefined )
{
  message = "Go away";
}
else
{
 message = "welcome";
}
console.log(message);


//Fix the code to welcome the boss
let message;
let lock = '';
//Dont change any code below this
if (lock && " " || undefined )
{
  message = "Go away";
}
else
{
 message = "welcome";
}
console.log(message);


//Change the code to print
// 3
// 2
// 1
let i = 3;
while (i) {
  console.log( i-- );
}


//Change the code to print even numbers
for (let num = 2; num <= 20; num += 2) {
  console.log(num)
}


//Change the code to print all the gifts
let gifts = ["teddy bear", "drone", "doll"];
for (let i = 0; i < 3; i++) {
    console.log('Wrapped ' + gifts + ' and added a bow!');
}

