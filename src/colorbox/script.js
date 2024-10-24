// add an event listener to the .box element that toggles the .red class
const box = document.getElementsByClassName("box")[0]

box.addEventListener("click", () => {
  box.classList.toggle("red")
})