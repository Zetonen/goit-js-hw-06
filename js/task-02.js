const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const refs = {
  ingredients: document.querySelector("#ingredients"),
};

const createItemIngredients = function (elements, nameItem) {
  const items = [];
  elements.forEach((element) => {
    const item = document.createElement("li");
    item.textContent = element;
    item.classList.add(nameItem);
    items.push(item);
  });
  return items;
};

refs.ingredients.append(...createItemIngredients(ingredients, "item"));
