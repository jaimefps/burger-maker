
// create patty
// create food container 
// append patty to container
// induce padding transition

const burgCont = document.getElementById('burger-container');
burgCont.style.display = 'flex';
burgCont.style.flexDirection = 'column';
burgCont.style.alignContent = 'baseline;'
burgCont.style.justifyContent = 'flex-end';
burgCont.style.height='200px';
burgCont.style.width='200px';
burgCont.style.border='1px solid';
burgCont.style.backgroundColor='grey';
burgCont.style.overflow = 'scroll';


function appendToBtns (node) {
  document.getElementById('buttons-container').append(node);
}

function prependToBurg(node) {
  document.getElementById('burger-container').prepend(node);
}

function createTransContainer () {
  const transContainer = document.createElement('div');
  transContainer.classList.add('cushined');
  transContainer.style.cssFloat = 'bottom';
  setTimeout(() => transContainer.classList.add('flattened'), 500);
  return transContainer;
}

function createBun() {
  const bun = document.createElement('div');
  bun.classList.add('bun');
  return bun;
}

function createBottomBun () {
  const bun = createBun();
  bun.classList.add('bun-bottom');
  return bun;
}

function createTopBun () {
  const bun = createBun();
  bun.classList.add('bun-top');
  return bun;
}

function createPatty () {
  const meatPatty = document.createElement('div');
  meatPatty.classList.add('patty');
  return meatPatty;
}

function createPlate() {
  const node = document.createElement('div');
  node.classList.add('plate')
  return node;
}

const addPattyBtn = document.createElement('button');
addPattyBtn.innerText = 'add patty';
addPattyBtn.classList.add('btn');
addPattyBtn.onclick = function() {
  const container = createTransContainer();
  container.append(createPatty());
  prependToBurg(container);
}

const addBunBottom = document.createElement('button');
addBunBottom.innerText = 'add bun bottom';
addBunBottom.classList.add('btn');
addBunBottom.onclick = function() {
  const container = createTransContainer();
  container.append(createBottomBun());
  prependToBurg(container);
}

const addBunTop = document.createElement('button');
addBunTop.innerText = 'add top bottom';
addBunTop.classList.add('btn');
addBunTop.onclick = function() {
  const container = createTransContainer();
  container.append(createTopBun());
  prependToBurg(container);
}

const cleanPlate = document.createElement('button');
cleanPlate.innerText = 'clean plate';
cleanPlate.classList.add('btn');
cleanPlate.classList.add('btn-delete');
cleanPlate.onclick = function() {
  const burgCont = document.getElementById('burger-container');
  burgCont.innerHTML = null;
  prependToBurg(createPlate());
}


appendToBtns(addBunBottom)
appendToBtns(addPattyBtn)
appendToBtns(addBunTop)
appendToBtns(cleanPlate)

prependToBurg(createPlate())