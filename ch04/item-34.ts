// 아이템 34 부정확한 타입보다는 미완성 타입을 사용하기

interface Point {
  type: 'Point';
  coordinates: number[];
}
interface LineString {
  type: 'LineString';
  coordinates: number[][];
}
interface Polygon {
  type: 'Polygon';
  coordinates: number[][][];
}
type Geometry = Point | LineString | Polygon;  // 다른 것들도 추가될 수 있습니다.



type GeoPosition = [number, number];
interface Point {
  type: 'Point';
  coordinates: GeoPosition;
}
// ...



12
"red"
["+", 1, 2]			        // 3
["/", 20, 2]			        // 10
["case", [">", 20, 10], "red", "blue"]  // "red"
["rgb", 255, 0, 127]			// "#FF007F"



type Expression1 = any;
type Expression2 = number | string | any[];



const tests: Expression2[] = [
  10,
  "red"
  true,
//~~~~ 'true' 형식은 'Expression2' 형식에 할당할 수 없습니다.
  ["+", 10, 5],
  ["case", [">", 20, 10], "red", "blue", "green"],  // 값이 너무 많습니다.
  ["**", 2, 31],           // "**"는 함수가 아니므로 오류가 발생해야 합니다.
  ["rgb", 255, 128, 64],
  ["rgb", 255, 0, 127, 0]  // 값이 너무 많습니다.
];



type FnName = '+' | '-' | '*' | '/' | '>' | '<' | 'case' | 'rgb';
type CallExpression = [FnName, ...any[]];
type Expression3 = number | string | CallExpression;

const tests: Expression3[] = [
  10,
  "red",
  true,
//~~~~ 'true' 형식은 'Expression3' 형식에 할당할 수 없습니다.
  ["+", 10, 5],
  ["case", [">", 20, 10], "red", "blue", "green"],
  ["*", 2, 31],
// ~~~~~~~~~~ '"**"' 형식은 'FnName' 형식에 할당할 수 없습니다.
  ["rgb", 255, 128, 64]
];



type Expression4 = number | string | CallExpression;

type CallExpression = MathCall | CaseCall | RGBCall;

interface MathCall {
  0: '+' | '-' | '/' | '*' | '>' | '<';
  1: Expression4;
  2: Expression4;
  length: 3;
}

interface CaseCall {
  0: 'case';
  1: Expression4;
  2: Expression4;
  3: Expression4;
  length: 4 | 6 | 8 | 10 | 12 | 14 | 16 // 등등
}

interface RGBCall {
  0: 'rgb';
  1: Expression4;
  2: Expression4;
  3: Expression4;
  length: 4;
}

const tests: Expression4[] = [
  10,
  "red",
  true,
//~~~~ 'true' 형식은 'Expression4' 형식에 할당할 수 없습니다.
  ["+", 10, 5],
  ["case", [">", 20, 10], "red", "blue", "green"],
        // ~~~~~~~~~~~~~
        // '["case", [">", ...], ...]' 형식은 'string' 형식에 할당할 수 없습니다.
  ["**", 2, 31],
      // ~  ~~ 'number' 형식은 'string' 형식에 할당할 수 없습니다.
  ["rgb", 255, 128, 64],
  ["rgb", 255, 128, 64, 73]
       // ~~~  ~~~  ~~  ~~ 'number' 형식은 'string' 형식에 할당할 수 없습니다.
];



const okExpressions: Expression4[] = [
  ['-', 12],
     // ~~ 'number' 형식은 'string' 형식에 할당할 수 없습니다.
  ['+', 1, 2, 3],
     // ~  ~  ~ 'number' 형식은 'string' 형식에 할당할 수 없습니다.
  ['*', 2, 3, 4],
     // ~  ~  ~ 'number' 형식은 'string' 형식에 할당할 수 없습니다.
];
