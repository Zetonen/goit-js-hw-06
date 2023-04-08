const refs = {
  categories: document.querySelectorAll("#categories > .item"),
};

console.log(`Number of categories: ${refs.categories.length}`);

const displayCardInConsole = function (cards) {
  cards.forEach((card) => {
    console.log(`Category: ${card.children[0].textContent}`);
    const cardElements = card.children[1].querySelectorAll("li");
    console.log(`Elements: ${cardElements.length}`);
  });
};
displayCardInConsole(refs.categories);
