const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);

checkBoxes(); // shows the first couple of boxes

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4.5;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top; //returns info about the position relative to the viewport
    if (boxTop < triggerBottom) {
      // top of the next box is less than the triggerBottom (litte less than the entire viewport)
      box.classList.add("show");
    } else {
      box.classList.remove("show"); // scrolling up
    }
  });
}
