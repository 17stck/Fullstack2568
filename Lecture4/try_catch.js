function criticalCode() {
    throw "throw an exception";
}

function logError(theException) {
    console.log("Error: " + theException);
}

console.log("\n************ Try/Catch Example **********\n");

try {
    criticalCode();
} catch (ex) {
   console.log("Got an error");
   logError(ex);
}

console.log("\n******Throwing in Try catch block ******\n");

try {
    throw "An exception that is thrown";
} catch (ex) {
    console.log("Caught the exception");
    logError(ex);
}


console.log("\n************ End Try/Catch Example **********\n");

try {
    criticalCode();
} catch (ex) {
    console.log("Got an error");
    logError(ex);
} finally {
    console.log("This is the finally block that always executes");
}
function hello(){
    console.log("\n************ Hello from try_catch.js **********\n");
}