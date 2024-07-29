// 아이템 41 any의 진화를 이해하기

function range(start, limit) {
  const out = [];
  for (let i = start; i < limit; i++) {
    out.push(i);
  }
  return out;
}



function range(start: number, limit: number) {
  const out = [];
  for (let i = start; i < limit; i++) {
    out.push(i);
  }
  return out;  // 반환 타입이 number[]로 추론됨.
}



function range(start: number, limit: number) {
  const out = [];  // 타입이 any[]
  for (let i = start; i < limit; i++) {
    out.push(i);   // out의 타입이 any[]
  }
  return out;      // 타입이 number[]
}



const result = [];  // 타입이 any[]
result.push('a');
result              // 타입이 string[]
result.push(1);
result              // 타입이 (string | number)[]



let val;   // 타입이 any
if (Math.random() < 0.5){
  val = /hello/;
  val      // 타입이 RegExp
} else {
  val = 12;
  val      // 타입이 number
}
val        // 타입이 number | RegExp



let val = null;  // 타입이 any
try {
  somethingDangerous();
  val = 12;
  val            // 타입이 number
} catch (e) {
  console.warn('alas!');
}
val              // 타입이 number | null



let val: any;  // 타입이 any
if (Math.random() < 0.5) {
  val = /hello/;
  val          // 타입이 any
} else {
  val = 12;
  val          // 타입이 any
}
val            // 타입이 any



function range(start: number, limit: number) {
  const out = [];
  //    ~~~ 'out' 변수는 형식을 확인할 수 없는 경우
  //        일부 위치에서 암시적으로 'any[]' 형식입니다.
  if (start === limit) {
    return out;
    //     ~~~ 'out' 변수에는 암시적으로 'any[]' 형식이 포함됩니다.
  }
  for (let i = start; i < limit; i++) {
    out.push(i);
  }
  return out;
}



function makeSquares(start: number, limit: number) {
  const out = [];
     // ~~~ 'out' 변수는 일부 위치에서 암시적으로 'any[]' 형식입니다.
  range(start, limit).forEach(i => {
    out.push(i * i);
  });
  return out;
      // ~~~ 'out' 변수에는 암시적으로 'any[]' 형식이 포함됩니다.
}
