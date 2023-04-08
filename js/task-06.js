const refs = {
  input: document.querySelector("#validation-input"),
};

const validationForLength = function () {
  const input = refs.input;
  if (input.dataset.length <= input.value.length) {
    input.classList.add("invalid");
    input.classList.remove("valid");
    return;
  }
  input.classList.remove("invalid");
  input.classList.add("valid");
};

refs.input.addEventListener("blur", validationForLength);
