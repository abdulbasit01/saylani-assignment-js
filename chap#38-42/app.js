// alert("started")
// function leapYear(y){
//     if(y%4===0 && (y%100!==0 ||y % 400 == 0)){
//         console.log(y + " is a leap year")
//     }else{
//         console.log(y + " is not a leap year")

//     }
// }

// leapYear(2022)

// function sides(a,b,c){
//     var S=(a+b+c)/2
//     console.log(S)
//     var area=(S*(S-a)*(S-b)*(S-c))
//     console.log(Math.sqrt(area))
// }
// sides(2,3,2)



// function findIndexOf(array,findOf){
//     x=0
//     for (var i=0; i<= array.length ; i++){
//         if(array[i]===findOf){
//             alert(`the index of ${findOf} is ${i}`)
//             x=1
//         }
//     }
//     if(x!=1){
//         alert(`the index of ${findOf} is -1`)
//     }
    
// }
// var li=['a','b','c','d','e','f']
// findIndexOf(li,"l")


// function RemoveVowel(string){
//     var checkPoint="";
//     string=string.toLowerCase()
//     for(var i=0; i<string.length; i++){
//         if(string[i]!=="a" && string[i]!=="e" && string[i]!=="i" && string[i]!=="o" && string[i]!=="u"){
//             checkPoint+=string[i]
//         }
//     }
//     return checkPoint
// }
// console.log(RemoveVowel("hello This IS ABDUL basit"))

function occuranceOfvowel(str){
    str=str.toLowerCase().split('')
    console.log(str)
    for (var i=0; i<str.length; i++){
        if(str[i]==="a" || str[i]==="e" || str[i]==="i" || str[i]==="o" || str[i]==="u" ){
            if(str[i+1]==="a" || str[i+1]==="e" || str[i+1]==="i" || str[i+1]==="o" || str[i+1]==="u" ){
                console.log(str[i] , str[i+1])
            }
        }
    }
}
occuranceOfvowel('His ACQUAINTANCE, even if some of the vowel sounds are a shade tight, is also exemplary. ADIEU')