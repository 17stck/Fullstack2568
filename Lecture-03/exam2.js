let values1 = ['Apple', 1, false];
let values2 = ['Fries', 2, true, 'Apple'];
let values3 = ['Mars', 9, 'Apple'];


for (let val of values1) {
    if (values2.includes(val) && values3.includes(val)) {
        console.log(val);
    }
}