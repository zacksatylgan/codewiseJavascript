
// Polymorphism

class Browser{ // Base class

    open(){
        return "I am a generic browser";
    }
}

class Chrome extends Browser{// Inheritance | we override method open() 
    open(){
        return "Launch Chrome Borwser";
    }
}

class Firefox extends Browser{
    open(){
        return "Launch Firefox Borwser";
    }
}


let b = new Browser();
console.log(b.open());    // I am a generic browser

let chrome1 = new Chrome();
console.log(chrome1.open());

let firefox1 = new Firefox();
console.log(firefox1.open());


// let browsers = [new Browser(), new Chrome(), new Firefox()];
// for (let b of browsers) {
//   console.log(b.open());
// }

