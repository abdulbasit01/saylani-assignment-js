
var a = 12
var b = 13
var c = a+b 
document.write("sum of "+a+" and "+b+" is "+c+"<br/>")

 c = a-b 
document.write("subraction of "+a+" and "+b+" is "+c+ "<br/>")

c = a*b 
document.write("multiplication of "+a+" and "+b+" is "+c+ "<br/>" )


c = a/b 
document.write("division of "+a+" and "+b+" is "+c+ "<br/>" )

c = a%b 
document.write(" modulus of "+a+" and "+b+" is "+c+ "<br/>" )


var a 
document.write("Value after variable declaration is: " +a+ "</br>")
a = 5
document.write("Initial value: " +a+ "</br>")
a++
document.write("Value after increment is: " +a+ "</br>")
a= a+7
document.write("Value after addition is: " +a+ "</br>")
a--
document.write("Value after decrement is: " +a+ "</br>")
a = a%3
document.write("The remainder is: " +a+ "</br>")


var a = 600
var total = a*5
document.write("Total cost to buy 5 tickets to a movie is " +total+"PKR </br>")


document.write("<h2> Table of 4 </h2>")
document.write(
    "4 x 1 =" +4*1+ "<br/>" +
    "4 x 2 =" +4*2+ "<br/>" +
    "4 x 3 =" +4*3+ "<br/>" +
    "4 x 4 =" +4*4+ "<br/>" +
    "4 x 5 =" +4*5+ "<br/>" +
    "4 x 6 =" +4*6+ "<br/>" +
    "4 x 7 =" +4*7+ "<br/>" +
    "4 x 8 =" +4*8+ "<br/>" +
    "4 x 9 =" +4*9+ "<br/>" +
    "4 x 10 =" +4*10+ "<br/>"
)



var c = 25
var f =(c* 9/5)+32
document.write(c+"<sup>0</sup>C is "+f+"<sup>0</sup>F ")
var f = 70
var c =(f-32) * 5/9
document.write("<br/>"+f+"<sup>0</sup>C is "+c+"<sup>0</sup>C ")

var item1 = 650
var item2 = 100
var qtyitem1 = 3
var qtyitem2 = 7
var charges = 100
var total = item1*qtyitem1+item2*qtyitem2+charges

document.write(
    "<h1> Shopping Card </h1>"+
    "price of item 1 is "+item1+
    "<br/>Quantity of item 1 is "+qtyitem1+
    "<br/> Price of item 2 is "+item2+
    "<br/>Quantity of item 2 is "+qtyitem2+
    "<br/>Shipping Charges" +charges+
    "<br/> <br/> <br/>Total cost of your order is "+total

)


var totalMarks = 980
var marksObtained = 804
var percentage = 804/980 *100

document.write(
    "<h1> Marks Sheet </h1>" +
    "Total marks :" +totalMarks+
    "<br/>Marks obtained :" +marksObtained+
    " <br/> Percentage :" +percentage

)

var dollar = 104.80 * 10
var sar = 28 * 25
var pkr = dollar+sar 

document.write("<h1> Currency in PKR </h1> Total Currency in PKR:" +pkr)

var num = 1
num = ((num+5)*10)/2

var currentYear = 2020
var birthYear = 1992
var age = currentYear-birthYear
document.write("<h1>Age Calculator</h1>currentYear: "+currentYear+"</br>birthYear: "+birthYear+"</br>currentage"+age)


var radius = 20
var circumference = 2 * 3.142 * radius
var area = 3.142 * radius * radius

document.write (
    "<h1>The Geometrizer </h1>"
    +"Radius of a circle :" +radius+
    "<br/> The circumference is : "+circumference+
    "<br/> The area is : "+area

)

var snack = "chocolate chip"
var age = 15
var maxAge = 65
var amntPerDay = 3
var total = (maxAge -age)*amntPerDay

document.write(
    "<h1> The Life Time Calculator</h1>" +
    "Favourite Snack : "+snack+
    "<br/> Current age: " +age+
    "<br/> Estimated Maximum Age: "+maxAge+
    "<br/> Amount old snacks Per day: "+amntPerDay+
    "<br/> You will need: "+total+" "+snack+
    "to last you untill the ripe old age of" +maxAge

)