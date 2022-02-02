var parentEl = document.getElementById("app");
var newEl = document.createElement("li");
newEl.textContent = "First is replaced";
parentEl.replaceChild(newEl, parentEl.firstElementChild);
parentEl.removeChild(parentEl.lastElementChild);

var newEle = document.createElement("li");
newEle.textContent = "Last";
parentEl.appendChild(newEle);

parentEl.setAttribute("class", "listTree");
parentEl.classList.add("newListTree");

console.log(parentEl.getAttribute("id"));
console.log(parentEl.hasAttribute("id"));
