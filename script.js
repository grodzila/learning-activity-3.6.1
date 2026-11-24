const box = document.getElementById("boxDiv");
const countText = document.getElementById("pCount");
const resetButton = document.getElementById("btn");

let count = 0;

function updateCounter() {
  const unit = count === 1 ? "Time" : "Times";
  countText.textContent = `You Have Clicked ${count} ${unit}`;
}

box.addEventListener("click", function () {
  count++;
  updateCounter();
});

resetButton.addEventListener("click", function () {
  count = 0;
  updateCounter();
});

updateCounter();