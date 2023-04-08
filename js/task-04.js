const refs = {
  count: document.querySelector("#value"),
  decrement: document.querySelector('[data-action="decrement"'),
  increment: document.querySelector('[data-action="increment"'),
};

let counterValue = 0;

const onBtnDecrement = function () {
  counterValue -= 1;
  refs.count.textContent = counterValue;
  //refs.count.textContent = Number(refs.count.textContent) - 1;
};

const onBtnIncrement = function () {
    counterValue += 1;
    refs.count.textContent = counterValue;
  // refs.count.textContent = Number(refs.count.textContent) + 1;
};

refs.decrement.addEventListener("click", onBtnDecrement);
refs.increment.addEventListener("click", onBtnIncrement);
