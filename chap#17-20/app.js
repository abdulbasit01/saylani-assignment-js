var num = [[],[],[]]





num[0] = [0,1,2,3]
num[1] = [1,0,1,2]
num[2] = [2,1,0,1]
document.write(num[0]+"<br/>"+num[1]+"<br/>"+num[2]+"<br/>")



for (var i = 1; i <= 10; i++){
    document.write(i+"<br/>")
}
var table = +prompt("Enter a number  to show its multiplication table");
var length = +prompt("Enter Multiplication table" );
document.write("Multiplication Table of " +table+"<br/> length"+length+ "<br/>")
for(var i = 1; i <= length; i++){
    document.write(table+" x "+i+" = "+table*i+"<br/>")
}


var fruits = ["apple", "banana", "mango", "orange", "strawberry"]
var arr = fruits.length
for(var i = 0; i <arr; i++){
    document.write("Element at index "+i+" is "+fruits[i]+"<br/>")
}


var num = [];
var odd = [];
var even = [];
var series = [];

for(var i = 0; i <=15; i++){
    num[i] = i+1;
}
document.write("counting :"+num+"<br/>")
document.write(" Reverse counting :"+num.reverse()+"<br/>")

for(var a = 1; a <= 20; a++){
    if(a % 2 !==0){
        even[a] = a;
    }
}
document.write("Even :"+even+"<br/>")
for(var b = 1; b <= 20; b++){
    if(b % 2 === 0){
        odd[b] = b;
    }
}
document.write("Odd :"+odd+"<br/>")
for(var d = 1; d <= 20; d++){
    if(d % 2 === 0){
        series[d] = d+"k";
    }
}
document.write("Series :"+series+"<br/>")




// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:

var a = ["cake","apple pie","cookie","chips","patties"]
var user = prompt("Welcome to ABC Bkery what do you want to order sir/ma'am")
var b = a.indexOf(user)
if(b<0){
    alert("we are sorry"+user+"is not available in our bakery")
}
else{
    alert(user+"is available at index "+b+" in our bakery") 
}



// 8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].

var arr = [24,53,78,91,12];
var max = Math.max.apply(Math,arr)
var min = Math.min.apply(Math,arr)
console.log(max , min)
document.write(
    "Array items: "+arr+
    "<br/> The largest number is " +max+
    "<br/> The samllest number is " +min
)


// 9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]

var arr = [24,53,78,91,12];
var max = Math.max.apply(Math,arr)
var min = Math.min.apply(Math,arr)
console.log(max , min)
document.write(
    "Array items: "+arr+
    "<br/> The largest number is " +max+
    "<br/> The samllest number is " +min+"<br/>"
)

// 10. Write a program to print multiples of 5 ranging 1 to
// 100.

for(var i = 1; i<=100; i++){
    if(i%5 === 0){
        document.write(i+" ,")
    }
}