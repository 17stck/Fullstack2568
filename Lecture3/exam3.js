// ex1.1
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

//ex1.2
const scores = [85, 92, 78, 95, 88];
let sum = 0;
for (const score of scores) {
  sum += score;
}
console.log('Total score:', sum);
