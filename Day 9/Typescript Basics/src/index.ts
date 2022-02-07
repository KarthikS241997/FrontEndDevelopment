import "./styles.css";

let employee: {
  fname: string;
  lname: string;
} = {
  fname: "Alice",
  lname: "Bob"
};

console.log(employee);

/*Tuple*/
let data: [string, number];
data = ["skill", 20];

console.log(data);

let data2: [string, number, number?];
data2 = ["FrontEnd", 12, 1];
console.log(data2);

/*Any Type*/
let anytype: any;
anytype = "Example for AnyType data";
console.log(anytype);

function sum(a: number, b: number) {
  console.log("Addition using void:-", a + b);
}

sum(5, 5);

/*Enum */

enum browser {
  Chrome,
  Edge,
  Safari,
  Brave
}
console.log("First Element is", browser[0]);
console.log("All the elements..");
// for (let x in browser) {
//   console.log(x);
// }
