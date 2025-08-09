// System 2
function makeYellow() {
  document.body.style.backgroundColor = "yellow";
}

// System 3 method 1

const makeBlue = document.getElementById("make-blue");
makeBlue.onclick = makeMethod;

function makeMethod() {
  document.body.style.backgroundColor = "blue";
}

// System 3 method 2
const makeGreen = document.getElementById("make-green");
makeGreen.onclick = function makeGreenBtn() {
  document.body.style.backgroundColor = "Green";
};

// System 4 method 1

const makePink = document.getElementById("make-pink");
makePink.addEventListener("click", pinkMethod);

function pinkMethod() {
  document.body.style.backgroundColor = "pink";
}

// System 4 method 2
const makePurple = document.getElementById("make-purple");
makePurple.addEventListener("click", function pinkMethod() {
  document.body.style.backgroundColor = "purple";
});
