let arr1 = [1, 2, 3, 4, 5, 6];
let Map = arr1.map((item) => item * 5);

let FilterEven = arr1.filter((item) => item % 2 === 0);

let FilterOdd = arr1.filter((item) => item % 2 !== 0);

let Reduce = arr1.reduce((result, item) => result + item, 0);

console.log("map : " + Map);
console.log("filter Even Numbers : " + FilterEven);
console.log("filter Odd Numbers : " + FilterOdd);
console.log("reduce : " + Reduce);


const Employee = {
  firstName: "Tom",
  lastName: "Harry",
  age: 25,
  sal: 100000
};

for (let key in Employee) {
  console.log(Employee[key]);
  console.log(Employee.sal);
}