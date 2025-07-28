// <!-- Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope (either function scope or global scope) before the code is executed.

// This means you can use variables and functions before they are declared, but with some rules. -->

console.log(x); // undefined
  var x = 5;


  greet(); 

  function greet() {
    console.log("Hello from hoisted function!");
  }

