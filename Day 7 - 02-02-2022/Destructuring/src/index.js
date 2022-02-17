let array = [1, 2, 3, 4, 5, 6];

let [x, y, z] = array.slice(2, 5);
console.log("Destructuring Array elements ");
console.log(x, y, z);

let [a, , c] = array;

console.log(a, c);

const employee = {
  firstName: "Robert",
  lastName: "Downey",
  age: 25,
  sal: 10000
};
console.log("Destructuring object properties ");
let { firstName } = employee;
console.log(firstName);

let { firstName: fName, age: empAge } = employee;
console.log(fName);
console.log(empAge);

function vararg(x, y, ...args) {
  console.log("Prinintg the elements using rest operator ");
  console.log(x, y, args);
}
vararg(10, 20, 30, 40, 50, 60);

let arr1 = [1, 2, 3, 4, 5, 6];
let arr2 = [...arr1, 7, 8, 9];
console.log("Prinintg the elements using spread operator ");
console.log(arr2);
