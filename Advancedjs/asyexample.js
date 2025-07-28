// synchronous- execution line by line
// asynchronous-tasks are performed without waiting for the pevios one to complete
// setTimeout(() =>
//     console.log("task1")
//  , 3000);
// Callback = a function passed to another function to run after something happens.

// function asynsample1(callback){
//     setTimeout(() =>   {console.log("task1");callback() } , 3000);
// }

// function  asynsample2(){
// console.log("task1")
// console.log("task2");
// console.log("task3")
 
// }
// asynsample1(asynsample2);
 setTimeout(() => {
console.log("sample1");
     
 }, 3000);

console.log("sample2");
console.log("sample3");
console.log("sample4");

async function fetchData() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchData();


 function asynsample1(callback){
    setTimeout(() =>   {console.log("task1");callback() } , 3000); }
 function  asynsample2(){
    console.log("task1")
    console.log("task2");
    console.log("task3")
    
    }
    asynsample1(asynsample2);