const cat = {
  name: "Pipoy",
  whatName: function() {
    return this.name;
  }
};
const dog = { name: "Buddy" };
dog.whatName = cat.whatName;
console.log(cat.whatName()); // Pipoy
console.log(dog.whatName()); // Buddy