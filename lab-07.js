/* 
    CIT 281: Lab 07
    Meagan Kiefer
*/

class CustomError extends Error {

    constructor(args) {
        super(args);
        this.message = 'Custom error';
    }
    throwGenericError() {
        throw new Error("Generic error");
    }

    throwCustomError() {
        throw new CustomError("Custom error");
    } 
}

const myError = new CustomError();


console.log("Force generic error");
try {
    console.log("Generic error try block");
    myError.throwGenericError();
}
catch (error) {
    console.log("Generic error catch block");
    console.log(`${error.name}: ${error.message}`);
}
finally {
    console.log("Generic error finally block");
}

console.log("Force custom error");
try {
    console.log("Custom error try block");
    myError.throwCustomError();
}
catch (error) {
    console.log("Custom error catch block");
    console.log(`${error.name}: ${error.message}`);
}
finally {
    console.log("Custom error finally block");
}