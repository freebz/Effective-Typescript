// 아이템 54 객체를 순회하는 노하우

const obj = {
  one: 'uno',
  two: 'dos',
  three: 'tres',
};
for (const k in obj) {
  const v = obj[k];
         // ~~~~~~ obj에 인덱스 시그니처가 없기 때문에
         //        엘리먼트는 암시적으로 'any' 타입입니다.
}



const obj = { /* ... */ };
// const obj: {
//   one: string;
//   two: string;
//   three: string;
// }
for (const k in obj) {  // const k: string
  // ...
}



let k: keyof typeof obj;  // "one" | "two" | "three" 타입
for (k in obj) {
  const v = obj[k];       // 정상
}



interface ABC {
  a: string;
  b: string;
  c: string;
}

function foo(abc: ABC) {
  for (const k in abc) {  // const k: string
    const v = abc[k];
           // ~~~~~~ 'ABC' 타입에 인덱스 시그니처가 없기 때문에
           //        엘리먼트는 암시적으로 'any'가 됩니다.
  }
}



const x = {a: 'a', b: 'b', c: 2, d: new Date()};
foo(x);  // 정상



function foo(abc: ABC) {
  let k: keyof ABC;
  for (k in abc) {     // let k: "a" | "b" | "c"
    const v = abc[k];  // string | number 타입
  }
}



function foo(abc: ABC) {
  for (const [k, v] of Object.entries(abc)) {
    k  // string 타입
    v  // any 타입
  }
}



object.prototype.z = 3;  // 제발 이렇게 하지 맙시다!
const obj = {x: 1, y: 2};
for (const k in obj) { console.log(k); }
// x
// y
// z
