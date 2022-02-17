import "./styles.css";

/*if-else*/
let num: number = 10;
if (isNaN(num)) {
  console.log(`${num} is not a number`);
} else {
  console.log(`${num} is a number`);
}

/*Return Type*/
function multiply(a: number, b: number): number {
  return a * b;
}
console.log(multiply(5, 5));

let divide: (a: number, b: number, c?: number) => number;
divide = function (a, b) {
  return a / b;
};
console.log(divide(100, 0));

function totalsal(...numbers: number[]): number {
  let count = 0;
  numbers.forEach((num) => count + num);
  return count;
}
console.log(totalsal(10, 20, 30, 40));
