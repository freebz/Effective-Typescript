// 아이템 57 소스맵을 사용하여 타입스크립트 디버깅하기

function addCounter(el: HTMLElement) {
  let clickCount = 0;
  const button = document.createElement('button');
  button.textContent = 'Click me';
  button.addEventListener('click', () => {
    clickCount++;
    button.textContent = `Click me (${clickCount})`;
  });
  el.appendChild(button);
}

addCounter(document.body);



function addCounter(el: HTMLElement) {
  let clickCount = 0;
  const triviaEl = document.createElement('p');
  const button = document.createElement('button');
  button.textContent = 'Click me';
  button.addEventListener('click', async () => {
    clickCount++;
    const response = await fetch(`http://numbersapi.com/${clickCount}`);
    const trivia = await response.text();
    triviaEl.textContent = trivia;
    button.textContent = `Click me (${clickCount})`;
  });
  el.appendChild(triviaEl);
  el.appendChild(button);
}



// tsconfig.json
{
  "compilerOptions": {
    "sourceMap": true
  }
}
