const categoriesEl = document.querySelector('#categories');
console.log(
  'Number of categories:',
  categoriesEl.querySelectorAll('.item').length,
);

const itemEl = document.querySelectorAll('.item');
itemEl.forEach(item => {
  console.log('Category:', item.firstElementChild.textContent);
  console.log('Elements:', item.lastElementChild.children.length);
});
