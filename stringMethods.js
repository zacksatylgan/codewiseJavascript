
// ### **`.length`**
//**Gives the number of characters in the string.**

// let word = "JavaScript";
// console.log(word.length);

//### **`.toUpperCase()` / `.toLowerCase()`**

//**Changes all letters to upper/lower case.**

// let city = "ChIcAgO";
// console.log(city.toUpperCase());
// console.log(city.toLowerCase());


// ### **`.charAt(index)`**

//**Returns the character at the given position (first letter is 0).**

// let str = "hello";
// //         01234

// //console.log(str.charAt(1));

// for(let i=0; i < str.length; i++){ 
//     console.log( str.charAt(i) );
// }


//### **`.indexOf(substring)`**

//**Finds the position of a substring (returns -1 if not found).**


// let msg = "welcomeToChicago";
// //         012345668910

// console.log(msg.indexOf("hica")); // 10
// console.log(msg.indexOf("LLC")); // -1


//### **`.includes(substring)`**

//**Checks if the string contains a substring (true/false).**



// let msg = "good morning";
// console.log(msg.includes("ood")); // true
// console.log(msg.includes("kkkk")); // false


//### **6. `.replace(search, replacement)`**

//**Replaces a part of the string with something else.**

// let text = "I like Java";

// console.log(text.replace("Java", "JavaScript" ));



//### **`.substring(start, end)`**
//**Gets part of the string from start to end (end not included).**


// let word = "JavaScript";
// //          0123456789

// console.log(word.substring(0,4) );

// let newWord = "worldSoldTold!"
// //             0123456789   12
// console.log(newWord.substring(0,5)); //world

// console.log(newWord.substring(9));  //Told!


//### **`.split(separator)`**

//**Splits a string into an array of parts, using a separator.**

// let names = "Alice Bob Charlie";
// console.log(names.split(" "));


//### **`.trim()`**

//**Removes extra spaces from the start and end.**

let messy = "           hello world        ";
console.log(messy.trim());


