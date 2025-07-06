
// for loop 

// Example 1 , print numbers between 0 - 10


// console.log(1)

// for(let i = 0; i <= 10; i++){
//     console.log(i);
// }


// Example-2: print numbers 20 - 10

// for(let i = 20; i >= 10; i--  ){
//     console.log(i);
// }



// Example 3: print sum of  0 - 100

// let sum = 0;
// for(let i=0; i <= 100; i++ ){
//     sum += i; // sum = sum + i
//     console.log("i= ", i);
// } 

// console.log("sum = ", sum); // 5050


// Example 4: odd and even numbers 1 - 50

// for(let i =1; i <= 50; i++ ){
    
//     if(i%2 === 0){
//         console.log(i, " :is even number");
//     }else{
//         console.log(i, " :is odd number");
//     }
// }


// Example 5:    5! =5 × 4 × 3 × 2 × 1  = 120.

let factorial = 1;
for(let i = 5; i >= 1; i-- ){
    //factorial = factorial * i;
    factorial *= i;

    //console.log(i);
}

console.log("Factorial: ", factorial);





