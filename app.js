let x = '';
let y = '';
let sign = '';
let finish = false;

const digit = ['0','1','2','3','4','5','6','7','8','9','.'];
const action = ['-','+','X','/']

const screen = document.querySelector('.calc__screen p');

const clearAll = (text) => {
  x = '';
  y = '';
  sign = '';
  finish = false;
  screen.textContent = text ?? 0;
};

document.querySelector('.calc__buttons').onclick = (e) => {
  if(!e.target.classList.contains('btn')) return;
  if(e.target.classList.contains('ac')) return clearAll();
  
  screen.textContent = '';
  const key = e.target.textContent;

  if(digit.includes(key)) {
    if(y === '' && sign === '') {
      x += key;
      screen.textContent = x;
    } else if (x !== '' && y !== '' && finish) {
      y = key;
      finish = false;
      screen.textContent = y;
    } else {
      y += key;
      screen.textContent = y;
    }
  }
  if(action.includes(key)) {
    sign = key;
    screen.textContent = sign;
    return console.table([x,y,sign]);
  };
  if(key === '=') {
    if(y === '') y = x;
    switch(sign) {
      case '+':
        x = (+x) + (+y);
        break;
      case '-':
        x = x - y;
        break;
      case 'X':
        x = x * y;
        break;
      case '/':
        if(y === '0') {
          return clearAll('Error');
        }
        x = x / y;
        break;
    }
    finish = true;
    screen.textContent = x;
    console.table([x,y,sign]);
  }
}






