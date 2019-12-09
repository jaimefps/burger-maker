/**
 * Populate Screen:
 */
function addToButtonsBox (node) {
  document.getElementById('buttons-container').append(node);
}

function addToBurgerBox(node) {
  document.getElementById('burger-container').prepend(node);
}

/**
 * Create Burger Elements:
 */
function createTransitionContainer () {
  const transContainer = document.createElement('div');
  transContainer.classList.add('cushined');
  transContainer.style.cssFloat = 'bottom';
  setTimeout(() => transContainer.classList.add('flattened'), 50);
  return transContainer;
}

function createBun() {
  const bun = document.createElement('div');
  bun.classList.add('bun');
  return bun;
}

function createBunBottom () {
  const bun = createBun();
  bun.classList.add('bun-bottom');
  return bun;
}

function createBunTop () {
  const bun = createBun();
  bun.classList.add('bun-top');
  return bun;
}

function createPatty () {
  const meatPatty = document.createElement('div');
  meatPatty.classList.add('patty');
  return meatPatty;
}

function createCheese() {
  const node = document.createElement('div');
  node.classList.add('cheese');
  return node;
}

function createPlate() {
  const node = document.createElement('div');
  node.classList.add('plate')
  return node;
}

/**
 * Create Buttons:
 */
const pattyBtn = document.createElement('button');
pattyBtn.innerText = 'Patty';
pattyBtn.classList.add('btn');
pattyBtn.onclick = function() {
  const container = createTransitionContainer();
  container.append(createPatty());
  addToBurgerBox(container);
}

const cheeseBtn = document.createElement('button');
cheeseBtn.innerText = 'Cheese';
cheeseBtn.classList.add('btn');
cheeseBtn.onclick = function() {
  const container = createTransitionContainer();
  container.append(createCheese());
  addToBurgerBox(container);
}

const bunBottomBtn = document.createElement('button');
bunBottomBtn.innerText = 'Bottom Bun';
bunBottomBtn.classList.add('btn');
bunBottomBtn.onclick = function() {
  const container = createTransitionContainer();
  container.append(createBunBottom());
  addToBurgerBox(container);
}

const bunTopBtn = document.createElement('button');
bunTopBtn.innerText = 'Top Bun';
bunTopBtn.classList.add('btn');
bunTopBtn.onclick = function() {
  const container = createTransitionContainer();
  container.append(createBunTop());
  addToBurgerBox(container);
}

const cleanPlateBtn = document.createElement('button');
cleanPlateBtn.innerText = 'Clean Plate';
cleanPlateBtn.classList.add('btn');
cleanPlateBtn.classList.add('btn-delete');
cleanPlateBtn.onclick = function() {
  const burgCont = document.getElementById('burger-container');
  burgCont.innerHTML = null;
  addToBurgerBox(createPlate());
}

/**
 * Add items on screen load:
 */
addToButtonsBox(bunBottomBtn);
addToButtonsBox(pattyBtn);
addToButtonsBox(cheeseBtn);
addToButtonsBox(bunTopBtn);
addToButtonsBox(cleanPlateBtn);

addToBurgerBox(createPlate());