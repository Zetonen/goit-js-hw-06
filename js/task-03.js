const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const refs = {
  gallery: document.querySelector(".gallery"),
};

const createGalleryCards = function (elements) {
  const cards = [];
  elements.forEach((element) => {
    const item = document.createElement("li");
    const img = `<img src=${element.url} alt=${element.alt}>`;
    item.insertAdjacentHTML("beforeend", img);
    console.log(item);
    cards.push(item);
  });
  console.log(cards);
  return cards;
};

refs.gallery.append(...createGalleryCards(images))
