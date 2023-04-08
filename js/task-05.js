const refs = {
  input: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),
};

const handleInput = function () {
  const output = refs.output;
  if (!refs.input.value) {
    output.textContent = "Anonymous";
    return;
  }
  output.textContent = refs.input.value;
};

refs.input.addEventListener("input", handleInput);
