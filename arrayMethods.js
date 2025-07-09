
// .shift() — Remove First
// Removes the first value from the array.

// let fruits = ["apple", "banana", "orange"];
// fruits.shift();

// console.log(fruits);


// .unshift() — Add to Start
// Adds a value to the start of the array.

// let fruits = ["banana", "orange"];
// fruits.unshift("apple");

// fruits.unshift("melon");

// console.log(fruits);
// console.log("Number of items: ", fruits.length)

//### **5. `.length` — Get Size**
//**Gives the number of items in the array.**



//### **`.indexOf()` — Find Index**
//**Finds the position (index) of a value. Returns -1 if not found.**

// let names = ["Kelly", "Alice", "Bob", "Charlie"];
// //             0         1.     2.       3
// let positionOfitem = names.indexOf("Laramy");
// console.log(positionOfitem);



//### **`includes()` — Check if Value Exists**

//**Returns true if the array contains a value, false otherwise.**

// let cars = ["Toyota", "BMW", "Lexus"];
// let isItemexist  =  cars.includes("Ford");
// console.log(isItemexist);


//### **`.join()` — Make a String**
//**Turns the array into a single string, with a separator.**

// let words = ["I", "love", "JavaScript!"];

// console.log(words.join("_"));



// ### **`.reverse()` — Reverse Order**
//**Reverses the order of items in the array.**

// let nums = [1, 2, 3];
// console.log("Before revers: ", nums);

// console.log("After revers: ", nums.reverse() ); // [3,2,1]


//### **`.slice(start, end)` — Copy a Part**
//**Returns a new array with elements from start to end (not including end).**

// let nums = [10, 20, 30, 40, 50, 90,  -5,  102 ];
// //           0.  1.  2.  3.  4  5.   6.    7
// console.log(nums.slice(1,3)); //[ 20, 30 ]

// console.log(nums.slice(4,7)); // [50, 90,  -5]


//**`concat()` — Combine Arrays**
//Joins two (or more) arrays into a new one.


// let a = [1, 2];
// let b = [3, 4];
// let c = a.concat(b);
// console.log(c); // [1, 2, 3, 4]



//### **12. `.splice(start, count)` — Remove or Replace**
// **Removes (or replaces) items in the array (changes the original array).**
// Remove 2 items starting at index 1:

// let colors = ["red", "green", "blue", "yellow"];
// //              0.     1         2        3

//  colors.splice(1, 2); // ["red", "yellow"]
// console.log( colors);


// let numbers = [-1, -2, -3, -5, -4];
// //              0.  1.  2.  3.  4

// numbers.splice(3, 2);
// console.log(numbers);


// Add "orange" at index 2 (don’t remove any):
// let colors = ["red", "green", "blue"];  // ["red", "green", "orange", "blue"]
// //             0.      1.       2

// colors.splice(2, 0, "orange");

// console.log(colors);



// Replace "green" (at index 1) with "pink":

let colors = ["red", "green", "blue"];
//              0.      1.      2

colors.splice(1, 1, "pink");

console.log(colors);

