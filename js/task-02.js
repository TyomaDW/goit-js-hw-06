const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const makeIngredientListItem = (ingredients = []) => {
  const listRef = document.querySelector('#ingredients');
  ingredients.forEach(ingredien => {
    const itemRef = document.createElement('li');
    itemRef.textContent = ingredien;
    itemRef.classList.add('item');
    listRef.append(itemRef);
  });
};
makeIngredientListItem(ingredients);
