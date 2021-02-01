var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var textColor = document.querySelector(".textColor");
var h1 = document.querySelector("h1");
var h2 = document.querySelector("h2");
var body = document.getElementById("gradient");

function setGradient() {
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value}) `;
  css.textContent = body.style.background + ";"
}

function setTextColor() {
  h1.style.color =textColor.value;
  h2.style.color =textColor.value;
}


color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
textColor.addEventListener("input", setTextColor);
