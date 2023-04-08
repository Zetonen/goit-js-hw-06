const refs = {
  btnChangeColor: document.querySelector('.change-color'),
  outputColor: document.querySelector('span.color')
}

refs.btnChangeColor.addEventListener('click', onBtnChangeColorClicl)

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onBtnChangeColorClicl(event){
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  refs.outputColor.textContent = color;
}

