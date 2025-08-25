document.write(" internal js")
         document.getElementById("heading").innerHTML="<h3>first display possibilities</h3>";
          function submit(){
             alert('form submitted');
          }

          // Problem 1
    function changeText() {
      document.getElementById("textPara").textContent = "Text has been changed!";
    }

    // Problem 2
    function changeColor() {
      const ajina = document.getElementById("colorBox");
      ajina.style.backgroundColor = ajina.style.backgroundColor === "lightblue" ? "lightgreen" : "lightblue";
    }

    // Problem 3
    function hidePara() {
      document.getElementById("hideShowPara").style.display = "none";
    }

    function showPara() {
      document.getElementById("hideShowPara").style.display = "block";
    }

    // Problem 4
    function updateInput() {
      document.getElementById("inputField").value = "Updated value!";
    }

    // Problem 5
    function showAlert() {
      const text = document.getElementById("alertText").textContent;
      alert(text);
    }

    var name ="Ajina";
    console.log(name);

    

let city="delhi";
console.log("old city:",  city);
city="Mumdai";
console.log("new city:",  city);

// modulus
let a=10;
let b=3
const result =a%b;
console.log("result of modulus:", result);
// Assignment
let num1=10;
let num2=3;
const result1 = num1+= num2;
console.log("result of assignment:", result1);



const user = { name: "Alice", age: 25 };

// Save object (convert to string first)
localStorage.setItem("user", JSON.stringify(user));

//Get object (convert back to object)
const storedUser = JSON.parse(localStorage.getItem("user"));
console.log(storedUser.name); // Output: Alice

// Average of 3 numbers
let number1 = 10;
let number2 = 20;
let number3 = 30;

let sum = number1 + number2 + number3/3;

console.log("Average:", sum);

// area of rectangle
let length = 8;
let width = 5;

let area = length * width;

console.log("Area of Rectangle:", area);

// simple intrest

let principal = 1000;
let rate = 5;
let time = 2;

let simpleInterest = (principal * rate * time) / 100;

console.log("Simple Interest:", simpleInterest);

// hours to minutes

let hours = 2.5;
let minutes = hours * 60;

console.log("Minutes:", minutes);

// square of a number

let number = 13;
let square = number ** 2;

console.log("Square of", number, "is", square);

// AND operator eg

let age =20
console.log(age>18 && age<30);
console.log(5>10 && 5<10);



// OR OPERATOR
let mark=40;
console.log(mark>30 || mark<30);
console.log(5>45 || 5<=3);

// NOT OPERATOR

let score= 30;
 console.log(!score>=30);



// Find Even or Odd

 function evenorodd(number){

  return number%2==0?'even':'odd';

 }
 let result2=evenorodd(4);

 console.log(result2);


                                                                                                                                      

//  Age function Example
 function ageEg(age){
  
  return age>=18?'Adult':'Minor';

 }
 let result3=ageEg(4);

 console.log(result3);