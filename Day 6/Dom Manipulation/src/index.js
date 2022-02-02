var parentEl = document.getElementById("app");
var newEl = document.createElement("li");

newEl.textContent = "First Line is replaced";

parentEl.replaceChild(newEl, parentEl.firstElementChild);
parentEl.removeChild(parentEl.lastElementChild);

console.log(newEl);
