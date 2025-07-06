
// Example 1: Print 1 to 5

// let i =1;

// while(i <= 5){
//     console.log("i= ", i);
//     i++; // 1 2 3 4 5
//  }


// Example-2: print numbers 20 - 10

// let i =20;

// while(i >= 10){
//     console.log("i= ", i);
//     i--;
// }


// Example 3: print sum of  0 - 100

// let sum =0; // we want to get sum of 0-100
// let j = 0; // j we will use it whithin the loop

// while(j<=100){
//     sum += j; // sum = sum + j   
//     j++
// }

// console.log('sum = ', sum);


// Example 4: Print Even Numbers from 2 to 10

// let y = 2;
// while(y <= 10){
//     if(y%2===0){
//         console.log("is even number: " , y);
//     }
//     y++; 

// }


// let y = 2;
// while(y<=10){
//     console.log(y);
//     y+= 2; // 2+ 2 = 4  
// }


// Example 5:    5! = 5 × 4 × 3 × 2 × 1  = 120.

let factorial = 1;
let i = 5;
while(i>= 1){
    factorial *= i;
    i--;
}

console.log(factorial);