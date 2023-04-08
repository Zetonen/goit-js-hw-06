const refs = {
  form: document.querySelector(".login-form"),
};

refs.form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const elements = event.currentTarget.elements;
  const formData = new FormData(event.currentTarget);
  const objFormValues = {};

  if (!elements[0].value || !elements[1].value) {
    alert("всі поля повинні бути заповнені");
    return;
  }

  formData.forEach((value, name) => {
    objFormValues[name] = value;
  });
  console.log(objFormValues);
  event.currentTarget.reset();
}
