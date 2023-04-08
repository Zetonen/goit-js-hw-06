const refs = {
  range: document.querySelector("#font-size-control"),
  text: document.querySelector("#text"),
};

refs.text.style.fontSize = `${refs.range.value}px`

const draggingTheSlider = function () {
    console.log(refs.range.value);
    refs.text.style.fontSize = `${refs.range.value}px`
};

refs.range.addEventListener("input", draggingTheSlider);
