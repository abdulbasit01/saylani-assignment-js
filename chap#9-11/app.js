

var city = prompt("Enter Your City Name")

if (city === "Karachi"| city === "Karachi"){
    alert("Welcome to city of lights")
}

var gender = prompt("Enter Your Gender")
if  (gender === "Male"| gender ==="male"){
    alert("Good Morning Sir")
}

if  (gender === "Female"| gender ==="female"){
    alert("Good Morning Ma'am")
}

 var light = prompt("Enter Traffic SIgnal Light Color")
 if (light=== "Red"| light ==="red"){
     alert("Must Stop")
 }

 if (light=== "Yellow"| light ==="yellow"){
    alert("Ready to move")
}

if (light=== "Green"| light ==="green"){
    alert("Move now")
}

var fuel = prompt("Enter Your Remaining Fuel Levl")
if (fuel === "0.25"){
    alert("Please refill the fuel in your car")
}


var totalMarks = 300;
var sub1 = prompt("Enter Your First Subject Marks")
var sub2 = prompt("Enter Your Second Subject Marks")
var sub3 = prompt("Enter Your Third Subject Marks")
var sub1Marks = Number(sub1)
var sub2Marks = Number(sub2)
var sub3Marks = Number(sub3)
var markObtained = sub1Marks+sub2Marks+sub3Marks
var percentage = markObtained/totalMarks*100

if (percentage >= 80){
    grade = "A-one";
    remarks = "Excellent";
}

if (percentage >= 70){
    grade = "A";
    remarks = "Good";
}

if (percentage >= 60){
    grade = "B";
    remarks = "You Need to improve";
}
if (percentage <= 60){
    grade = "Fail";
    remarks = "Sorry";
}

document.write(
    "<h1>Marks sheet</h1>"+
    "<br/>Total Marks :"+totalMarks+
    "<br/>Marks Obtained :"+markObtained+
    "<br/>Percentage :"+percentage+"%"+
    "<br/>Grade :"+grade+
    "<br/>Remarks :"+remarks

)

// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.


var number = 10
var userInput = +prompt("Enter the number")
if (number==userInput){
    alert("BINGO! Correct Answer")
}

else if (userInput+1==number){
    alert("Close enough to the correct answer")
}

else{
    alert("You lost!")
}



// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.

var num = prompt("Enter a Number to check is divisible by 3")

if (num % 3 === 0){
    alert("Your Given Number is Divisible by 3")

}else {
    alert("Your Given Number is not Divisble by 3")
}

// 9. Write a program that checks whether the given input is an
// even number or an odd number.

var num = prompt("Enter a number: ")
if(num % 2 === 0){
    alert(num +" is a even number")
}else{
    alert(num +" is a odd number")
}

// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

var temp = prompt("Enter the temperature")
var t = Number(temp)

if (t > 40){
    alert("It is too hot outside")
}

if (t > 30){
    alert("The weather today is Normal")
}

if (t > 20){
    alert("Today's weather is cool")
}

if (t > 10){
    alert("OMG! Today's weather is a cool")
}

// 11.
// Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

var a = prompt("Enter First number")
var b = prompt("Enter Second number")
var operator = prompt("Enter an operator operation(+,-,*,/,%)")
var num1 = Number(a)
var num2 = Number(b)

if (operator === "+"){
    alert ("Your Ans is "+(num1+num2))
}

if (operator === "-"){
    alert ("Your Ans is "+(num1-num2))
}

if (operator === "*"){
    alert ("Your Ans is "+(num1*num2))
}

if (operator === "/"){
    alert ("Your Ans is "+(num1/num2))
}

if (operator === "%"){
    alert ("Your Ans is "+(num1%num2))
}
