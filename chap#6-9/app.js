
var a = 10;
document.write(
    "Result: <br/> The value of a is:" +a+
    "<br/> ----------------"+

    "<br/><br/> The value of ++ a is:"+(++a)+
         "<br/>  Now The value of a is:"+a+

    "<br/><br/> The value of a++ is:"+(a++)+
         "<br/>  Now The value of a is:"+a+

    "<br/><br/> The value of  --a is:"+(--a)+
         "<br/>  Now The value of a is:"+a+

    "<br/><br/> The value of a-- is:"+(a--)+
         "<br/>  Now The value of a is:"+a +"</br> </br> </br>"
        ) 


var a = 2
var b = 1
var result = --a - --b + ++b + b--;

document.write(" a is ="+a)
document.write("<br/> b is = "+b)
document.write("<br/> result is ="+result +"</br> </br>")

var userName = prompt("Enter your Name")
alert("Hello" +userName+" have a good day")

var table = prompt("Enter a number for Table","5")
var a = Number(table);
var num = 1
document.write(
    a+" x "+num+" = "+ (a*num++)+"<br/>"+
    a+" x "+num+" = "+ (a*num++)+"<br/>"+
    a+" x "+num+" = "+ (a*num++)+"<br/>"+
    a+" x "+num+" = "+ (a*num++)+"<br/>"+
    a+" x "+num+" = "+ (a*num++)+"<br/>"+
    a+" x "+num+" = "+ (a*num++)+"<br/>"+
    a+" x "+num+" = "+ (a*num++)+"<br/>"+
    a+" x "+num+" = "+ (a*num++)+"<br/>"+
    a+" x "+num+" = "+ (a*num++)+"<br/>"+
    a+" x "+num+" = "+ (a*num++)+"<br/>"

)

var sub1 = prompt("Enter First Subject Name")
var sub2 = prompt("Enter Second SUbject Name")
var sub3 = prompt("Enter Third SUbject Name")
var sub1Marks = prompt("Enter First Subject Marks")
var a = Number(sub1Marks)
var sub2Marks = prompt("Enter Second Subject Marks")
var b = Number(sub2Marks)
var sub3Marks = prompt("Enter Third Subject Marks")
var c= Number(sub3Marks)
var totalMarks = 100

document.write(
              "<table>"+
              "<tr><th>Subject</th><th> Total Marks</th><th> Obtained Marks</th><th> Percentage</th></tr>"+
              "<tr><td>"+sub1+"</td><td>"+totalMarks+"</td><td>"+a+"</td><td>"+(a/totalMarks*totalMarks)+" %</td></tr>"+
             "<tr><td>"+sub2+"</td><td>"+totalMarks+"</td><td>"+a+"</td><td>"+(a/totalMarks*totalMarks)+" %</td></tr>"+
              "<tr><td>"+sub3+"</td><td>"+totalMarks+"</td><td>"+a+"</td><td>"+(a/totalMarks*totalMarks)+" %</td></tr>"+
             "<tr><td></td><td>"+(totalMarks*3)+"</td><td>"+(a+b+c)+"</td><td>"+((a+b+c)/(totalMarks*3)*100)+" %</td></tr>"+
             "</table>"
             )
