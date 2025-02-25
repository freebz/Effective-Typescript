// 아이템 22 타입 좁히기

const el = document.getElementById('foo'); // 타입이 HTMLElement | null
if (el) {
  el				           // 타입이 HTMLElement
  el.innerHTML = 'Party Time'.blink();
} else {
  el				           // 타입이 null
  alert('No element #foo');
}



const el = document.getElementById('foo'); // 타입이 HTMLElement | null
if (!el) throw new Error('Unable to find #foo');
el;				           // 이제 타입은 HTMLElement
el.innerHTML = 'Party Time'.blink();



function contains(text: string, search: string|RegExp) {
  if (search instanceof RegExp) {
    search  // 타입이 RegExp
    return !!search.exec(text);
  }
  search    // 타입이 string
  return text.includes(search);
}



interface A { a: number }
interface B { b: number }
function pickAB(ab: A | B) {
  if ('a' in ab) {
    ab  // 타입이 A
  } else {
    ab  // 타입이 B
  }
  ab    // 타입이 A | B
}



function contains(text: string, terms: string|string[]) {
  const termList = Array.isArray(terms) ? terms : [terms];
  termList  // 타입이 string[]
  // ...
}




const el = document.getElementById('foo'); // 타입이 HTMLElement | null
if (typeof el === 'object') {
  el;  // 타입이 HTMLElement | null
}



function foo(x?: number|string|null) {
  if (!x) {
    x;  // 타입이 string | number | null | undefined
  }
}



interface UploadEvent { type: 'upload'; filename: string; contents: string }
interface DownloadEvent { type: 'download'; filename: string; }
type AppEvent = UploadEvent | DownloadEvent;
function handleEvent(e: AppEvent) {
  switch (e.type) {
    case 'download':
      e  // 타입이 DownloadEvent
      break;
    case 'upload':
      e  // 타입이 UploadEvent
      break;
  }
}



function isInputElement(el: HTMLElement): el is HTMLInputElement {
  return 'value' in el;
}

function getElementContent(el: HTMLElement) {
  if (isInputElement(el)) {
    el;  // 타입이 HTMLInputElement
    return el.value;
  }
  el;    // 타입이 HTMLElement
  return el.textContent;
}



const jackson5 = ['Jackie', 'Tito', 'Jermaine', 'Marion', 'Michael'];
const numbers = ['Janet', 'Michael'].map(
  who => jackson5.find(n => n === who)
);  // 타입이 (string | undefined)[]



const members = ['Janet', 'Michael'].map(
  who => jackson5.find(n => n === who)
).filter(who => who !== undefined);  // 타입이 (string | undefined)[]



function isDefined<T>(x: T | undefined): x is T {
  return x !== undefined;
}
const members = ['Janet', 'Michael'].map(
  who => jackson5.find(n => n === who)
).filter(isDefined);  // 타입이 string[]
