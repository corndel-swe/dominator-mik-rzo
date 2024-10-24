// get a reference to the .box element and log it to the console
const box = document.getElementsByClassName("box")[0];

// add an event listener to the .box element that toggles the .left class
box.addEventListener("click", () => {
  box.classList.toggle("left");
})

// get a reference to #button, #txt and #output
const button = document.getElementById("button");
const inputText = document.getElementById("txt");
const outputText = document.getElementById("output");

// add an event listener to the #button that changes the text in #output to the lowercase value of #txt
button.addEventListener("click", () => {
  outputText.textContent = inputText.value.toLowerCase();
})