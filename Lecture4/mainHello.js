const hello = require('./libhello')

hello.sayHello();
console.log(hello.person.name);
console.log("Cube of 3 is:", hello.cube(3));
console.log(hello.add(5, 4));
console.log("Status is:", hello.status);
