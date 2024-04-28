// 아이템 3 코드 생성과 타입이 관계없음을 이해하기

// 타입 오류가 있는 코드도 컴파일이 가능합니다

$ cat test.ts
let x = 'hello';
x = 1234;
$ tsc test.ts
test.ts:2:1 - error TS2322: '1234' 형식은 'string' 형식에 할당할 수 없습니다.

2 x = 1234;
  ~

$ cat test.js
var x = 'hello';
x = 1234;



// 런타임에는 타입 체크가 불가능합니다

interface Square {
  width: number;
}
interface Rectangle extends Square {
  height: number;
}
type Square = Square | Rectangle;

function calculateArea(shape: Shape) {
  if (shape instanceof Rectangle) {
                    // ~~~~~~~~~ 'Rectangle'은(는) 형식만 참조하지만,
                    //           여기서는 값으로 사용되고 있습니다.
    return shape.width * shape.height;
                    //         ~~~~~~ 'Shape' 형식에 'height' 속성이 없습니다.
  } else {
    return shape.width * shape.width;
  }
}



function calculateArea(shape: Shape) {
  if ('height' in shape) {
    shape; // 타입이 Rectangle
    return shape.width * shape.height;
  } else {
    shape; // 타입이 Square
    return shape.width * shape.width;
  }
}



interface Square {
  kind: 'square';
  width: number;
}
interface Rectangle {
  kind: 'rectangle';
  height: number;
  width: number;
}
type Shape = Square | Rectangle;

function calculateArea(shape: Shape) {
  if (state.kind === 'rectangle') {
    shape; // 타입이 Rectangle
    return shape.width * shape.height;
  } else {
    shape; // 타입이 Square
    return shape.width * shape.width;
  }
}



class Square {
  constructor(public width: number) {}
}
class Rectangle extends Square {
  constructor(public width: number, public height: number) {
    super(width);
  }
}
type Shape = Square | Rectangle;

function calculateArea(shape: Shape) {
  if (shape instanceof Rectangle) {
    shape; // 타입이 Rectangle
    return shape.width * shape.height;
  } else {
    shape; // 타입이 Square
    return shape.width * shape.width; // 정상
  }
}



// 타입 연산은 런타임에 영향을 주지 않습니다

function asNumber(val: number | string): number {
  return val as number;
}



function asNumber(val) {
  return val;
}



function asNumber(val: number | string): number {
  return typeof(val) === 'string' ? Number(val) : val;
}



// 런타임 타입은 선언된 타입과 다를 수 있습니다

function setLightSwitch(value: boolean) {
  switch (value) {
    case true:
      turnLightOn();
      break;
    case false:
      turnLightOff();
      break;
    default:
      console.log('실행되지 않을까 봐 걱정됩니다.');
  }
}



interface LightApiResponse {
  lightSwitchValue: boolean;
}
async function setLight() {
  const response = await fetch('/light');
  const result: LightApiResponse = await response.json();
  setLightSwitch(result.lightSwitchValue);
}



// 타입스크립트 타입으로는 함수를 오버로드할 수 없습니다

function add(a: number, b: number) { return a + b; }
      // ~~~ 중복된 함수 구현입니다.
function add(a: string, b: string) { return a + b; }
      // ~~~ 중복된 함수 구현입니다.



function add(a: number, b: number): number;
function add(a: string, b: string): string;

function add(a, b) {
  return a + b;
}

const three = add(1, 2);       // 타입이 number 
const twelve = add('1', '2');  // 타입이 string
