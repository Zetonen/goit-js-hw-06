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

refs.gallery.insertAdjacentHTML("beforeend", createGalleryCards(images));

function createGalleryCards(elements) {
  const cards = [];
  elements.forEach((element) => {
    const item = `<li><img src=${element.url} alt=${element.alt}></li>`;
    cards.push(item);
  });
  console.log(cards);
  return cards;
}
