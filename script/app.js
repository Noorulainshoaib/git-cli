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


       
                     //ASSIGNMENT-16-APRIL-2023-----------------------------
  

                    //TASK-1
  //Q:Calculate the zakat value, ............................

//Zakat-Calculations//
var Zakat_Percentage= 0.025;
var UserInput=prompt("Enter your amount on which you want to calculate Zakat");
var Result=  Number(UserInput) * Zakat_Percentage;

alert("Your Zakat value is " + Result);



               //TASK-2
//Q:calculate the fitrah amount.....................

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

                       //TASK-3
//Q:Create a program that generates a random number between 1 and 10 and stores it
//In a variable called "secretNumber".......................

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

             //TASK-4.
//Q:Create a program that asks the user to enter a name, and then prints out the name
//with the first letter capitalized (Make your name in capitalized case).......

//User Enter A Name,Print Out The Name With The First letter Capitalized

var str=prompt ('Enter Your Name');
var string2=str.charAt(0).toUpperCase()+str.slice(1);
alert(string2);
               //TASK-5
//Q:In this task, you will be creating two empty arrays called "contactNumbers" and
//"contactNames"......... 

//CONTACTNAMES - CONTACT NUMBER
var contactnumbers=new Array(6);
var contactnames=new Array(6);

for (var i = 0; i < 6; i++){
    var c= prompt ("Enter the Contact Numbers : " );
    var n= prompt("Enter the Contact Names : ");
}


contactnumbers.push(c);
contactnames.push(n);


       //TASK-6
//Q:Create an Array that contains different products, and get input from the user in which you
//ask your user to give the position of that element he/she wants. Now remove that Item
//from your array and console the removed item, Also display the remaining items in the
//array and total number of items remaining.

//PRODUCTS
var ardrinks=['Cola' , 'Lemonade' , 'Coffee' , 'Tea' , 'Apple Jucie'];
var userchoice=prompt("enter the drinks you want to remove opt1-Cola ,opt2-Lemonade, opt3-Coffee,opt4-Tea,opt5-Apple Juice");

removedrinks=ardrinks.splice(0,2);
//remainingdirinks=ardrinks-userchoice

console.log("removedrinks");
console.log("ardirnks" - "userchoice");
console.log("remainingdrinks");

             //TASK-7
//Q:Create a program that asks the user for their nationality, gender, and age using the prompt
//function.

//Nationality,genderand && age
var Nationality=prompt ("Enter Your Nationality");
var Gender=prompt ("Enter Your Gender opt-1/male opt-2/Female");
var Age=prompt ("Enter Your Age");


if (Nationality == "Pakistani" || Nationality  =="Indian") 
{
if (Gender =="opt-1" && Age >= 18)
 
 alert("You Are Eligible To Vote");
}
 
else if(Gender =="opt-2" && Age >= 18 )
{
    var Married=prompt("Enter Your Married Status opt-1 / yes or opt-2 / no");

if (Married=="opt-1")

    {alert("You Are Eligible To Vote");
}
 else //if (Married=="opt-2")//
  {

    alert("You Are Not Eligible To Vote");
}
}


            //TASK-8
//Q:You have an array of that contains the name of Pakistani Teams Player selected for
//WorldCup (15 Players) named as WorldCupSquad. Now tomorrow we have a match with
//India, So make an array of final team players (11 Players) that will be playing in tomorrows
//match from the WorldCupSquad array.


//worldcup squad
var WorldCupSquad=['Babar Azam' , 'Shadab Khan' , 'Fakhar Zaman' , 'Sarfaraz Ahmed' , 'Imad Wasim' ,'Mohammad Amir' ,'Haris Sohail' ,'Hasan Ali' ,'Mohammad Haris' , 'Muhammad Hasnain' , 'Imam-ul-Haq' , 'Shoaib Malik' , 'Asif Ali' , 'Mohammad Hafeez' , 'Shaheen Afridi']

console.log(WorldCupSquad);
console.log('We Have A Final Match With India');


//var Finalteamplayers=new Array(11);
//for (var i = 0; i < 11; i++){
    //var playerteams=('Babar Azam' , 'Shadab Khan' , 'Fakhar Zaman' , 'Sarfaraz Ahmed' , 'Imad Wasim' ,'Mohammad Amir' ,'Haris Sohail' ,'Hasan Ali' ,'Mohammad Haris' , 'Muhammad Hasnain' , 'Imam-ul-Haq' );
//}/
//console.log(playerteams);
//console.log(WorldCupSquad.playerteams);

var finalteam=WorldCupSquad.slice(0,11);
for(var i = 0; i < finalteam.length ; i++){
    console.log ('finalteam');
}







