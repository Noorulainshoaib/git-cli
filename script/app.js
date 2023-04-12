// DAY 3-April-2023 

 //alert('Hello World')
 //var username =prompt("Your Name PLease","Noorulain")
 //var user = "Noorulain"
 //var huser = "Shoaib"
 //console.log("Hello " + user+" " +huser)

 //var noorulain shoaib
 //noorulainShoaib camelCase
 //NoorulainShoaib PascalCase
 //noorulain_shoaib snake_case

 // /,*,+,-

 //console.log(2+5)
 //console.log(3-5)
 //console.log(9*5)
 //console.log(8/5)
 

 //BODMAS Rule

 //var exp = (8 + (9 / 6) - (9 / 3) * (4 - 3)) + 4
 //console.log(exp)
  
//age 

 //var age =+ prompt("Your age Please")
 //var mage =+ prompt("Your mother age Please")
 //var fage =+ prompt("Your father age Please ")
 //alert(age+mage+fage)
 //alert(Number(age) + Number(mage) + Number(fage))
 //console.log(typeof age)

 //address

 //var address=+ prompt("Your Address Please")
 //alert(address)
 //console.log(typeof address) 

 // 6 April - 7 April 2023 
 
 //task 2 Zakat.js

 //var Zakat_Percentage= 0.025;
 //var UserInput=prompt("Enter your amount on which you want to calculate Zakat");
 //var Result=  Number(UserInput) * Zakat_Percentage;
 //alert("Your Zakat value is " + Result);

 //Day 10-April-2023

 //If statements
 var x = prompt("Where does the Pope live?");
if (x === "code") {
alert("Correct!");
}


                  //Assignment 
     //Task-1 
//Zakat-Calculations//
var Zakat_Percentage= 0.025;
var UserInput=prompt("Enter your amount on which you want to calculate Zakat");
var Result=  Number(UserInput) * Zakat_Percentage;

alert("Your Zakat value is " + Result);


     //Task-2
//Fitrah Calculations//
var Familymembers=prompt("Enter Your Total Number Of Family Members")
alert("number of family members is " + Familymembers)
var FitrahOptions=prompt("Enter the option in which you want to pay  opt1.Wheat  opt2.Raisins  opt3.Dates  opt4.Oats")


if( 'FitrahOptions==1'){
    //var opt1=250pkr
var wheat= 250*Familymembers;
alert('fitrah 2023 value is =' + wheat);
}

if('FitrahOptions ==2'){
     //var opt1=450pkr
    var raisins=450*Familymembers;
    alert('fitrah 2023 value is= ' + raisins);
}

if('FitrahOptions==3'){
     //var opt1=2100pkr
    var oats=2100*Familymembers;
    alert('amount of fitrah 2023= '+ oats);
}

if( 'FitrahOptions==4'){
     //var opt1=2800pkr
    var dates=2800*Familymembers;
    alert('amount of fitrah 2023= '+ dates);
}
else{
 alert('invalid data')
}


     //Task-3
//Secret-Numbers 1-10
var secretnumber=2;
console.log(secretnumber)

var gnumb=prompt ('Guess the secret number betwwen 1 to 10');

if (gnumb<secretnumber)
{
alert("Not matched , your value is to low than the secret number"  + gnumb );
alert ('try again');
}

else if (gnumb>secretnumber)
{
alert("Not matched , your value is to high than the secret number" + gnumb );
alert('try again');
}


if (gnumb==secretnumber)
 {
alert("Congratulations ! You guess it .");
}

     //Task-4
//User Enter A Name,Print Out The Name With The First letter Capitalized

var str=prompt ('Enter Your Name');
var string2=str.charAt(0).toUpperCase()+str.slice(1);
alert(string2);
