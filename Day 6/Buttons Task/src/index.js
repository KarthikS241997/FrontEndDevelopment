import "./styles.css";

var button1 = document.getElementById("btn1");
var button2 = document.getElementById("btn2");
var button3 = document.getElementById("btn3");

var body = document.getElementById("body");

button1.addEventListener("click", function () {
  // body.style.backgroundColor = "red";
  body.classList.add("red");
});

button2.addEventListener("click", function () {
  // body.style.backgroundColor = "blue";
  body.classList.add("blue");
});

button3.addEventListener("click", function () {
  // body.style.backgroundColor = "green";
  body.classList.add("green");
});
