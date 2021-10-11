const categoriesRef = document.querySelector('#categories');
console.log(
  'Number of categories:',
  categoriesRef.querySelectorAll('.item').length,
);

const itemRef = document.querySelectorAll('.item');
itemRef.forEach(item => {
  console.log('Category:', item.firstElementChild.textContent);
  console.log('Elements:', item.lastElementChild.children.length);
});
