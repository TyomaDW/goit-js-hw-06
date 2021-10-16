const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const makeIngredientListItem = document.querySelector('#ingredients');
const createListEl = array => {
  return ingredients.map(ingredient => {
    const listEl = document.createElement('li');
    listEl.classList.add('item');
    listEl.textContent = ingredient;
    return listEl;
  });
};
createListEl(ingredients);
makeIngredientListItem.append(...createListEl(ingredients));
