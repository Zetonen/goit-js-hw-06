const refs = {
  controls: document.querySelector("#controls"),
  boxes: document.querySelector("#boxes"),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
};

refs.createBtn.addEventListener("click", onBtnCreateClick);
refs.destroyBtn.addEventListener("click", destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const elements = [];
  let value = 30;
  for (let i = 0; i < amount; i += 1) {
    const element = document.createElement("div");
    element.style.backgroundColor = getRandomHexColor();
    element.style.width = `${value}px`;
    element.style.height = `${value}px`;
    elements.push(element);
    value += 10;
  }
  return elements;
}

function destroyBoxes() {
  refs.boxes.innerHTML = "";
}

function onBtnCreateClick() {
  destroyBoxes();
  refs.boxes.append(...createBoxes(refs.controls.firstElementChild.value));
}
