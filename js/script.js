var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById('gradient');


function setGradient() {
      body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value}) `
}
const color1Fuc = () => {
setGradient();

};

const color2Fuc = () => {
 setGradient();
};
color1.addEventListener("input", color1Fuc);
color2.addEventListener("input", color2Fuc);
