import "./styles.css";

let num = 10;

function printing() {
  console.log("Is even");
}

function printingodd() {
  console.log("is odd");
}

let promexam = new Promise(function (resolve, reject) {
  if (num % 2 === 0) {
    setTimeout(printing, 4000);
    resolve("printing");
  } else {
    setTimeout(printingodd, 4000);
    reject("printing");
  }
});
console.log(promexam);
