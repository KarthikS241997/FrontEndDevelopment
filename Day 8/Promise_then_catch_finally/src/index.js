import "./styles.css";
let num = 30;
let promexam = new Promise(function (resolve, reject) {
  if (num % 2 === 0) {
    resolve("Fullfilled");
  } else {
    reject("Rejected");
  }
});

function printEven() {
  console.log("The number is even");
}
function printOdd() {
  console.log("The number is Odd");
}

function fnl() {
  console.log("This is the end of implementation");
}

promexam
  .then(function promsuccess(result) {
    console.log("Wait for 3 secs to see the result");
    setTimeout(printEven, 3000);
  })
  .catch(function err(result) {
    console.log("Wait for 3 secs to see the result");
    setTimeout(printOdd, 3000);
  })
  .finally(function final() {
    setTimeout(fnl, 4000);
  });

console.log(promexam);

let newProm = new Promise(function (resolve, reject) {
  setTimeout(function () {
    reject("Promise is not resolved");
  }, 4000);
});

async function asynfunc() {
  let result = await newProm;
  console.log(result);
  console.log("Hello");
}

asynfunc();
