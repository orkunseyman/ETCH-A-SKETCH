const main = document.querySelector('#main');
let cell = [];
for(let i = 0; i<1500; i++) {
    
    cell[i] = document.createElement('div');
    cell[i].classList.add('cell');
    
    cell[i].style = 'background-color: rgba(255, 255, 255, 1)';
     //redundant, but deals with override of css styling
     cell[i].addEventListener('mouseover',function () {
        cell[i].style = `background-color: rgba(${Math.random()*150+100},${Math.random()*150+100},${Math.random()*150+100},${Math.random()*150+100})`;
      })
    main.appendChild(cell[i]);
  }

   