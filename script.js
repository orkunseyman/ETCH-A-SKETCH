const main = document.querySelector('#main');
const clear = document.querySelector('#clear');
let cell = [];
for (let i = 0; i < 399; i++) {

  cell[i] = document.createElement('div');
  cell[i].classList.add('cell');
  cell[i].style = 'background-color: rgba(255, 255, 255, 1)';
  cell[i].addEventListener('mouseover', function () {
    cell[i].style = `background-color: rgba(${Math.random() * 150 + 100},${Math.random() * 150 + 100},${Math.random() * 150 + 100},${Math.random() * 150 + 100})`;
  })
  main.appendChild(cell[i]);
}
clear.addEventListener('click', function () {
  for (let i = 0; i < 1500; i++) {
    cell[i].style = 'background-color: rgba(255, 255, 255, 1)';
  }
})

