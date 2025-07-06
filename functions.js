
// functions

//console.log("Hello, world!");

// function greet(){
//     console.log("Hello, world!");
// }

// greet();


// function userName(name){
//     console.log("My name is: ", name );
// }


// userName("Zack");


// function addTwoNum( num1, num2){
//     console.log(num1 + num2);
// }


// addTwoNum( 10, 5);

// function addTwoNum( num1, num2){
//     //console.log(num1 + num2);
//     return (num1 + num2);
// }


// let sum = addTwoNum( 10, 5);

// console.log(sum);





// function userName(name){
//     console.log("My name is: ", name );
// }

// function userName(name){
//     console.log( `My name is: ${name}`  );
// }

// userName("admin");

// Function Expression (Alternate Way)

// const sayHi = function() {
//   console.log("Hi!");
// };

// sayHi(); // Output: Hi!



//Function to Calculate n Factorial

function factorial(num){
    let factorial =1;
    for(let i =5; i>=1; i--){
        factorial *=i;
    }
    return factorial;
}

let myFactorial = factorial(5);
console.log(myFactorial);


// let factorial = 1;
// let i = 5;
// while(i>= 1){
//     factorial *= i;
//     i--;
// }

// console.log(factorial);