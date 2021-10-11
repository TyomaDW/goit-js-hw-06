const categoriesRef = document.querySelector('#categories');
const classesRef = categoriesRef.children;
console.log(`Number of categories: ${classesRef.length}`);

const animalsRef = document.querySelector('.item');
console.log(`Category: ${animalsRef.firstElementChild.textContent}`);
console.log(
  `Elements: ${animalsRef.firstElementChild.nextElementSibling.children.length}`,
);

const productsRef = animalsRef.nextElementSibling;
console.log(`Category: ${productsRef.firstElementChild.textContent}`);
console.log(
  `Elements: ${productsRef.firstElementChild.nextElementSibling.children.length}`,
);

const technologiesRef = productsRef.nextElementSibling;
console.log(`Category: ${technologiesRef.firstElementChild.textContent}`);
console.log(
  `Elements: ${technologiesRef.firstElementChild.nextElementSibling.children.length}`,
);
