// 아이템 58 모던 자바스크립트로 작성하기

// ECMAScript 모듈 사용하기



// CommonJS
// a.js
const b = require('./b');
console.log(b.name);

// b.js
const name = 'Module B';
module.exports = {name};



// ECMAScript module
// a.ts
import * as b from './b';
console.log(b.name);

// b.ts
export const name = 'Module B';



// 프로토타입 대신 클래스 사용하기

function Person(first, last) {
  this.first = first;
  this.last = last;
}

Person.prototype.getName = function() {
  return this.first + ' ' + this.last;
}

const marie = new Person('Marie', 'Curie');
const personName = marie.getName();



class Person {
  first: string;
  last: string;

  constructor(first: string, last: string) {
    this.first = first;
    this.last = last;
  }

  getName() {
    return this.first + ' ' + this.last;
  }
}

const marie = new Person('Marie', 'Curie');
const personName = marie.getName();



// var 대신 let/const 사용하기

function foo() {
  bar();
  function bar() {
    console.log('hello');
  }
}



// for(;;) 대신 for-of 또는 배열 메서드 사용하기

for (var i = 0; i < array.length; i++) {
  const el = array[i];
  // ...
}



for (const el of array) {
  // ...
}



array.forEach((el, i) => {
  // ...
});



// 함수 표현식보다 화살표 함수 사용하기

class Foo {
  method() {
    console.log(this);
    [1, 2].forEach(function(i) {
      console.log(this);
    });
  }
}
const f = new Foo();
f.method();
// strict 모드에서 Foo, undefined, undefined를 출력합니다.
// non-strict 모드에서 Foo, window, window (!)를 출력합니다.



class Foo {
  method() {
    console.log(this);
    [1, 2].forEach(i => {
      console.log(this);
    });
  }
}
const f = new Foo();
f.method();
// 항상 Foo, Foo, Foo을 출력합니다.



// 단축 객체 표현과 구조 분해 할당 사용하기

const x = 1, y = 2, z = 3;
const pt = {
  x: x,
  y: y,
  z: z
};



const x = 1, y = 2, z = 3;
const pt = { x, y, z };



['A', 'B', 'C'].map((char, idx) => ({char, idx}));
// ['{ char: 'A', idx: 0 }, { char: 'B', idx: 1 }, { char: 'C', idx: 2 } ]



const obj = {
  onClickLong: function(e) {
    // ...
  },
  onClickCompact(e) {
    // ...
  }
};



const props = obj.props;
const a = props.a;
const b = props.b;



const {props} = obj;
const {a, b} = props;



const {props: {a, b}} = obj;



let {a} = obj.props;
if (a === undefined) a = 'default';



const {a = 'default'} = obj.props;



const point = [1, 2, 3];
const [x, y, z] = point;
const [, a, b] = point;  // 첫 번째 요소 무시



const points = [
  [1, 2, 3],
  [4, 5, 6],
];
points.forEach(([x, y, z]) => console.log(x + y + z));
// 6, 15을 출력합니다.



// 함수 매개변수 기본값 사용하기

function log2(a, b) {
  console.log(a, b);
}
log2();
// undefined, undefined



function parseNum(str, base) {
  base = base || 10;
  return parseInt(str, base);
}



function parseNum(str, base=10) {
  return parseInt(str, base);
}



// 저수준 프로미스나 콜백 대신 async/await 사용하기

function getJSON(url: string) {
  return fetch(url).then(response => response.json());
}
function getJSONCallback(url: string, cb: (result: unknown) => void) {
  // ...
}



async function getJSON(url: string) {
  const response = await fetch(url);
  return response.json();
}



// 연관 배열에 객체 대신 Map과 Set 사용하기

function countWords(text: string) {
  const counts: {[word: string]: number) = {};
  for (const word of text.split(/[\s,.]+/)) {
    consts[word] = 1 + (consts[word] || 0);
  }
  return consts;
}



console.log(countWords('Objects have a constructor'));
// {
//   Objests: 1,
//   have: 1,
//   a: 1,
//   constructor: "1function Object() { [native code] }"
// }



function countWordsMap(text: string) {
  const counts = new Map<string, number>();
  for (const word of text.split(/[\s,.]+/)) {
    counts.set(word, 1 + (counts.get(word) || 0));
  }
  return counts;
}



// 타입스크립트에 use strict 넣지 않기

'use strict';
function foo() {
  x = 10;  // strict 모드에서는 오류, non-strict 모드에서는 전역 선언
}
