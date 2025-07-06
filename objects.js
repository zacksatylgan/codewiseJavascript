
// Declaring an Object

let person = {
    firstName : "Jenny",
    lastName : "Kennedy",
    gender : "Female",
    age: 35
}

//console.log(person);
// Read data by property name
//console.log( person["firstName"] );
// console.log( person.lastName  );

// Add data to your object
person["weight"] = 55;
person.height = 5.5; 

// console.log("This is before updating information");
// console.log(person);

// this is how we update information; 
// person.age = 45;

// console.log("This is AFTER updating information");
// console.log(person);


// console.log("This is before DELETE age information");
// console.log(person);

// // Delete property by property name from the object
// delete person.age;
// console.log("This is AFTER DELETE age property");
// console.log(person);



// Looping Over All Properties (for...in loop)

//console.log(person);

// Read property name


//console.log( person["firstName"] );

for(let name in person ){
    // console.log(`property name: ${name} : property value: ${person[name]}` );

    // console.log('Property name: ', name );
    // console.log('Property value: ', person[name]);

    console.log('Property name: ', name, 'Property value: ', person[name] );
}




