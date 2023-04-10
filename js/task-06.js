const refs = {
  input: document.querySelector("#validation-input"),
};

refs.input.addEventListener("blur", validationForLength);

function validationForLength() {
  const input = refs.input;
  if (Number(input.dataset.length) === input.value.length) {
    input.classList.remove("invalid");
    input.classList.add("valid");
    return;
  }
  input.classList.add("invalid");
  input.classList.remove("valid");
}
